const nodemailer = require("nodemailer");

async function sendEmails(listOfEmails, subject, content) {
  // create reusable transporter object using the default SMTP transport
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

    //secure: true,
  });

  // console.log(transporter);
  const mailOptions = {
    to: listOfEmails.join(", "), // list of receivers
    sender: process.env.EMAIL_USER,
    subject,
    html: "<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>",
  };

  console.log(mailOptions);

  try {
    const success = await transporter.sendMail(mailOptions);
    return success;
  } catch (e) {
    console.log("error sending email");
    console.log(e.message);
    return "error";
  }
}

module.exports = { sendEmails };
