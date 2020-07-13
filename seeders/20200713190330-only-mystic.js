"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Michael Juhl",
        email: "michael@boardpunx.com",
        allowed: true,
        password: "xg4wt9",
      },
      {
        fullName: "Konstantin Mikhalov",
        email: "konstantin.mikhaylov@capitaldist.ru",
        allowed: true,
        password: "65qc7o",
      },
      {
        fullName: "Rafal Rzepka",
        email: "rafal@hydrosfera.pl",
        allowed: true,
        password: "o2d499",
      },
      {
        fullName: "Alexander Karpenko",
        email: "alex@wind.ua",
        allowed: true,
        password: "eh628n",
      },
      {
        fullName: "Ruy Jardim ",
        email: "ruyjardim@interactionsports.com.br",
        allowed: true,
        password: "xm91pa",
      },
      {
        fullName: "Adriano Barizza",
        email: "adriano@hardwind.com",
        allowed: true,
        password: "n0rcg",
      },
      {
        fullName: "Mattias Gunnarsson",
        email: "mattias@surfspot.se",
        allowed: true,
        password: "55nezi",
      },
      {
        fullName: "Helge Grande Stærk",
        email: "mail@urge.no",
        allowed: true,
        password: "t9ujss",
      },
      {
        fullName: "Dzintars Aulmanis",
        email: "info@surfpro.lv",
        allowed: true,
        password: "dg8er",
      },
      {
        fullName: "Baiba Aulmane",
        email: "baiba.paeglite@gmail.com",
        allowed: true,
        password: "qs9sle",
      },
      {
        fullName: "Baiba Zvaigznite",
        email: "bzvaigznite@surfpro.lv",
        allowed: true,
        password: "i05f23",
      },
      {
        fullName: "Eva Saukane",
        email: "eva@surfpro.lv",
        allowed: true,
        password: "ptwcxab",
      },
      {
        fullName: "Kalev Tammin",
        email: "kalev@surfshop.ee",
        allowed: true,
        password: "4qadfe",
      },
      {
        fullName: "Adrian Drenciu",
        email: "office@shopextrem.ro",
        allowed: true,
        password: "aanylm",
      },
      {
        fullName: "Duncan Hancock",
        email: "duncan@adu.co.nz",
        allowed: true,
        password: "7kfdbk",
      },
      {
        fullName: "Bruce Chrystal ",
        email: "bruce@mysticsa.co.za",
        allowed: true,
        password: "kvnf7p",
      },
      {
        fullName: "Amanda",
        email: "amanda@mysticsa.co.za",
        allowed: true,
        password: "vugx3g",
      },
      {
        fullName: "Mohamed Helmy",
        email: "mhelmy@katanawave.com",
        allowed: true,
        password: "plu7x9",
      },
      {
        fullName: "Adham Askary",
        email: "aalaskary@katanawave.com",
        allowed: true,
        password: "vqkswk",
      },
      {
        fullName: "Hisham Semedah",
        email: "hsemedah@katanawave.com",
        allowed: true,
        password: "so07c",
      },
      {
        fullName: "Amir Avinoam",
        email: "amir@laguna.co.il",
        allowed: true,
        password: "5x0irk",
      },
      {
        fullName: "Eli Avinoam",
        email: "eli@laguna.co.il",
        allowed: true,
        password: "8arxvg",
      },
      {
        fullName: "Fumiya and Ryoma Matsunaga",
        email: "info@x-fly.jp",
        allowed: true,
        password: "bkyxa5",
      },
      {
        fullName: "Balaza Meretei",
        email: "everride@everride.hu",
        allowed: true,
        password: "6oi2wn",
      },
      {
        fullName: "Michael Krikula",
        email: "office@querfahrt.at",
        allowed: true,
        password: "fr6tw4",
      },
      {
        fullName: "Ruben Lenten",
        email: "ruben@len10.com",
        allowed: true,
        password: "fnmwa8",
      },
      {
        fullName: "Alvaro Onieva",
        email: "alvaro@star-board.com",
        allowed: true,
        password: "kv8w5f",
      },
      {
        fullName: "Niccolo Porcella",
        email: "mail@niccoloporcella.com",
        allowed: true,
        password: "4c2cxs",
      },
      {
        fullName: "Maxi Gomez",
        email: "maxigomez97@yahoo.es",
        allowed: true,
        password: "3h4p8",
      },
      {
        fullName: "Paulino Pereira",
        email: "paulinosantospereira@hotmail.com",
        allowed: true,
        password: "xkwthe",
      },
      {
        fullName: "Oswald Smith",
        email: "smith.oswald@gmail.com",
        allowed: true,
        password: "5q79er",
      },
      {
        fullName: "Janek Grzegorzewski",
        email: "janek.grzegorzewski10@gmail.com",
        allowed: true,
        password: "2o6lss",
      },
      {
        fullName: "Boujmaa Guilloul",
        email: "guilloul@gmail.com",
        allowed: true,
        password: "48dsja",
      },
      {
        fullName: "Justyna Sniady",
        email: "justinasurf@gmail.com",
        allowed: true,
        password: "jl51kl",
      },
      {
        fullName: "Robby Swift",
        email: "robbyswift@mac.com",
        allowed: true,
        password: "u0xfzq",
      },
      {
        fullName: "Marcilio Browne",
        email: "marciliobrowne@icloud.com",
        allowed: true,
        password: "dyrlmu",
      },
      {
        fullName: "Ryan Peacock",
        email: "ryan.peacock@live.com",
        allowed: true,
        password: "mebtxa",
      },
      {
        fullName: "Tyler Worrall",
        email: "tyler.worrall@yahoo.com",
        allowed: true,
        password: "cbhqno",
      },
      {
        fullName: "Dominik Hernler",
        email: "cto_dom@gmx.at",
        allowed: true,
        password: "u7s9ks",
      },
      {
        fullName: "Antoine Allaux",
        email: "antoine@blackbird-production.com",
        allowed: true,
        password: "o8mvkk",
      },
      {
        fullName: "Julia Rick",
        email: "julia@ricknet.de",
        allowed: true,
        password: "22u8he",
      },
      {
        fullName: "Liam Peacock",
        email: "littlepeaks@live.co.uk",
        allowed: true,
        password: "0me0be",
      },
      {
        fullName: "Maxim van Helvoort",
        email: "maxim.v.helvoort@gmail.com",
        allowed: true,
        password: "3w07yr",
      },
      {
        fullName: "Lisa Baloo",
        email: "lisa.przhnsk@gmail.com",
        allowed: true,
        password: "vwwbae",
      },
      {
        fullName: "Timo Kapl",
        email: "timokapl@icloud.com",
        allowed: true,
        password: "0wum4",
      },
      {
        fullName: "Gijs Wassenaar",
        email: "g.wassenaar@outlook.com",
        allowed: true,
        password: "60rvc9",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
