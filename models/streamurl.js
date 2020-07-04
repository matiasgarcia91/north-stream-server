"use strict";
module.exports = (sequelize, DataTypes) => {
  const streamUrl = sequelize.define(
    "streamUrl",
    {
      url: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  streamUrl.associate = function (models) {
    // associations can be defined here
  };
  return streamUrl;
};
