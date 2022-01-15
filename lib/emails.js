const nodemailer = require("nodemailer");
const { toJWT } = require("../auth/jwt");

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
    const token = toJWT({ userId: u.id });
    // const link = `https://www.live-northasg.com/confirmation/${token}`;
    const link = `http://localhost:3000/confirmation/${token}`;
    const mailOptions = {
      to: u.email, // list of receivers
      from: "Livestream | N.A.G <livestream@northasg.com>",
      subject,
      html:
        `Hi ${u.fullName}<br></br>` +
        content +
        `<br></br>
        <br><b>Personal login only:</b></br>
        <br>Website link: <a href="https://www.live-northasg.com">https://www.live-northasg.com</a></br>
        <br>To confirm your account and retrieve your access code please click the link below:</br>
        <br>Link: ${link}</br>
        <br>User: <b>${u.email}</b></br>
        <br>Access code: <b>${u.password}</b></br>
        <br></br>
        <img src="https://electricamericas.com/wp-content/uploads/2022/01/Mystic.jpg" alt="logo"/>`,
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
