const { Router } = require("express");
const { Op } = require("sequelize");

const User = require("../models").user;
const Event = require("../models").event;

const { generateP } = require("../lib/generate");
const { sendEmails } = require("../lib/emails");
const authMiddleware = require("../auth/middleware");

const router = new Router();

/*
Admin Router (Requires JWT)

** /admin/users
* GET  => User[] 
* POST: Creates a new user
    params:
      fullName: String,
      email: String,
    returns: User
*/
router
  .route("/users", authMiddleware)
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll({ raw: true });

      const clean = users.map(({ socketId, ...u }) => ({
        ...u,
        hasLoggedIn: !!socketId,
      }));

      res.send(clean);
    } catch (e) {
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const { email, fullName, admin } = req.body;

      if (!email || !fullName)
        return res.status(400).send("Must send email and fullName");

      const user = {
        email: email.trim().toLowerCase(),
        fullName: fullName.trim(),
        password: generateP(),
        allowed: true,
        admin,
      };
      const newUser = await User.create(user);

      res.send(newUser);
    } catch (e) {
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const userIds = req.body.userIds;
      if (!userIds) return res.status(400).send("pass userIds");
      const deleted = await User.destroy({
        where: {
          id: { [Op.in]: userIds },
        },
      });
      console.log("deleted", deleted);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  });

/*
** /admin/users/admin
* PATCH - Updates admin users property for selected Ids
    params:
      - userIds: [1,5,15]
      - admin: Boolean
    returns:
      - amount: Number
*/
router.patch("/users/admin", authMiddleware, async (req, res, next) => {
  try {
    const { userIds, admin } = req.body;

    if (!userIds?.length)
      return res.status(400).send("Must select at least 1 user");
    console.log(Op);
    const updated = await User.update(
      { admin },
      {
        where: {
          id: {
            [Op.in]: userIds,
          },
        },
      }
    );

    console.log(updated);

    res.send(updated);
  } catch (e) {
    next(e);
  }
});

//Sends an email to all or selected users.
router.post("/users/email", authMiddleware, async (req, res, next) => {
  try {
    const { userIds, all, subject, content } = req.body;

    console.log(req.body);

    if (!all && (!userIds || !userIds.length))
      return res.status(400).send("Wrong parameters");

    const condition = all
      ? { email: { [Op.notLike]: "backup%" } }
      : { id: { [Op.in]: userIds } };

    const users = await User.findAll({
      where: condition,
      attributes: ["id", "email", "password"],
      raw: true,
    });

    await sendEmails(users, subject, content);

    const updated = users.map((u) => u.id);
    await User.update(
      { emailSent: true },
      {
        where: { id: { [Op.in]: updated } },
      }
    );

    res.send("sent");
  } catch (e) {
    console.log("broken in route", e.message);
    next(e);
  }
});

router.post("/reset-db", authMiddleware, async (req, res) => {
  try {
    await User.destroy({
      where: {},
      truncate: true,
    });

    await User.bulkCreate(
      {
        fullName: "Oliver",
        email: "info@oliverumpierre.com",
        allowed: true,
        password: "freshnclean",
        admin: true,
        emailSent: false,
      },
      {
        fullName: "Matias Garcia",
        email: "matiasigarcia91@gmail.com",
        allowed: true,
        password: "freshnclean",
        admin: true,
        emailSent: false,
      }
    );

    res.send("DB reset complete");
  } catch (e) {
    console.log(e.message);
  }
});

// /admin/event

router
  .route("/event")
  .get(async (req, res, next) => {
    try {
      const event = await Event.findByPk(1);
      res.send({ event });
    } catch (e) {
      console.log(e.message);
    }
  })
  .patch(authMiddleware, async (req, res, next) => {
    try {
      const { streamEvent } = req.body;
      if (!streamEvent || !Object.keys(streamEvent).length)
        return res.status(400).send("Incomplete event");

      const eventKeys = ["livechatId", "streamUrl", "watermark", "name"];

      const cleanEvent = eventKeys.reduce(
        (acc, key) =>
          !streamEvent[key] && streamEvent[key] !== false
            ? acc
            : { ...acc, [key]: streamEvent[key] },
        {}
      );
      console.log(cleanEvent);
      const settings = await Event.findByPk(1);

      await settings.update(cleanEvent);
      res.send({ streamEvent: settings });
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
