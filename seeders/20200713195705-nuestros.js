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
        password: "control",
        fullName: "Retailers Control",
        allowed: false,
      },
      {
        email: "extraUser1@north.com",
        password: "extra1",
        fullName: "Extra User 1",
        allowed: true,
      },
      {
        email: "extraUser2@north.com",
        password: "extra2",
        fullName: "Extra User 2",
        allowed: true,
      },
      {
        email: "extraUser3@north.com",
        password: "extra3",
        fullName: "Extra User 3",
        allowed: true,
      },
      {
        email: "extraUser4@north.com",
        password: "extra4",
        fullName: "Extra User 4",
        allowed: true,
      },
      {
        email: "extraUser5@north.com",
        password: "extra5",
        fullName: "Extra User 5",
        allowed: true,
      },
      {
        email: "extraUser6@north.com",
        password: "extra6",
        fullName: "Extra User 6",
        allowed: true,
      },
      {
        email: "extraUser7@north.com",
        password: "extra7",
        fullName: "Extra User 7",
        allowed: true,
      },
      {
        email: "extraUser8@north.com",
        password: "extra8",
        fullName: "Extra User 8",
        allowed: true,
      },
      {
        email: "extraUser9@north.com",
        password: "extra9",
        fullName: "Extra User 9",
        allowed: true,
      },
      {
        email: "extraUser10@north.com",
        password: "extra10",
        fullName: "Extra User 10",
        allowed: true,
      },
      {
        email: "extraUser11@north.com",
        password: "extra11",
        fullName: "Extra User 11",
        allowed: true,
      },
      {
        email: "extraUser12@north.com",
        password: "extra12",
        fullName: "Extra User 12",
        allowed: true,
      },
      {
        email: "extraUser13@north.com",
        password: "extra13",
        fullName: "Extra User 13",
        allowed: true,
      },
      {
        email: "extraUser14@north.com",
        password: "extra14",
        fullName: "Extra User 14",
        allowed: true,
      },
      {
        email: "extraUser15@north.com",
        password: "extra15",
        fullName: "Extra User 15",
        allowed: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
