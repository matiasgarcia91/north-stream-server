"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Mike Duhaime",
        email: "mike.d@mysticboarding.com",
        allowed: true,
        password: bcrypt.hashSync("pg4ovd", 5),
      },
      {
        fullName: "Igor Pavlin",
        email: "info@infinitysport.net",
        allowed: true,
        password: bcrypt.hashSync("4byc0p", 5),
      },
      {
        fullName: "Kevin Pavlin",
        email: "kevin.pavlin@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("axb52n", 5),
      },
      {
        fullName: "Konstantin Mikhaylov",
        email: "konstantin.mikhaylov@capitaldist.ru",
        allowed: true,
        password: bcrypt.hashSync("dsxabd", 5),
      },
      {
        fullName: "Ruy Jardim",
        email: "ruyjardim@interactionsports.com.br",
        allowed: true,
        password: bcrypt.hashSync("0hitk2", 5),
      },
      {
        fullName: "Adriano Barzizza",
        email: "adriano@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("2v4sm", 5),
      },
      {
        fullName: "Juna Pablo Engelhard",
        email: "juanpablo@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("ysiq9k", 5),
      },
      {
        fullName: "Alan Luna",
        email: "chapa@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("99kzq4", 5),
      },
      {
        fullName: "Ignacio Cucchiani",
        email: "nacho@hardwind.com",
        allowed: true,
        password: bcrypt.hashSync("fpzs1u", 5),
      },
      {
        fullName: "MAO Alvane",
        email: "shopmyallisone@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("bd1f9c", 5),
      },
      {
        fullName: "Rob Chaytor",
        email: "salesusa@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("dqpcn5", 5),
      },
      {
        fullName: "Ivan Ho",
        email: "sales@barvan-int.com",
        allowed: true,
        password: bcrypt.hashSync("2igvqw", 5),
      },
      {
        fullName: "Barry Lam",
        email: "info@barvan-int.com",
        allowed: true,
        password: bcrypt.hashSync("bdogrm", 5),
      },
      {
        fullName: "James Owen",
        email: "invoicingusa@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("k0b2kp", 5),
      },
      {
        fullName: "Shaun Bennett",
        email: "shaun@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("xz7nz", 5),
      },
      {
        fullName: "Mattias Gunnarsson",
        email: "mattias@surfspot.se",
        allowed: true,
        password: bcrypt.hashSync("dnsj5", 5),
      },
      {
        fullName: "Santiago Soler",
        email: "santiago.soler@nkitesurfing.com",
        allowed: true,
        password: bcrypt.hashSync("9emb4", 5),
      },
      {
        fullName: "Diego Varela",
        email: "diegovarela27@hotmail.com",
        allowed: true,
        password: bcrypt.hashSync("tgy30f", 5),
      },
      {
        fullName: "Kuba Smoke",
        email: "kuba.smok@hydrosfera.pl",
        allowed: true,
        password: bcrypt.hashSync("l1b91v", 5),
      },
      {
        fullName: "Omar Abdel Fattah",
        email: "omar.fattah@holix.co",
        allowed: true,
        password: bcrypt.hashSync("gfoxg", 5),
      },
      {
        fullName: "Omar Ashour",
        email: "omar.getp@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("kz641n", 5),
      },
      {
        fullName: "George",
        email: "ods@onedesign.gr",
        allowed: true,
        password: bcrypt.hashSync("xw7939", 5),
      },
      {
        fullName: "Long",
        email: "long@singaporewakepark.com",
        allowed: true,
        password: bcrypt.hashSync("8trbz9", 5),
      },
      {
        fullName: "Jeong",
        email: "airwave105@naver.com",
        allowed: true,
        password: bcrypt.hashSync("v69nr4", 5),
      },
      {
        fullName: "Eran",
        email: "kiteboardingasia@gmail.com",
        allowed: true,
        password: bcrypt.hashSync("nktv1k", 5),
      },
      {
        fullName: "Raam",
        email: "raam@kiteboardingasia.com",
        allowed: true,
        password: bcrypt.hashSync("kk5gx", 5),
      },
      {
        fullName: "Michel Marchand",
        email: "mm74@orange.fr",
        allowed: true,
        password: bcrypt.hashSync("mk2qd9", 5),
      },
      {
        fullName: "Massimo Minoia",
        email: "massimo.m@northkb-mystic.it",
        allowed: true,
        password: bcrypt.hashSync("sh0ga", 5),
      },
      {
        fullName: "Mike Duhaime",
        email: "mike.d@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("i2wglu", 5),
      },
      {
        fullName: "Michael Aurin",
        email: "contact@kitesurfattitude.com",
        allowed: true,
        password: bcrypt.hashSync("186khp", 5),
      },
      {
        fullName: "Nico Yeh",
        email: "nicowsf@yahoo.com.tw",
        allowed: true,
        password: bcrypt.hashSync("e4nf3s", 5),
      },
      {
        fullName: "Julien Brout",
        email: "info@sourcekiteboarding.com",
        allowed: true,
        password: bcrypt.hashSync("6g6dsc", 5),
      },
      {
        fullName: "Jorn",
        email: "jorn@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("up4ra", 5),
      },
      {
        fullName: "Barend",
        email: "barend@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("7cq6md", 5),
      },
      {
        fullName: "Richard Lott",
        email: "richard.lott@northtechnologygroup.com",
        allowed: true,
        password: bcrypt.hashSync("e4dxu", 5),
      },
      {
        fullName: "Sam Watson",
        email: "sam@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("ok4jzb", 5),
      },
      {
        fullName: "Klaus",
        email: "klaus@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("af79zf", 5),
      },
      {
        fullName: "Thies",
        email: "thies@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("06mixx", 5),
      },
      {
        fullName: "Max",
        email: "max@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("wr5hg7", 5),
      },
      {
        fullName: "Jeroen",
        email: "jeroen@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("emqryf", 5),
      },
      {
        fullName: "Mike",
        email: "mike.raper@northkb.com",
        allowed: true,
        password: bcrypt.hashSync("rq9v2l", 5),
      },
      {
        fullName: "David Little",
        email: "dave.little@northsails.com",
        allowed: true,
        password: bcrypt.hashSync("pg1xqn", 5),
      },
      {
        fullName: "Chris Williams",
        email: "chris.williams@northsails.com",
        allowed: true,
        password: bcrypt.hashSync("fudl4", 5),
      },
      {
        fullName: "Steve Calder",
        email: "steve.calder@northsails",
        allowed: true,
        password: bcrypt.hashSync("cwmw2h", 5),
      },
      {
        fullName: "Annelies",
        email: "annelies@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("a1phac", 5),
      },
      {
        fullName: "Chloé/Sonja",
        email: "sales2@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("2mpcws", 5),
      },
      {
        fullName: "Marguerite",
        email: "marguerite@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("nrlyw", 5),
      },
      {
        fullName: "Liset",
        email: "sales@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("4wc38a", 5),
      },
      {
        fullName: "Jorden",
        email: "jorden@northasg.com",
        allowed: true,
        password: bcrypt.hashSync("g6cjlf", 5),
      },
      {
        fullName: "Vincent",
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
