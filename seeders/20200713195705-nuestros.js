"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: "nosotro",
        fullName: "Matias Garcia",
        allowed: true,
      },
      {
        email: "oli@north.com",
        password: "nosotro",
        fullName: "Oliver Umpierre",
        allowed: true,
      },
      {
        email: "tuti@north.com",
        password: "nosotro",
        fullName: "Tuti Iraola",
        allowed: true,
      },
      {
        email: "control1@north.com",
        password: "test",
        fullName: "Retailers Control",
        allowed: true,
      },
      {
        email: "extraUser1@north.com",
        password: "test",
        fullName: "Extra User 1",
        allowed: true,
      },
      {
        email: "extraUser2@north.com",
        password: "test",
        fullName: "Extra User 2",
        allowed: true,
      },
      {
        email: "extraUser3@north.com",
        password: "test",
        fullName: "Extra User 3",
        allowed: true,
      },
      {
        email: "extraUser4@north.com",
        password: "test",
        fullName: "Extra User 4",
        allowed: true,
      },
      {
        email: "extraUser5@north.com",
        password: "test",
        fullName: "Extra User 5",
        allowed: true,
      },
      {
        email: "extraUser6@north.com",
        password: "test",
        fullName: "Extra User 6",
        allowed: true,
      },
      {
        email: "extraUser7@north.com",
        password: "test",
        fullName: "Extra User 7",
        allowed: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
