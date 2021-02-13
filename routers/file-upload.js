const { Router } = require("express");
const fs = require("fs");
const multer = require("multer");
const csv = require("fast-csv");

const User = require("../models").user;

const upload = multer({ dest: "tmp/csv/" });
const router = new Router();

const createAccounts = async (userArray, amountOfDummies, dummyDomain) => {
  const userAccounts = userArray.map(u => ({
    fullName: u.fullName.trim(),
    email: u.email.trim().toLowerCase(),
    allowed: true,
    password: Math.random().toString(36).substring(7),
  }));

  const dummyAccounts = [...Array(parseInt(amountOfDummies))].map((_, i) => ({
    email: `backup${i}@${dummyDomain}.com`,
    fullName: `Backup Account ${i}`,
    password: Math.random().toString(36).substring(7),
    allowed: true,
  }));

  const allAccounts = [...userAccounts, ...dummyAccounts];

  try {
    await User.bulkCreate(allAccounts);
    return allAccounts;
  } catch (e) {
    console.log("Sequelize error", e);
  }
};

router.post("/", upload.single("file"), function (req, res) {
  const fileRows = [];
  // open uploaded file
  const amountOfDummies = req.body.dummies;
  const dummyDomain = req.body.domain;
  fs.createReadStream(req.file.path)
    .pipe(csv.parse({ headers: true }))
    .on("data", data => {
      fileRows.push(data); // push each row
    })
    .on("end", async () => {
      // console.log(fileRows);
      fs.unlinkSync(req.file.path); // remove temp file
      //process "fileRows" and respond
      try {
        const accounts = await createAccounts(
          fileRows,
          amountOfDummies,
          dummyDomain
        );
        const cleanAccounts = accounts.map(a => ({
          fullName: a.fullName,
          email: a.email,
          password: a.password,
        }));
        res.send(cleanAccounts);
      } catch (e) {
        console.log(e.message);
      }
    });
});

module.exports = router;
