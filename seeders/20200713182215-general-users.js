"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        fullName: "Thorge Krieger",
        email: "post@thorgekrieger.com",
        allowed: true,
        password: "azrn8c",
      },
      {
        fullName: "Jonas Hiller",
        email: "jonas@northasg.de",
        allowed: true,
        password: "uv9f8a",
      },
      {
        fullName: "Ian Verdi",
        email: "ian@jorcani.com",
        allowed: true,
        password: "nd34so",
      },
      {
        fullName: "Santiago Soler ",
        email: "santiago.soler@nkitesurfing.com",
        allowed: true,
        password: "vuzfvl",
      },
      {
        fullName: "Diego Varela",
        email: "diego.varela@nkitesurfing.com",
        allowed: true,
        password: "kimum5",
      },
      {
        fullName: "Nico Kux",
        email: "nico@kuxville.com",
        allowed: true,
        password: "xf86z9",
      },
      {
        fullName: "Ariel Blaschke Peteri",
        email: "ariel@sideonkitesurf.cl",
        allowed: true,
        password: "ae5c8f",
      },
      {
        fullName: "Omar Abdel Fattah",
        email: "omar.fattah@holix.co",
        allowed: true,
        password: "18kem",
      },
      {
        fullName: "Jaida Mahmoud",
        email: "jaida.mahmoud@holix.co",
        allowed: true,
        password: "s6y9tq",
      },
      {
        fullName: "Karim Khouly",
        email: "kkhouly@aucegypt.edu",
        allowed: true,
        password: "8gruqh",
      },
      {
        fullName: "Mohamed Galal",
        email: "sales@holix.co",
        allowed: true,
        password: "q805i5",
      },
      {
        fullName: "Mario Garcia Thierfeldt",
        email: "mario@funbox.es",
        allowed: true,
        password: "vi8my",
      },
      {
        fullName: "Dani Jimenez",
        email: "danijimenez@jorcani.onmicrosoft.com",
        allowed: true,
        password: "mjxwk",
      },
      {
        fullName: "Michel MARCHAND",
        email: "mm74@orange.fr",
        allowed: true,
        password: "cgk6ce",
      },
      {
        fullName: "Clément",
        email: "office@multigliss.com",
        allowed: true,
        password: "niol2n",
      },
      {
        fullName: "JC Solau",
        email: "jc.solau@orange.fr",
        allowed: true,
        password: "obe0kl",
      },
      {
        fullName: "Julian Krikken",
        email: "julian@artibus.fr",
        allowed: true,
        password: "kw6fg",
      },
      {
        fullName: "Dennis van der Panne",
        email: "dennis@northasg.com",
        allowed: true,
        password: "xw4vv",
      },
      {
        fullName: "Martijn Van Deth",
        email: "martijn@northasg.com",
        allowed: true,
        password: "ej5h4",
      },
      {
        fullName: "Massimo Minoia",
        email: "massimo.m@northkb-mystic.it",
        allowed: true,
        password: "ppc1yd",
      },
      {
        fullName: "Jimmy Mazzanti",
        email: "jimmymazzanti@me.com",
        allowed: true,
        password: "5ran0h",
      },
      {
        fullName: "Marco",
        email: "marco.m@northkb-mystic.it",
        allowed: true,
        password: "7om9a2",
      },
      {
        fullName: "Giuliano",
        email: "scalabrin1@icloud.com",
        allowed: true,
        password: "695pib",
      },
      {
        fullName: "George Drougkas",
        email: "ods@onedesign.gr",
        allowed: true,
        password: "ki6dm7",
      },
      {
        fullName: "Akylas",
        email: "akylas@onedesign.gr",
        allowed: true,
        password: "s8d5kz",
      },
      {
        fullName: "Nik Green ",
        email: "nik@watersportsworld.co.uk",
        allowed: true,
        password: "fhxcyd",
      },
      {
        fullName: "Scott Taylor",
        email: "scott@watersportsworld.co.uk",
        allowed: true,
        password: "15zwem",
      },
      {
        fullName: "Olly Murray",
        email: "marketing@watersportsworld.co.uk",
        allowed: true,
        password: "qz76c",
      },
      {
        fullName: "Joe Taylor",
        email: "joe@watersportsworld.co.uk",
        allowed: true,
        password: "6iw29",
      },
      {
        fullName: "Piotr Plutowski",
        email: "piotr@hydrosfera.pl",
        allowed: true,
        password: "3x69r",
      },
      {
        fullName: "Jonas Krisciunas",
        email: "jonas@boardsports.lt",
        allowed: true,
        password: "e1ovsj",
      },
      {
        fullName: "Antanas Krisciunas",
        email: "antanas@boardsports.lt",
        allowed: true,
        password: "uv96w",
      },
      {
        fullName: "Zanos Hadjizacharias",
        email: "izanos@me.com",
        allowed: true,
        password: "zf5g4d",
      },
      {
        fullName: "Igor Pavlin",
        email: "info@infinitysport.net",
        allowed: true,
        password: "eb5a1e",
      },
      {
        fullName: "Martina Jermol",
        email: "martina.pavlin1@gmail.com",
        allowed: true,
        password: "04l22",
      },
      {
        fullName: "Peter Morchev",
        email: "morchev@gmail.com",
        allowed: true,
        password: "yqoh9",
      },
      {
        fullName: "Premysl Venuta + Robin Lukasek",
        email: "info@mysticstore.cz",
        allowed: true,
        password: "8n1my",
      },
      {
        fullName: "Filip Sevcik",
        email: "fsevcik@autrange.cz",
        allowed: true,
        password: "7fye3h",
      },
      {
        fullName: "Stefan Popprath",
        email: "stefan.popprath@windandsnow.ch",
        allowed: true,
        password: "1lvrvo",
      },
      {
        fullName: "Andras Marton",
        email: "a.marton@hotmail.com",
        allowed: true,
        password: "djx70yn",
      },
      {
        fullName: "Matt Aiken",
        email: "matt@northasg.com",
        allowed: true,
        password: "bpvtcr",
      },
      {
        fullName: "Rob Chaytor",
        email: "salesusa@northasg.com",
        allowed: true,
        password: "hcsw9c",
      },
      {
        fullName: "Shaun Bennett",
        email: "shaun@northasg.com",
        allowed: true,
        password: "pylkki",
      },
      {
        fullName: "Mike Duhaime",
        email: "mike.d@northasg.com",
        allowed: true,
        password: "vlgg5w",
      },
      {
        fullName: "Diego Alonso Badell",
        email: "northkiteboarding.ve@gmail.com",
        allowed: true,
        password: "be8509",
      },
      {
        fullName: "Alessandro Allori",
        email: "alessandro.allori.kb@gmail.com",
        allowed: true,
        password: "n58sfl",
      },
      {
        fullName: "Alvane Mao",
        email: "shopmyallisone@gmail.com",
        allowed: true,
        password: "vt3tj",
      },
      {
        fullName: "Grant Ross ",
        email: "grant@northkb.co.za",
        allowed: true,
        password: "3copp8",
      },
      {
        fullName: "Donovan Oneil",
        email: "donovan@northkb.co.za",
        allowed: true,
        password: "r6x84k",
      },
      {
        fullName: "Jin Lun ",
        email: "sales@barvan-int.com",
        allowed: true,
        password: "4h6wgn",
      },
      {
        fullName: "Wei Lam",
        email: "info@barvan-int.com",
        allowed: true,
        password: "8cise2",
      },
      {
        fullName: "Nico Yeh",
        email: "nicowsf@yahoo.com.tw",
        allowed: true,
        password: "v9xgn",
      },
      {
        fullName: "Julien Brout ",
        email: "info@sourcekiteboarding.com",
        allowed: true,
        password: "72nxwe",
      },
      {
        fullName: "Bjorn",
        email: "bjorn@kiteboardingasia.com",
        allowed: true,
        password: "okletp",
      },
      {
        fullName: "Yavuz Aksakal",
        email: "yavuz@kiteacademy.com",
        allowed: true,
        password: "sqviv",
      },
      {
        fullName: "Sedat Celenk ",
        email: "sedat@kiteacademy.com ",
        allowed: true,
        password: "ikwwfc",
      },
      {
        fullName: "Mostafa Al Hussaini",
        email: "mostafa@dukite.com ",
        allowed: true,
        password: "oo0axh",
      },
      {
        fullName: "Jalou Langeree",
        email: "jaloulangeree@hotmail.com",
        allowed: true,
        password: "rsjjs",
      },
      {
        fullName: "Nick Jacobsen",
        email: "nickpjacobsen@gmail.com",
        allowed: true,
        password: "q9hglc",
      },
      {
        fullName: "Marc Jacobs",
        email: "marcjacobskite@gmail.com",
        allowed: true,
        password: "lw3xid",
      },
      {
        fullName: "Jesse Richman",
        email: "j.r@jesserichman.com",
        allowed: true,
        password: "odc549",
      },
      {
        fullName: "Graham Howes",
        email: "innafrica@gmail.com",
        allowed: true,
        password: "5dgonu",
      },
      {
        fullName: "Camille Delannoy",
        email: "camillecamkite@gmail.com",
        allowed: true,
        password: "n1l01",
      },
      {
        fullName: "Bruna Kajiya",
        email: "bruna.kajiya@gmail.com",
        allowed: true,
        password: "whq3mf",
      },
      {
        fullName: "Tom Bridge",
        email: "tombridgekite1@gmail.com",
        allowed: true,
        password: "9clz8o",
      },
      {
        fullName: "C&K",
        email: "info@ckperformanceclinics.co.uk",
        allowed: true,
        password: "ek0qt8",
      },
      {
        fullName: "Annelies",
        email: "annelies@northasg.com",
        allowed: true,
        password: "bl5o6v",
      },
      {
        fullName: "Chloé/Sonja",
        email: "sales2@northasg.com",
        allowed: true,
        password: "p2setn",
      },
      {
        fullName: "Marguerite",
        email: "marguerite@northasg.com",
        allowed: true,
        password: "xh1h4n",
      },
      {
        fullName: "Liset",
        email: "sales@northasg.com",
        allowed: true,
        password: "qbtyepd",
      },
      {
        fullName: "Jorden",
        email: "jorden@northasg.com",
        allowed: true,
        password: "4713ap",
      },
      {
        fullName: "Esperanza",
        email: "esperanza@northasg.com",
        allowed: true,
        password: "7a8vws",
      },
      {
        fullName: "Robert",
        email: "robert@northasg.com",
        allowed: true,
        password: "8p7gy",
      },
      {
        fullName: "Anna",
        email: "invoicing@northasg.com",
        allowed: true,
        password: "0gr0a",
      },
      {
        fullName: "Mireille",
        email: "mireille@northasg.com",
        allowed: true,
        password: "qwi04l",
      },
      {
        fullName: "Jacqueline",
        email: "jacqueline@northasg.com",
        allowed: true,
        password: "tl02f",
      },
      {
        fullName: "Corrien",
        email: "corrien@northasg.com",
        allowed: true,
        password: "wblit5",
      },
      {
        fullName: "Peet",
        email: "peet@northasg.com",
        allowed: true,
        password: "ho6218",
      },
      {
        fullName: "Marjo",
        email: "marjo@northasg.com",
        allowed: true,
        password: "3jrxd",
      },
      {
        fullName: "Jose",
        email: "jose@northasg.com",
        allowed: true,
        password: "b1q4bf",
      },
      {
        fullName: "Sander",
        email: "sander@northasg.com",
        allowed: true,
        password: "a9g2z",
      },
      {
        fullName: "Lieke",
        email: "lieke@northasg.com",
        allowed: true,
        password: "jb5nnb",
      },
      {
        fullName: "Edwin",
        email: "edwin@northasg.com",
        allowed: true,
        password: "pkff1k",
      },
      {
        fullName: "Joost",
        email: "joost@northasg.com",
        allowed: true,
        password: "1odj9",
      },
      {
        fullName: "Timon",
        email: "timon@northasg.com",
        allowed: true,
        password: "fj07n9",
      },
      {
        fullName: "Femke",
        email: "femke@northasg.com",
        allowed: true,
        password: "s388t4",
      },
      {
        fullName: "Madelene",
        email: "madelene@northasg.com",
        allowed: true,
        password: "5zd9x",
      },
      {
        fullName: "Annabel",
        email: "annabel@northasg.com",
        allowed: true,
        password: "dhllqc",
      },
      {
        fullName: "Holley Butler",
        email: "holley.butler@northkb.com",
        allowed: true,
        password: "2p615e",
      },
      {
        fullName: "Hugh Pinfold",
        email: "hugh.pinfold@northkb.com",
        allowed: true,
        password: "bd9ygn",
      },
      {
        fullName: "Grace Seeley",
        email: "grace.seeley@northkb.com",
        allowed: true,
        password: "wb5qkq",
      },
      {
        fullName: "Nick Milne",
        email: "nick@northasg.com",
        allowed: true,
        password: "dtn5t",
      },
      {
        fullName: "Tom Crosse",
        email: "tom.crosse@northkb.com",
        allowed: true,
        password: "zpg3k",
      },
      {
        fullName: "Uli Sommerlatt",
        email: "uli.sommerlatt@northkb.com",
        allowed: true,
        password: "3hnlvm",
      },
      {
        fullName: "Gabs Fletcher",
        email: "gabs@northasg.com",
        allowed: true,
        password: "0g1g4n",
      },
      {
        fullName: "Leo Liang",
        email: "leo@northasg.com",
        allowed: true,
        password: "n3y51o",
      },
      {
        fullName: "Jonty Norton",
        email: "jonty.norton@northkb.com",
        allowed: true,
        password: "tadbf6",
      },
      {
        fullName: "Jorn",
        email: "jorn@northasg.com",
        allowed: true,
        password: "4f7t9",
      },
      {
        fullName: "Barend ",
        email: "barend@northasg.com",
        allowed: true,
        password: "ywokobn",
      },
      {
        fullName: "Richard Lott",
        email: "richard.lott@northtechnologygroup.com",
        allowed: true,
        password: "7aml9a",
      },
      {
        fullName: "Sam Watson",
        email: "sam@northasg.com",
        allowed: true,
        password: "1a03z",
      },
      {
        fullName: "Klaus",
        email: "klaus@northasg.com",
        allowed: true,
        password: "1cpe0q",
      },
      {
        fullName: "Thies",
        email: "thies@northasg.com",
        allowed: true,
        password: "fp7pm",
      },
      {
        fullName: "Max ",
        email: "max@northasg.com",
        allowed: true,
        password: "ptkx8a",
      },
      {
        fullName: "Jeroen",
        email: "jeroen@northasg.com",
        allowed: true,
        password: "64j3ct",
      },
      {
        fullName: "Mike",
        email: "mike.raper@northkb.com",
        allowed: true,
        password: "h8tznr",
      },
      {
        fullName: "David Little",
        email: "dave.little@northsails.com",
        allowed: true,
        password: "1p32e",
      },
      {
        fullName: "Chris Williams",
        email: "chris.williams@northsails.com",
        allowed: true,
        password: "obkwzuj",
      },
      {
        fullName: "Steve Calder",
        email: "steve.calder@northsails",
        allowed: true,
        password: "di6jt",
      },
      {
        fullName: "Julien Leleu",
        email: "julien@highlightprod.com",
        allowed: true,
        password: "2euxc8",
      },
      {
        fullName: "Jett Bradshaw",
        email: "saxoncohen444@gmail.com",
        allowed: true,
        password: "8oh77i",
      },
      {
        fullName: "Alex prieto",
        email: "info@sctenerife.es",
        allowed: true,
        password: "dj6t4d",
      },
      {
        fullName: "Sander",
        email: "supplychain@northasg.com",
        allowed: true,
        password: "u98iyt",
      },
      {
        fullName: "Kevin Pavlin",
        email: "kevin.pavlin@gmail.com ",
        allowed: true,
        password: "sh3o1j",
      },
      {
        fullName: "Sebastian Salazar Botero",
        email: "colombiakite@gmail.com",
        allowed: true,
        password: "xl13w9",
      },
      {
        fullName: "Sebastian Salazar Botero",
        email: "ssalazarb7@hotmail.com",
        allowed: true,
        password: "qtvxe",
      },
      {
        fullName: "Filip",
        email: "fsevcik@autrange.cz",
        allowed: true,
        password: "u3jd91",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};