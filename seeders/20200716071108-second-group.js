"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Michael Juhl",
        email: "michael@boardpunx.com",
        allowed: false,
        password: "xg4wt9",
      },
      {
        fullName: "Konstantin Mikhalov",
        email: "konstantin.mikhaylov@capitaldist.ru",
        allowed: false,
        password: "65qc7o",
      },
      {
        fullName: "Alexis Balladon",
        email: "alexisballadon@hotmail.co.uk",
        allowed: true,
        password: "j38ayu",
      },
      {
        fullName: "Rafal Rzepka",
        email: "rafal@hydrosfera.pl",
        allowed: false,
        password: "o2d499",
      },
      {
        fullName: "Alexander Karpenko",
        email: "alex@wind.ua",
        allowed: false,
        password: "eh628n",
      },
      {
        fullName: "Ruy Jardim ",
        email: "ruyjardim@interactionsports.com.br",
        allowed: false,
        password: "xm91pa",
      },
      {
        fullName: "Adriano Barizza",
        email: "adriano@hardwind.com",
        allowed: false,
        password: "n0rcg",
      },
      {
        fullName: "Mattias Gunnarsson",
        email: "mattias@surfspot.se",
        allowed: false,
        password: "55nezi",
      },
      {
        fullName: "Helge Grande Stærk",
        email: "mail@urge.no",
        allowed: false,
        password: "t9ujss",
      },
      {
        fullName: "Dzintars Aulmanis",
        email: "info@surfpro.lv",
        allowed: false,
        password: "dg8er",
      },
      {
        fullName: "Baiba Aulmane",
        email: "baiba.paeglite@gmail.com",
        allowed: false,
        password: "qs9sle",
      },
      {
        fullName: "Baiba Zvaigznite",
        email: "bzvaigznite@surfpro.lv",
        allowed: false,
        password: "i05f23",
      },
      {
        fullName: "Eva Saukane",
        email: "eva@surfpro.lv",
        allowed: false,
        password: "ptwcxab",
      },
      {
        fullName: "Kalev Tammin",
        email: "kalev@surfshop.ee",
        allowed: false,
        password: "4qadfe",
      },
      {
        fullName: "Adrian Drenciu",
        email: "office@shopextrem.ro",
        allowed: false,
        password: "aanylm",
      },
      {
        fullName: "Duncan Hancock",
        email: "duncan@adu.co.nz",
        allowed: false,
        password: "7kfdbk",
      },
      {
        fullName: "Bruce Chrystal ",
        email: "bruce@mysticsa.co.za",
        allowed: false,
        password: "kvnf7p",
      },
      {
        fullName: "Amanda",
        email: "amanda@mysticsa.co.za",
        allowed: false,
        password: "vugx3g",
      },
      {
        fullName: "Mohamed Helmy",
        email: "mhelmy@katanawave.com",
        allowed: false,
        password: "plu7x9",
      },
      {
        fullName: "Adham Askary",
        email: "aalaskary@katanawave.com",
        allowed: false,
        password: "vqkswk",
      },
      {
        fullName: "Hisham Semedah",
        email: "hsemedah@katanawave.com",
        allowed: false,
        password: "so07c",
      },
      {
        fullName: "Amir Avinoam",
        email: "amir@laguna.co.il",
        allowed: false,
        password: "5x0irk",
      },
      {
        fullName: "Eli Avinoam",
        email: "eli@laguna.co.il",
        allowed: false,
        password: "8arxvg",
      },
      {
        fullName: "Fumiya and Ryoma Matsunaga",
        email: "info@x-fly.jp",
        allowed: false,
        password: "bkyxa5",
      },
      {
        fullName: "Balaza Meretei",
        email: "everride@everride.hu",
        allowed: false,
        password: "6oi2wn",
      },
      {
        fullName: "Michael Krikula",
        email: "office@querfahrt.at",
        allowed: false,
        password: "fr6tw4",
      },
      {
        fullName: "Control second group",
        email: "control-second-group@north.com",
        allowed: false,
        password: "test",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
