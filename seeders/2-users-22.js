"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Mike Duhaime",
        email: "mike.d@mysticboarding.com",
        allowed: true,
        password: bcrypt.hashSync("pg4ovd", 5),
      },
      {
        name: "Igor Pavlin",
        email: "info@infinitysport.net",
        allowed: true,
        password: bcrypt.hashSync("4byc0p", 5),
      },
      {
        name: "Kevin Pavlin",
        email: "kevin.pavlin@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("axb52n", 5),
      },
      {
        name: "Konstantin Mikhaylov",
        email: "konstantin.mikhaylov@capitaldist.ru",
        allowed: true,
        password: bcrypt.hashSync("dsxabd", 5),
      },
      {
        name: "Ruy Jardim",
        email: "ruyjardim@interactionsports.com.br",
        allowed: true,
        password: bcrypt.hashSync("0hitk2", 5),
      },
      {
        name: "Adriano Barzizza",
        email: "adriano@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("2v4sm", 5),
      },
      {
        name: "Juna Pablo Engelhard",
        email: "juanpablo@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("ysiq9k", 5),
      },
      {
        name: "Alan Luna",
        email: "chapa@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("99kzq4", 5),
      },
      {
        name: "Ignacio Cucchiani",
        email: "nacho@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("fpzs1u", 5),
      },
      {
        name: "MAO Alvane",
        email: "shopmyallisone@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("bd1f9c", 5),
      },
      {
        name: "Rob Chaytor",
        email: "salesusa@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("dqpcn5", 5),
      },
      {
        name: "Ivan Ho",
        email: "sales@barvan-int.com",
        allowed: true,
        password: bcrypt.hashSync("2igvqw", 5),
      },
      {
        name: "Barry Lam",
        email: "info@barvan-int.com",
        allowed: true,
        password: bcrypt.hashSync("bdogrm", 5),
      },
      {
        name: "James Owen",
        email: "invoicingusa@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("k0b2kp", 5),
      },
      {
        name: "Shaun Bennett",
        email: "shaun@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("xz7nz", 5),
      },
      {
        name: "Mattias Gunnarsson",
        email: "mattias@surfspot.se",
        allowed: true,
        password: bcrypt.hashSync("dnsj5", 5),
      },
      {
        name: "Santiago Soler",
        email: "santiago.soler@nkitesurfing.com",
        allowed: true,
        password: bcrypt.hashSync("9emb4", 5),
      },
      {
        name: "Diego Varela",
        email: "diegovarela27@hotmail.com",
        allowed: true,
        password: bcrypt.hashSync("tgy30f", 5),
      },
      {
        name: "Kuba Smoke",
        email: "kuba.smok@hydrosfera.pl",
        allowed: true,
        password: bcrypt.hashSync("l1b91v", 5),
      },
      {
        name: "Omar Abdel Fattah",
        email: "omar.fattah@holix.co",
        allowed: true,
        password: bcrypt.hashSync("gfoxg", 5),
      },
      {
        name: "Omar Ashour",
        email: "omar.getp@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("kz641n", 5),
      },
      {
        name: "George",
        email: "ods@onedesign.gr",
        allowed: true,
        password: bcrypt.hashSync("xw7939", 5),
      },
      {
        name: "Long",
        email: "long@singaporewakepark.com",
        allowed: true,
        password: bcrypt.hashSync("8trbz9", 5),
      },
      {
        name: "Jeong",
        email: "airwave105@naver.com",
        allowed: true,
        password: bcrypt.hashSync("v69nr4", 5),
      },
      {
        name: "Eran",
        email: "kiteboardingasia@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("nktv1k", 5),
      },
      {
        name: "Raam",
        email: "raam@kiteboardingasia.com",
        allowed: true,
        password: bcrypt.hashSync("kk5gx", 5),
      },
      {
        name: "Michel Marchand",
        email: "mm74@orange.fr",
        allowed: true,
        password: bcrypt.hashSync("mk2qd9", 5),
      },
      {
        name: "Massimo Minoia",
        email: "massimo.m@northkb-mystic.it",
        allowed: true,
        password: bcrypt.hashSync("sh0ga", 5),
      },
      {
        name: "Mike Duhaime",
        email: "mike.d@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("i2wglu", 5),
      },
      {
        name: "Michael Aurin",
        email: "contact@kitesurfattitude.com",
        allowed: true,
        password: bcrypt.hashSync("186khp", 5),
      },
      {
        name: "Nico Yeh",
        email: "nicowsf@yahoo.com.tw",
        allowed: true,
        password: bcrypt.hashSync("e4nf3s", 5),
      },
      {
        name: "Julien Brout",
        email: "info@sourcekiteboarding.com",
        allowed: true,
        password: bcrypt.hashSync("6g6dsc", 5),
      },
      {
        name: "Jorn",
        email: "jorn@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("up4ra", 5),
      },
      {
        name: "Barend",
        email: "barend@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("7cq6md", 5),
      },
      {
        name: "Richard Lott",
        email: "richard.lott@northtechnologygroup.com",
        allowed: true,
        password: bcrypt.hashSync("e4dxu", 5),
      },
      {
        name: "Sam Watson",
        email: "sam@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("ok4jzb", 5),
      },
      {
        name: "Klaus",
        email: "klaus@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("af79zf", 5),
      },
      {
        name: "Thies",
        email: "thies@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("06mixx", 5),
      },
      {
        name: "Max",
        email: "max@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("wr5hg7", 5),
      },
      {
        name: "Jeroen",
        email: "jeroen@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("emqryf", 5),
      },
      {
        name: "Mike",
        email: "mike.raper@northkb.com",
        allowed: true,
        password: bcrypt.hashSync("rq9v2l", 5),
      },
      {
        name: "David Little",
        email: "dave.little@northsails.com",
        allowed: true,
        password: bcrypt.hashSync("pg1xqn", 5),
      },
      {
        name: "Chris Williams",
        email: "chris.williams@northsails.com",
        allowed: true,
        password: bcrypt.hashSync("fudl4", 5),
      },
      {
        name: "Steve Calder",
        email: "steve.calder@northsails",
        allowed: true,
        password: bcrypt.hashSync("cwmw2h", 5),
      },
      {
        name: "Annelies",
        email: "annelies@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("a1phac", 5),
      },
      {
        name: "Chloé/Sonja",
        email: "sales2@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("2mpcws", 5),
      },
      {
        name: "Marguerite",
        email: "marguerite@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("nrlyw", 5),
      },
      {
        name: "Liset",
        email: "sales@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("4wc38a", 5),
      },
      {
        name: "Jorden",
        email: "jorden@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("g6cjlf", 5),
      },
      {
        name: "Vincent",
        email: "vincent@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("bq5sc3", 5),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};

// 12275319
