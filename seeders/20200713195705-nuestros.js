"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: "test",
        fullName: "Matias Garcia",
        allowed: true,
      },
      {
        email: "oli@north.com",
        password: "test",
        fullName: "Oliver Umpierre",
        allowed: true,
      },
      {
        email: "tuti@north.com",
        password: "test",
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
        email: "extra1@live-northasg.com",
        password: "extra1",
        fullName: "Extra User 1",
        allowed: true,
      },
      {
        email: "extra2@live-northasg.com",
        password: "extra2",
        fullName: "Extra User 2",
        allowed: true,
      },
      {
        email: "extra3@live-northasg.com",
        password: "extra3",
        fullName: "Extra User 3",
        allowed: true,
      },
      {
        email: "extra4@live-northasg.com",
        password: "extra4",
        fullName: "Extra User 4",
        allowed: true,
      },
      {
        email: "extra5@live-northasg.com",
        password: "extra5",
        fullName: "Extra User 5",
        allowed: true,
      },
      {
        email: "extra6@live-northasg.com",
        password: "extra6",
        fullName: "Extra User 6",
        allowed: true,
      },
      {
        email: "extra7@live-northasg.com",
        password: "extra7",
        fullName: "Extra User 7",
        allowed: true,
      },
      {
        email: "extra8@live-northasg.com",
        password: "extra8",
        fullName: "Extra User 8",
        allowed: true,
      },
      {
        email: "extra9@live-northasg.com",
        password: "extra9",
        fullName: "Extra User 9",
        allowed: true,
      },
      {
        email: "extra10@live-northasg.com",
        password: "extra10",
        fullName: "Extra User 10",
        allowed: true,
      },
      {
        email: "extra11@live-northasg.com",
        password: "extra11",
        fullName: "Extra User 11",
        allowed: true,
      },
      {
        email: "extra12@live-northasg.com",
        password: "extra12",
        fullName: "Extra User 12",
        allowed: true,
      },
      {
        email: "extra13@live-northasg.com",
        password: "extra13",
        fullName: "Extra User 13",
        allowed: true,
      },
      {
        email: "extra14@live-northasg.com",
        password: "extra14",
        fullName: "Extra User 14",
        allowed: true,
      },
      {
        email: "extra15@live-northasg.com",
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
