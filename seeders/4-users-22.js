"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "backup9@northasg.com",
        fullName: "Backup Account 9",
        password: bcrypt.hashSync("ah0n1c", 5),
        allowed: true,
      },
      {
        email: "backup10@northasg.com",
        fullName: "Backup Account 10",
        password: bcrypt.hashSync("lpbnbo", 5),
        allowed: true,
      },
      {
        email: "backup11@northasg.com",
        fullName: "Backup Account 11",
        password: bcrypt.hashSync("d8pgn9r", 5),
        allowed: true,
      },
      {
        email: "backup12@northasg.com",
        fullName: "Backup Account 12",
        password: bcrypt.hashSync("1uzk8", 5),
        allowed: true,
      },
      {
        email: "backup13@northasg.com",
        fullName: "Backup Account 13",
        password: bcrypt.hashSync("65ufy", 5),
        allowed: true,
      },
      {
        email: "backup14@northasg.com",
        fullName: "Backup Account 14",
        password: bcrypt.hashSync("4j30a", 5),
        allowed: true,
      },
      {
        email: "backup15@northasg.com",
        fullName: "Backup Account 15",
        password: bcrypt.hashSync("b517b", 5),
        allowed: true,
      },
      {
        email: "backup16@northasg.com",
        fullName: "Backup Account 16",
        password: bcrypt.hashSync("qi5yg", 5),
        allowed: true,
      },
      {
        email: "backup17@northasg.com",
        fullName: "Backup Account 17",
        password: bcrypt.hashSync("i1p82q", 5),
        allowed: true,
      },
      {
        email: "backup18@northasg.com",
        fullName: "Backup Account 18",
        password: bcrypt.hashSync("06dce", 5),
        allowed: true,
      },
      {
        email: "backup19@northasg.com",
        fullName: "Backup Account 19",
        password: bcrypt.hashSync("s3suw", 5),
        allowed: true,
      },
      {
        email: "backup20@northasg.com",
        fullName: "Backup Account 20",
        password: bcrypt.hashSync("qoqr5l", 5),
        allowed: true,
      },
      {
        email: "backup21@northasg.com",
        fullName: "Backup Account 21",
        password: bcrypt.hashSync("llo18u", 5),
        allowed: true,
      },
      {
        email: "backup22@northasg.com",
        fullName: "Backup Account 22",
        password: bcrypt.hashSync("vrk74n", 5),
        allowed: true,
      },
      {
        email: "backup23@northasg.com",
        fullName: "Backup Account 23",
        password: bcrypt.hashSync("bksnn", 5),
        allowed: true,
      },
      {
        email: "backup24@northasg.com",
        fullName: "Backup Account 24",
        password: bcrypt.hashSync("263v4j", 5),
        allowed: true,
      },
      {
        email: "backup25@northasg.com",
        fullName: "Backup Account 25",
        password: bcrypt.hashSync("as5jio", 5),
        allowed: true,
      },
      {
        email: "backup26@northasg.com",
        fullName: "Backup Account 26",
        password: bcrypt.hashSync("y4gdsv", 5),
        allowed: true,
      },
      {
        email: "backup27@northasg.com",
        fullName: "Backup Account 27",
        password: bcrypt.hashSync("zxxow5", 5),
        allowed: true,
      },
      {
        email: "backup28@northasg.com",
        fullName: "Backup Account 28",
        password: bcrypt.hashSync("7gy1lb", 5),
        allowed: true,
      },
      {
        email: "backup29@northasg.com",
        fullName: "Backup Account 29",
        password: bcrypt.hashSync("hx3cxb", 5),
        allowed: true,
      },
      {
        email: "backup30@northasg.com",
        fullName: "Backup Account 30",
        password: bcrypt.hashSync("2ybkj", 5),
        allowed: true,
      },
      {
        email: "backup31@northasg.com",
        fullName: "Backup Account 31",
        password: bcrypt.hashSync("8pp4y", 5),
        allowed: true,
      },
      {
        email: "backup32@northasg.com",
        fullName: "Backup Account 32",
        password: bcrypt.hashSync("ggwgki", 5),
        allowed: true,
      },
      {
        email: "backup33@northasg.com",
        fullName: "Backup Account 33",
        password: bcrypt.hashSync("ecna74", 5),
        allowed: true,
      },
      {
        email: "backup34@northasg.com",
        fullName: "Backup Account 34",
        password: bcrypt.hashSync("uwrerk", 5),
        allowed: true,
      },
      {
        email: "backup35@northasg.com",
        fullName: "Backup Account 35",
        password: bcrypt.hashSync("z5jg7", 5),
        allowed: true,
      },
      {
        email: "backup36@northasg.com",
        fullName: "Backup Account 36",
        password: bcrypt.hashSync("yfn0sq", 5),
        allowed: true,
      },
      {
        email: "backup37@northasg.com",
        fullName: "Backup Account 37",
        password: bcrypt.hashSync("4uh3jk", 5),
        allowed: true,
      },
      {
        email: "backup38@northasg.com",
        fullName: "Backup Account 38",
        password: bcrypt.hashSync("k0z1a", 5),
        allowed: true,
      },
      {
        email: "backup39@northasg.com",
        fullName: "Backup Account 39",
        password: bcrypt.hashSync("rxr3n7", 5),
        allowed: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
