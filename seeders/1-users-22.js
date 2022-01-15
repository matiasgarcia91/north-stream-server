"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Oliver Umpierre",
        email: "info@oliverumpierre.com",
        allowed: true,
        password: "freshnclean",
        admin: true,
        emailSent: false,
        emailOpened: false,
      },
      {
        fullName: "Matias Garcia",
        email: "matiasigarcia91@gmail.com",
        allowed: true,
        password: "freshnclean",
        admin: true,
        emailSent: false,
        emailOpened: false,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
