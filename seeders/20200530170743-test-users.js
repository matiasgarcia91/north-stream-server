"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: "test",
        fullName: "Ronaldo Cris",
      },
      {
        email: "oli@north.com",
        password: "test",
        fullName: "Oliver u",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
