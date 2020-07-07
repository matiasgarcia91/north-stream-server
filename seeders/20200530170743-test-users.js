"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "mg@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Cristiano Ronaldo",
        admin: false,
      },
      {
        email: "oli@north.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Oliver Umpierre",
        admin: false,
      },
      {
        email: "a@north.com",
        password: bcrypt.hashSync("admin", 10),
        fullName: "Admin Adminsson",
        admin: true,
      },
      {
        email: "jorn@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Jorn Toes",
        admin: false,
      },
      {
        email: "max@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Max Blom",
        admin: false,
      },
      {
        email: "holley.butler@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Holley Butler",
        admin: false,
      },
      {
        email: "sam@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Sam Watson",
        admin: false,
      },
      {
        email: "vincent@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Vincent Schaap",
        admin: false,
      },
      {
        email: "alex@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Alex Vliege",
        admin: false,
      },
      {
        email: "stella@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Stella de Wildt",
        admin: false,
      },
      {
        email: "barend@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Barend Hilterman",
        admin: false,
      },
      {
        email: "mike@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Mike Raper",
        admin: false,
      },
      {
        email: "edwin@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Edwin Schaap",
        admin: false,
      },
      {
        email: "leander@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Leander Stolwijk",
        admin: false,
      },
      {
        email: "claire@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Claire Blom",
        admin: false,
      },
      {
        email: "linda@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Linda Bomhof",
        admin: false,
      },
      {
        email: "klaus@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Klaus Warketin",
        admin: false,
      },
      {
        email: "thies@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Thies Jansen",
        admin: false,
      },
      {
        email: "victoria.stuart@northkb.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Victoria Stuart",
        admin: false,
      },
      {
        email: "nick@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Nick Jacobsen",
        admin: false,
      },
      {
        email: "tom.crosse@northkb.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Tom Crosse",
        admin: false,
      },
      {
        email: "pat.goodman@northkb.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Pat Goodman",
        admin: false,
      },
      {
        email: "dewi@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Dewi van der Lans",
        admin: false,
      },
      {
        email: "luuk@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Luuk van den Brule",
        admin: false,
      },
      {
        email: "glen@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Glen Hansen",
        admin: false,
      },
      {
        email: "joost@northasg.com",
        password: bcrypt.hashSync("test", 10),
        fullName: "Joost Hezemans",
        admin: false,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
