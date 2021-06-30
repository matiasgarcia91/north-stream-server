const { Router } = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");
const fs = require("fs");
const multer = require("multer");
const csv = require("fast-csv");

const upload = multer({ dest: "tmp/csv/" });
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password, socketId } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("Invalid Credentials");
    if (!user.allowed)
      return res.status(401).send("Not allowed to join the stream yet");

    // const passwordMatch = bcrypt.compareSync(password.trim(), user.password);
    // if (!passwordMatch) return res.status(401).send("Invalid Credentials");

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

router.post("/admin/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("No user with this email found");

    const passwordMatch = bcrypt.compareSync(password.trim(), user.password);
    if (!passwordMatch || !user.admin)
      return res
        .status(401)
        .send("Unauthorized, wrong credentials or user not admin");

    res.send({
      id: user.id,
      email,
      fullName: user.fullName,
      message: "Admin login",
      admin: true,
    });
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

module.exports = router;
