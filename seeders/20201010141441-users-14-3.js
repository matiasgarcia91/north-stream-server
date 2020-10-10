"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "backup0@northasg.com",
        fullName: "Backup Account 0",
        password: bcrypt.hashSync("ilyt25", 5),
        allowed: true,
      },
      {
        email: "backup1@northasg.com",
        fullName: "Backup Account 1",
        password: bcrypt.hashSync("70544b", 5),
        allowed: true,
      },
      {
        email: "backup2@northasg.com",
        fullName: "Backup Account 2",
        password: bcrypt.hashSync("wg7cdp", 5),
        allowed: true,
      },
      {
        email: "backup3@northasg.com",
        fullName: "Backup Account 3",
        password: bcrypt.hashSync("00f4c2", 5),
        allowed: true,
      },
      {
        email: "backup4@northasg.com",
        fullName: "Backup Account 4",
        password: bcrypt.hashSync("se08we", 5),
        allowed: true,
      },
      {
        email: "backup5@northasg.com",
        fullName: "Backup Account 5",
        password: bcrypt.hashSync("625idj", 5),
        allowed: true,
      },
      {
        email: "backup6@northasg.com",
        fullName: "Backup Account 6",
        password: bcrypt.hashSync("v82rrf", 5),
        allowed: true,
      },
      {
        email: "backup7@northasg.com",
        fullName: "Backup Account 7",
        password: bcrypt.hashSync("h7516g", 5),
        allowed: true,
      },
      {
        email: "backup8@northasg.com",
        fullName: "Backup Account 8",
        password: bcrypt.hashSync("jla7ow", 5),
        allowed: true,
      },
      {
        email: "backup9@northasg.com",
        fullName: "Backup Account 9",
        password: bcrypt.hashSync("qk7bhb", 5),
        allowed: true,
      },
      {
        email: "backup10@northasg.com",
        fullName: "Backup Account 10",
        password: bcrypt.hashSync("b4xwz", 5),
        allowed: true,
      },
      {
        email: "backup11@northasg.com",
        fullName: "Backup Account 11",
        password: bcrypt.hashSync("hs31k", 5),
        allowed: true,
      },
      {
        email: "backup12@northasg.com",
        fullName: "Backup Account 12",
        password: bcrypt.hashSync("w97pqt", 5),
        allowed: true,
      },
      {
        email: "backup13@northasg.com",
        fullName: "Backup Account 13",
        password: bcrypt.hashSync("7cbtze", 5),
        allowed: true,
      },
      {
        email: "backup14@northasg.com",
        fullName: "Backup Account 14",
        password: bcrypt.hashSync("w0mbq8", 5),
        allowed: true,
      },
      {
        email: "backup15@northasg.com",
        fullName: "Backup Account 15",
        password: bcrypt.hashSync("gwdls", 5),
        allowed: true,
      },
      {
        email: "backup16@northasg.com",
        fullName: "Backup Account 16",
        password: bcrypt.hashSync("9rr6m", 5),
        allowed: true,
      },
      {
        email: "backup17@northasg.com",
        fullName: "Backup Account 17",
        password: bcrypt.hashSync("waesfq", 5),
        allowed: true,
      },
      {
        email: "backup18@northasg.com",
        fullName: "Backup Account 18",
        password: bcrypt.hashSync("s8kwci", 5),
        allowed: true,
      },
      {
        email: "backup19@northasg.com",
        fullName: "Backup Account 19",
        password: bcrypt.hashSync("jpmxwb", 5),
        allowed: true,
      },
      {
        email: "backup20@northasg.com",
        fullName: "Backup Account 20",
        password: bcrypt.hashSync("je0pm8", 5),
        allowed: true,
      },
      {
        email: "backup21@northasg.com",
        fullName: "Backup Account 21",
        password: bcrypt.hashSync("91fklj", 5),
        allowed: true,
      },
      {
        email: "backup22@northasg.com",
        fullName: "Backup Account 22",
        password: bcrypt.hashSync("t88z3ak", 5),
        allowed: true,
      },
      {
        email: "backup23@northasg.com",
        fullName: "Backup Account 23",
        password: bcrypt.hashSync("dgu9b", 5),
        allowed: true,
      },
      {
        email: "backup24@northasg.com",
        fullName: "Backup Account 24",
        password: bcrypt.hashSync("xs7pl", 5),
        allowed: true,
      },
      {
        email: "backup25@northasg.com",
        fullName: "Backup Account 25",
        password: bcrypt.hashSync("77wu9g", 5),
        allowed: true,
      },
      {
        email: "backup26@northasg.com",
        fullName: "Backup Account 26",
        password: bcrypt.hashSync("ld7ba", 5),
        allowed: true,
      },
      {
        email: "backup27@northasg.com",
        fullName: "Backup Account 27",
        password: bcrypt.hashSync("96xbub", 5),
        allowed: true,
      },
      {
        email: "backup28@northasg.com",
        fullName: "Backup Account 28",
        password: bcrypt.hashSync("arwwpl", 5),
        allowed: true,
      },
      {
        email: "backup29@northasg.com",
        fullName: "Backup Account 29",
        password: bcrypt.hashSync("o3gcr9", 5),
        allowed: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
