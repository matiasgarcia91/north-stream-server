"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("events", [
      {
        streamUrl: "438316874",
        name: "North Sails Live Stream",
        watermark: true,
        livechatId: "145123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
  },
};

// name: DataTypes.STRING,
//       livechatId: DataTypes.STRING,
//       streamUrl: DataTypes.STRING,
//       watermark: { type: DataTypes.BOOLEAN, defaultValue: true },
