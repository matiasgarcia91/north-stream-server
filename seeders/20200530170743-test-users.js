"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: "test",
        fullName: "Cristiano Ronaldo",
        allowed: true,
      },
      {
        email: "oli@north.com",
        password: "test",
        fullName: "Oliver Umpierre",
        allowed: false,
      },
      {
        email: "a@north.com",
        password: "test",
        fullName: "Admin Adminsson",
        allowed: false,
      },
      {
        email: "pp@north.com",
        password: "test",
        fullName: "Rock n roll",
        allowed: false,
      },
      {
        email: "jorn@northasg.com",
        password: "test",
        fullName: "Jorn Toes",
        allowed: true,
      },
      {
        email: "max@northasg.com",
        password: "test",
        fullName: "Max Blom",
        allowed: true,
      },
      {
        email: "holley.butler@northasg.com",
        password: "test",
        fullName: "Holley Butler",
        allowed: true,
      },
      {
        email: "sam@northasg.com",
        password: "test",
        fullName: "Sam Watson",
        allowed: true,
      },
      {
        email: "vincent@northasg.com",
        password: "test",
        fullName: "Vincent Schaap",
        allowed: true,
      },
      {
        email: "alex@northasg.com",
        password: "test",
        fullName: "Alex Vliege",
        allowed: true,
      },
      {
        email: "stella@northasg.com",
        password: "test",
        fullName: "Stella de Wildt",
        allowed: true,
      },
      {
        email: "barend@northasg.com",
        password: "test",
        fullName: "Barend Hilterman",
        allowed: true,
      },
      {
        email: "mike@northasg.com",
        password: "test",
        fullName: "Mike Raper",
        allowed: true,
      },
      {
        email: "edwin@northasg.com",
        password: "test",
        fullName: "Edwin Schaap",
        allowed: true,
      },
      {
        email: "leander@northasg.com",
        password: "test",
        fullName: "Leander Stolwijk",
        allowed: true,
      },
      {
        email: "claire@northasg.com",
        password: "test",
        fullName: "Claire Blom",
        allowed: true,
      },
      {
        email: "linda@northasg.com",
        password: "test",
        fullName: "Linda Bomhof",
        allowed: true,
      },
      {
        email: "klaus@northasg.com",
        password: "test",
        fullName: "Klaus Warketin",
        allowed: true,
      },
      {
        email: "thies@northasg.com",
        password: "test",
        fullName: "Thies Jansen",
        allowed: true,
      },
      {
        email: "victoria.stuart@northkb.com",
        password: "test",
        fullName: "Victoria Stuart",
        allowed: true,
      },
      {
        email: "nick@northasg.com",
        password: "test",
        fullName: "Nick Jacobsen",
        allowed: true,
      },
      {
        email: "tom.crosse@northkb.com",
        password: "test",
        fullName: "Tom Crosse",
        allowed: true,
      },
      {
        email: "pat.goodman@northkb.com",
        password: "test",
        fullName: "Pat Goodman",
        allowed: true,
      },
      {
        email: "dewi@northasg.com",
        password: "test",
        fullName: "Dewi van der Lans",
        allowed: true,
      },
      {
        email: "luuk@northasg.com",
        password: "test",
        fullName: "Luuk van den Brule",
        allowed: true,
      },
      {
        email: "glen@northasg.com",
        password: "test",
        fullName: "Glen Hansen",
        allowed: true,
      },
      {
        email: "joost@northasg.com",
        password: "test",
        fullName: "Joost Hezemans",
        allowed: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
