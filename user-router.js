const { Router } = require("express");
const User = require("./models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password, socketId } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("No user with this email found");

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.status(401).send("Wrong password");

    if (user.socketId) {
      req.io
        .to(user.socketId)
        .emit("Hey fuckface!", "This is mr server speaking, you're out");
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

    const passwordMatch = bcrypt.compareSync(password, user.password);
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

module.exports = router;
