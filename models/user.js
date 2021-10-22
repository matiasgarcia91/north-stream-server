"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      socketId: DataTypes.STRING,
      fullName: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      allowed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
