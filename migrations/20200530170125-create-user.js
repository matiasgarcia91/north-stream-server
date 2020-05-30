"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      socketId: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
