const { Router } = require("express");
const { Op } = require("sequelize");

const User = require("../models").user;
const Url = require("../models").streamUrl;
const authMiddleware = require("../auth/middleware");
const { generateP } = require("../lib/generate");

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
        hasLoggedIn: !!u.socketId,
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

/*
 ** /admin/url
 * PATCH => update stream url
 * GET => GET stream url
 */

router
  .router("/url", authMiddleware)
  .patch(async (req, res, next) => {
    try {
      const url = await Url.findByPk(1);
      await url.update({ url: req.body.url });
      res.send(url);
    } catch (e) {
      next(e);
    }
  })
  .get(async (req, res, next) => {
    try {
      const url = await Url.findByPk(1);
      res.send({ url: url.url });
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
