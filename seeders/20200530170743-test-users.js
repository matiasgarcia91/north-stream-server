"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Ronaldo Cris",
        admin: false,
      },
      {
        email: "oli@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Oliver u",
        admin: false,
      },
      {
        email: "a@north.com",
        password: bcrypt.hashSync("admin", 10),
        fullName: "Admin Adminsson",
        admin: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
