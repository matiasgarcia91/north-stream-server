"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Esperanza",
        email: "esperanza@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("hfdras", 5),
      },
      {
        name: "Robert",
        email: "robert@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("pouxeo", 5),
      },
      {
        name: "Anna",
        email: "invoicing@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("bvvyhe", 5),
      },
      {
        name: "Mireille",
        email: "mireille@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("c6u81w", 5),
      },
      {
        name: "Jacqueline",
        email: "jacqueline@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("zzzpp", 5),
      },
      {
        name: "Corrien",
        email: "corrien@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("qybmxp", 5),
      },
      {
        name: "Peet",
        email: "peet@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("p81g3", 5),
      },
      {
        name: "Marjo",
        email: "marjo@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("fr9802", 5),
      },
      {
        name: "Jose",
        email: "jose@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("tzoqdn", 5),
      },
      {
        name: "Sander",
        email: "sander@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("cq7uud", 5),
      },
      {
        name: "Edwin",
        email: "edwin@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("bcqco4", 5),
      },
      {
        name: "Joost",
        email: "joost@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("tbrdf7", 5),
      },
      {
        name: "Timon",
        email: "timon@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("djzb3", 5),
      },
      {
        name: "Femke",
        email: "femke@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("d6qqcl", 5),
      },
      {
        name: "Holley Butler",
        email: "holley.butler@northkb.com",
        allowed: true,
        password: bcrypt.hashSync("t0nhsm", 5),
      },
      {
        name: "Hugh Pinfold",
        email: "hugh.pinfold@northkb.com",
        allowed: true,
        password: bcrypt.hashSync("l8hde", 5),
      },
      {
        name: "Grace Seeley",
        email: "grace.seeley@northkb.com",
        allowed: true,
        password: bcrypt.hashSync("swpxyp", 5),
      },
      {
        name: "Nick Milne",
        email: "nick@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("h0kua7", 5),
      },
      {
        name: "Uli Sommerlatt",
        email: "uli.sommerlatt@northkb.com",
        allowed: true,
        password: bcrypt.hashSync("qs68jo", 5),
      },
      {
        name: "Gabs Fletcher",
        email: "gabs@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("9wqxdy", 5),
      },
      {
        name: "Leo Liang",
        email: "leo@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("quqqae", 5),
      },
      {
        name: "Leander Stolwijk",
        email: "leander@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("qgc8", 5),
      },
      {
        name: "Glenn",
        email: "glenn@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("pyz601", 5),
      },
      {
        name: "Isabelle",
        email: "isabelle@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("yoj77", 5),
      },
      {
        name: "Rick",
        email: "rick@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("hncvr", 5),
      },
      {
        name: "Jalou Langeree",
        email: "jaloulangeree@hotmail.com",
        allowed: true,
        password: bcrypt.hashSync("s27m1", 5),
      },
      {
        name: "Nick Jacobsen",
        email: "nickpjacobsen@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("wlxwls", 5),
      },
      {
        name: "Marc Jacobs",
        email: "marcjacobskite@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("md5798", 5),
      },
      {
        name: "Jesse Richman",
        email: "j.r@jesserichman.com",
        allowed: true,
        password: bcrypt.hashSync("uhn009", 5),
      },
      {
        name: "Graham Howes",
        email: "innafrica@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("ota23ax", 5),
      },
      {
        name: "Camille Delannoy",
        email: "camillecamkite@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("1utco8", 5),
      },
      {
        name: "Bruna Kajiya",
        email: "bruna.kajiya@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("mia6u", 5),
      },
      {
        name: "Tom Bridge",
        email: "tombridgekite1@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("v2y2st", 5),
      },
      {
        name: "C&K",
        email: "info@ckperformanceclinics.co.uk",
        allowed: true,
        password: bcrypt.hashSync("x1c6hw", 5),
      },
      {
        name: "Ruben Lenten",
        email: "ruben@len10.com",
        allowed: true,
        password: bcrypt.hashSync("wg5bhm", 5),
      },
      {
        name: "Alvaro Onieva",
        email: "alvaro@star-board.com",
        allowed: true,
        password: bcrypt.hashSync("lkn0e", 5),
      },
      {
        name: "Niccolo Porcella",
        email: "mail@niccoloporcella.com",
        allowed: true,
        password: bcrypt.hashSync("hs0ln", 5),
      },
      {
        name: "Maxi Gomez",
        email: "maxigomez97@yahoo.es",
        allowed: true,
        password: bcrypt.hashSync("pgrp26", 5),
      },
      {
        name: "Paulino Pereira",
        email: "paulinosantospereira@hotmail.com",
        allowed: true,
        password: bcrypt.hashSync("zhadl", 5),
      },
      {
        name: "Janek Grzegorzewski",
        email: "janek.grzegorzewski10@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("rhzolk", 5),
      },
      {
        name: "Boujmaa Guilloul",
        email: "guilloul@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("jr80r9", 5),
      },
      {
        name: "Justyna Sniady",
        email: "justinasurf@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("hksn2", 5),
      },
      {
        name: "Ryan Peacock",
        email: "ryan.peacock@live.com",
        allowed: true,
        password: bcrypt.hashSync("0hkzb9", 5),
      },
      {
        name: "Tyler Worrall",
        email: "tyler.worrall@yahoo.com",
        allowed: true,
        password: bcrypt.hashSync("sbzeul", 5),
      },
      {
        name: "Dominik Hernler",
        email: "cto_dom@gmx.at",
        allowed: true,
        password: bcrypt.hashSync("h1fitb", 5),
      },
      {
        name: "Julia Rick",
        email: "julia@ricknet.de",
        allowed: true,
        password: bcrypt.hashSync("a1tiywm", 5),
      },
      {
        name: "Liam Peacock",
        email: "littlepeaks@live.co.uk",
        allowed: true,
        password: bcrypt.hashSync("dh5sru", 5),
      },
      {
        name: "Maxim van Helvoort",
        email: "maxim.v.helvoort@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("tbavh", 5),
      },
      {
        name: "Lisa Baloo",
        email: "lisa.przhnsk@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("eamt1", 5),
      },
      {
        name: "Julien Leleu",
        email: "julien@highlightprod.com",
        allowed: true,
        password: bcrypt.hashSync("ikb1t6", 5),
      },
      {
        name: "Jett Bradshaw",
        email: "saxoncohen444@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("khb8y", 5),
      },
      {
        email: "backup0@northasg.com",
        fullName: "Backup Account 0",
        password: bcrypt.hashSync("d6p2op", 5),
        allowed: true,
      },
      {
        email: "backup1@northasg.com",
        fullName: "Backup Account 1",
        password: bcrypt.hashSync("6t6xip", 5),
        allowed: true,
      },
      {
        email: "backup2@northasg.com",
        fullName: "Backup Account 2",
        password: bcrypt.hashSync("kxjq8s", 5),
        allowed: true,
      },
      {
        email: "backup3@northasg.com",
        fullName: "Backup Account 3",
        password: bcrypt.hashSync("fnsakm", 5),
        allowed: true,
      },
      {
        email: "backup4@northasg.com",
        fullName: "Backup Account 4",
        password: bcrypt.hashSync("qlppdf", 5),
        allowed: true,
      },
      {
        email: "backup5@northasg.com",
        fullName: "Backup Account 5",
        password: bcrypt.hashSync("ststxc", 5),
        allowed: true,
      },
      {
        email: "backup6@northasg.com",
        fullName: "Backup Account 6",
        password: bcrypt.hashSync("qsoddk", 5),
        allowed: true,
      },
      {
        email: "backup7@northasg.com",
        fullName: "Backup Account 7",
        password: bcrypt.hashSync("qb4j", 5),
        allowed: true,
      },
      {
        email: "backup8@northasg.com",
        fullName: "Backup Account 8",
        password: bcrypt.hashSync("p8k5h", 5),
        allowed: true,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
