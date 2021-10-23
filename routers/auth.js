const { Router } = require("express");

const User = require("../models").user;
const Event = require("../models").event;
const { toJWT } = require("../auth/jwt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password, socketId } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("Invalid Credentials");
    if (!user.allowed)
      return res.status(401).send("Not allowed to join the stream yet");

    const passwordMatch = password.trim() == user.password;
    if (!passwordMatch) return res.status(401).send("Invalid Credentials");

    if (user.socketId) {
      req.io
        .to(user.socketId)
        .emit("kick-out", "This is mr server speaking, you're out");
    }

    await user.update({ socketId });
    res.send({
      id: user.id,
      email,
      fullName: user.fullName,
      message: "SocketID registered",
    });
  } catch (e) {
    next(e);
  }
});

router.post("/login/admin", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("No user with this email found");

    const passwordMatch = password.trim() === user.password;
    if (!passwordMatch || !user.admin)
      return res
        .status(401)
        .send("Unauthorized, wrong credentials or user not admin");

    const token = toJWT({ userId: user.id });

    const event = await Event.findByPk(1);

    res.send({
      user: {
        id: user.id,
        email,
        fullName: user.fullName,
        message: "Admin login",
        admin: true,
        token,
      },
      event,
    });
  } catch (e) {
    next(e);
  }
});

/*
// Legacy endpoints
// Enables a group of users to join the stream ==> should be tested again.
router.patch("/allow-many", async (req, res, next) => {
  try {
    const { emails } = req.body;
    if (!emails || !emails.length)
      return res
        .status(400)
        .send(
          "Please provide a list of email address to allow them into the stream"
        );

    const users = await User.findAll({ where: { email: emails } });

    if (!users.length) return res.status(404).send(`Users not found`);
    const userUpdates = users.map(async u => await u.update({ allowed: true }));
    await Promise.all(userUpdates);

    return res.send(`Users: ${emails} allowed into the stream`);
  } catch (e) {
    next(e);
  }
});


// Kicks out a group of users from the stream ==> should be tested again.
router.patch("/block-many", async (req, res, next) => {
  try {
    const { emails } = req.body;
    if (!emails || !emails.length)
      return res
        .status(400)
        .send(
          "Please provide a list of email address to block them from the stream"
        );

    const users = await User.findAll({ where: { email: emails } });

    if (!users.length) return res.status(404).send(`Users not found`);
    const userUpdates = users.map(async u => {
      req.io
        .to(u.socketId)
        .emit("end-stream", "This is mr server speaking, you're out");
      return await u.update({ allowed: false });
    });
    await Promise.all(userUpdates);

    return res.send(`Users: ${emails} blocked from the stream`);
  } catch (e) {
    next(e);
  }
});

router.patch("/allow", async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res
        .status(400)
        .send(
          "Please provide a users email address to allow them into the stream"
        );

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(404).send(`User with email: ${email}, not found`);
    await user.update({ allowed: true });
    return res.send(`User ${email} allowed into the stream`);
  } catch (e) {
    next(e);
  }
});

router.patch("/block", async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res
        .status(400)
        .send(
          "Please provide a users email address to allow them into the stream"
        );

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(404).send(`User with email: ${email}, not found`);
    await user.update({ allowed: false });
    req.io
      .to(user.socketId)
      .emit("end-stream", "This is mr server speaking, you're out");
    return res.send(`User ${email} blocked out of the stream`);
  } catch (e) {
    next(e);
  }
});

// Re-generates password for user 
router.patch("/password", async (req, res, next) => {
  try {
    if (!req.body.email) return res.status(400).send("provide email address");
    const newPass = Math.random().toString(36).substring(7);
    const user = await User.findOne({ where: { email: req.body.email } });
    await user.update({ password: newPass });
    res.send({ newPass });
  } catch (e) {
    next(e);
  }
});

// Creates an {amount} of dummyAccounts, generates passwords for them and sends them back
router.post("/create-dummies", async (req, res, next) => {
  try {
    const { amount, dummyDomain } = req.body;
    const dummyAccounts = [...Array(parseInt(amount))].map((_, i) => ({
      email: `backup${i}@${dummyDomain}.com`,
      fullName: `Backup Account ${i}`,
      password: Math.random().toString(36).substring(7),
      allowed: true,
    }));

    const hashedPasswords = dummyAccounts.map(d => ({
      ...d,
      password: d.password,
    }));

    await User.bulkCreate(hashedPasswords);

    res.send(dummyAccounts);
  } catch (e) {
    console.log(e.message);
  }
});

*/

module.exports = router;
