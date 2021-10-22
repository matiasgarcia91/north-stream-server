"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Oliver",
        email: "info@oliverumpierre.com",
        allowed: true,
        password: "freshnclean",
        admin: true,
      },
      {
        fullName: "Oliver",
        email: "matiasigarcia91@gmail.com",
        allowed: true,
        password: "freshnclean",
        admin: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
