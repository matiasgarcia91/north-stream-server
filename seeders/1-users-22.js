"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Oliver",
        email: "info@oliverumpierre.com",
        allowed: true,
        password: bcrypt.hashSync("freshnclean", 10),
      },
      {
        fullName: "La Excusa Guest",
        email: "gracias@laexcusa-live.com",
        allowed: true,
        password: bcrypt.hashSync("envivo2021", 10),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
