const nodemailer = require("nodemailer");

async function sendEmails(users, subject, content) {
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

  const emailPromises = users.map(async (u) => {
    const mailOptions = {
      to: u.email, // list of receivers
      sender: process.env.EMAIL_USER,
      subject,
      html:
        content +
        `<br></br><br>Your access code for the event is: <b>${u.password}</b></br>  `,
      //html: "<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>",
    };
    try {
      const success = await transporter.sendMail(mailOptions);
      console.log(success);
      return success;
    } catch (e) {
      console.log("error sending email");
      console.log(e.message);
      return "error";
    }
  });
  // console.log(transporter);

  await Promise.all(emailPromises);

  return;
}

module.exports = { sendEmails };
