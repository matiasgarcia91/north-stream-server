const nodemailer = require("nodemailer");

async function sendEmails(listOfEmails, subject, content) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    // port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    // service: "Gmail",
    auth: {
      user: process.env.emailUser,
      pass: process.env.emailPass,
    },
    //secure: true,
  });

  // console.log(transporter);
  const mailOptions = {
    to: listOfEmails.join(", "), // list of receivers
    subject,
    html: "<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>",
  };

  console.log(mailOptions);

  try {
    const success = await transporter.sendMail(mailOptions);
    return success;
  } catch (e) {
    console.log("error sending email");
    return "error";
  }
}

module.exports = { sendEmails };
