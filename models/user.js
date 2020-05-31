"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      socketId: DataTypes.STRING,
      fullName: DataTypes.STRING,
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};
