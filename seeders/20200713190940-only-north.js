"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Carsten Bødker ",
        email: "cb@elementsports.dk",
        allowed: true,
        password: "kip03l",
      },
      {
        fullName: "Peter Tyushkevich (NorthKB)",
        email: "petertpromo@gmail.com",
        allowed: true,
        password: "0qpj0m",
      },
      {
        fullName: "Vinokurov Ilya ",
        email: "5170616@gmail.com",
        allowed: true,
        password: "geuafe",
      },
      {
        fullName: "Kuba Smok (NKB)",
        email: "kuba.smok@hydrosfera.pl",
        allowed: true,
        password: "dnqyji",
      },
      {
        fullName: "Erkki Soosaar",
        email: "info@surfcenter.ee",
        allowed: true,
        password: "9b99hj",
      },
      {
        fullName: "Taras Burmistr ",
        email: "taras_br@yahoo.com",
        allowed: true,
        password: "gmrqs",
      },
      {
        fullName: "Jose Hita Fernandez",
        email: "jose@nomadkitesurf.com",
        allowed: true,
        password: "aky76l",
      },
      {
        fullName: "Jose Manuel Fernandez (NKB)",
        email: "jose@aquadynamics.lk",
        allowed: true,
        password: "lfwb4",
      },
      {
        fullName: "Nico Vazquez Cano (NKB) ",
        email: "nico@santatabla.com",
        allowed: true,
        password: "krphn6",
      },
      {
        fullName: "Pablo Obarrio",
        email: "pobarrio@bepeahi.com",
        allowed: true,
        password: "7pc4dd",
      },
      {
        fullName: "Philippe Stamenic",
        email: "ph_s@hotmail.fr",
        allowed: true,
        password: "p8thf9",
      },
      {
        fullName: "W S Jeong",
        email: "airwave105@naver.com",
        allowed: true,
        password: "iodut",
      },
      {
        fullName: "Kim Jung-tae",
        email: "airwave88@naver.com",
        allowed: true,
        password: "3h3j6m",
      },
      {
        fullName: "Yuda Ettedgui",
        email: "northkb.il@gmail.com",
        allowed: true,
        password: "2i0shb",
      },
      {
        fullName: "Upul De Silva",
        email: "office@surfschool-srilanka.com",
        allowed: true,
        password: "awm359",
      },
      {
        fullName: "Satoshi Meguro",
        email: "meguro@paraglider.co.jp",
        allowed: true,
        password: "zn47k",
      },
      {
        fullName: "Yoji Kimura",
        email: "info@bluefield-kumejima.com",
        allowed: true,
        password: "dnxk5g",
      },
      {
        fullName: "Hamish Bayly",
        email: "hamishbayly@me.com",
        allowed: true,
        password: "k4hk1v",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
