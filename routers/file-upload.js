const { Router } = require("express");
const fs = require("fs");
const multer = require("multer");
const csv = require("fast-csv");
const bcrypt = require("bcrypt");

const User = require("../models").user;

const upload = multer({ dest: "tmp/csv/" });
const router = new Router();

const createAccounts = async (userArray, amountOfDummies, dummyDomain) => {
  // TO-DO: check for duplicates and remove.
  console.log(userArray)
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

  const hashedPasswords = allAccounts.map(a => ({
    ...a,
    password: bcrypt.hashSync(a.password, 4),
  }));

  try {
    await User.bulkCreate(hashedPasswords);
    return allAccounts;
  } catch (e) {
    console.log("Sequelize error", e);
  }
};

router.post("/", upload.single("file"), function (req, res) {
  try {
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
  } catch (e) {
    console.log(e.message)
  }
  
});


router.post("/create-dummies", async (req, res, next) => {
  try {
    const { amount, dummyDomain } = req.body;
    const dummyAccounts = [...Array(parseInt(amount))].map((_, i) => ({
      email: `backup${i}@${dummyDomain}.com`,
      fullName: `Backup Account ${i}`,
      password: Math.random().toString(36).substring(7),
      allowed: true,
    }));

    const hashedPasswords = dummyAccounts.map(d => ({ ...d, password: bcrypt.hashSync(b.password, 4) }))

    await User.bulkCreate(hashedPasswords);

    const cleanAccounts = dummyAccounts.map(a => ({
      fullName: a.fullName,
      email: a.email,
      password: a.password,
    }));
    res.send(cleanAccounts);
    
  } catch (e) {

  }
})

router.post("/reset-db", async (req, res) => {
  try {
    await User.destroy({
      where: {},
      truncate: true,
    });

    await User.create({
      fullName: "Oliver",
      email: "info@oliverumpierre.com",
      allowed: true,
      password: bcrypt.hashSync("freshnclean", 5),
    });

    res.send("DB reset complete");
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
