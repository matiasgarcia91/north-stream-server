const nodemailer = require("nodemailer");
const { toEternalJWT } = require("../auth/jwt");

async function sendEmails(users, subject, content) {
  // create reusable transporter object using the default SMTP transport
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const emailPromises = users.map(async (u) => {
    const token = toEternalJWT({ userId: u.id });
    const link = `https://www.live-northasg.com/confirmation/${token}`;
    // const link = `http://localhost:3000/confirmation/${token}`;
    const mailOptions = {
      to: u.email, // list of receivers
      from: "Livestream | N.A.G <livestream@northasg.com>",
      subject,
      html:
        `Hi ${u.fullName}<br></br>` +
        content +
        `<br>
        <font size="3">
        <br><b><u>Personal login only</u></b></br>
        <b>Username:</b> ${u.email}<br>
        <b>Password:</b> <a href="${link}">Click here</a> to confirm your account and retrieve your access code.<br>
        <b>Website link:</b> <a href="https://www.live-northasg.com">https://www.live-northasg.com</a>
        </font>
        <br></br>
        <b>Team North Actionsports Group</b>
        <br></br>
`,
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
