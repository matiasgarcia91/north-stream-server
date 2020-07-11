"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Cristiano Ronaldo",
        allowed: true,
      },
      {
        email: "oli@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Oliver Umpierre",
        allowed: false,
      },
      {
        email: "a@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Admin Adminsson",
        allowed: false,
      },
      {
        email: "pp@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Rock n roll",
        allowed: false,
      },
      {
        email: "jorn@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Jorn Toes",
        allowed: true,
      },
      {
        email: "max@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Max Blom",
        allowed: true,
      },
      {
        email: "holley.butler@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Holley Butler",
        allowed: true,
      },
      {
        email: "sam@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Sam Watson",
        allowed: true,
      },
      {
        email: "vincent@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Vincent Schaap",
        allowed: true,
      },
      {
        email: "alex@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Alex Vliege",
        allowed: true,
      },
      {
        email: "stella@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Stella de Wildt",
        allowed: true,
      },
      {
        email: "barend@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Barend Hilterman",
        allowed: true,
      },
      {
        email: "mike@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Mike Raper",
        allowed: true,
      },
      {
        email: "edwin@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Edwin Schaap",
        allowed: true,
      },
      {
        email: "leander@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Leander Stolwijk",
        allowed: true,
      },
      {
        email: "claire@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Claire Blom",
        allowed: true,
      },
      {
        email: "linda@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Linda Bomhof",
        allowed: true,
      },
      {
        email: "klaus@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Klaus Warketin",
        allowed: true,
      },
      {
        email: "thies@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Thies Jansen",
        allowed: true,
      },
      {
        email: "victoria.stuart@northkb.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Victoria Stuart",
        allowed: true,
      },
      {
        email: "nick@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Nick Jacobsen",
        allowed: true,
      },
      {
        email: "tom.crosse@northkb.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Tom Crosse",
        allowed: true,
      },
      {
        email: "pat.goodman@northkb.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Pat Goodman",
        allowed: true,
      },
      {
        email: "dewi@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Dewi van der Lans",
        allowed: true,
      },
      {
        email: "luuk@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Luuk van den Brule",
        allowed: true,
      },
      {
        email: "glen@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Glen Hansen",
        allowed: true,
      },
      {
        email: "joost@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Joost Hezemans",
        allowed: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
