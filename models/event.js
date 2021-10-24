"use strict";
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    "event",
    {
      name: DataTypes.STRING,
      livechatId: DataTypes.INTEGER,
      streamUrl: DataTypes.STRING,
      watermark: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {}
  );
  event.associate = function (models) {
    // associations can be defined here
  };
  return event;
};
