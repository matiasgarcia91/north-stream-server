"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Cristiano Ronaldo",
        admin: false,
      },
      {
        email: "oli@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Oliver Umpierre",
        admin: false,
      },
      {
        email: "a@north.com",
        password: bcrypt.hashSync("admin", 10),
        fullName: "Admin Adminsson",
        admin: true,
      },
      {
        email: "jorn@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Jorn Toes",
        admin: false,
      },
      {
        email: "max@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Max Blom",
        admin: false,
      },
      {
        email: "holley.butler@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Holley Butler",
        admin: false,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
