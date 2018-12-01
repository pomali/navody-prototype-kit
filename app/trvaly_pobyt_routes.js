const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("trvaly-pobyt/index.html", buildRequestData(req));
});

router.get("/zmena-trvaleho-pobytu", function(req, res) {
  res.render("trvaly-pobyt/zmena-trvaleho-pobytu.html", buildRequestData(req));
});

router.get("/vymena-obcianskeho", function(req, res) {
  res.render("trvaly-pobyt/vymena-obcianskeho.html", buildRequestData(req));
});

router.get("/povinne-ohlasenia-zmeny", function(req, res) {
  res.render(
    "trvaly-pobyt/povinne-ohlasenia-zmeny.html",
    buildRequestData(req)
  );
});

router.get("/dopravny-inspektorat", function(req, res) {
  res.render("trvaly-pobyt/dopravny-inspektorat.html", buildRequestData(req));
});

router.get("/obchodny-register", function(req, res) {
  res.render("trvaly-pobyt/obchodny-register.html", buildRequestData(req));
});

router.get("/zivnost", function(req, res) {
  res.render("trvaly-pobyt/zivnost.html", buildRequestData(req));
});

router.get("/ostatne-zmeny", function(req, res) {
  res.render("trvaly-pobyt/ostatne-zmeny", buildRequestData(req));
});

router.get("/kataster", function(req, res) {
  res.render("trvaly-pobyt/kataster", buildRequestData(req));
});

router.get("/dolezite-zmeny", function(req, res) {
  res.render("trvaly-pobyt/dolezite-zmeny", buildRequestData(req));
});


function buildRequestData(request) {
  function urlTo(path) {
    return "/trvaly-pobyt" + path;
  }

  return {
    serviceName: "Trvalý pobyt: krok po kroku",
    serviceUrl: "/trvaly-pobyt",
    navigationSteps: [
      {
        number: "0",
        title: "Úvod",
        description: "",
        href: urlTo("/"),
        isActive: request.path === "/"
      },
      {
        number: "1",
        title: "Hlásenie zmeny trvalého pobytu",
        description: "",
        href: urlTo("/zmena-trvaleho-pobytu"),
        isActive: request.path === "/zmena-trvaleho-pobytu"
      },
      {
        number: "2",
        title: "Žiadosť o vydanie nového občianskeho preukazu",
        description: "",
        href: urlTo("/vymena-obcianskeho"),
        isActive: request.path === "/vymena-obcianskeho"
      },
      {
        number: "3",
        title: "Dôležité zmeny",
        description: "Zmena údajov držiteľa vozidla",
        href: urlTo("/dolezite-zmeny"),
        isActive: request.path === "/dolezite-zmeny"
      },
      {
        number: "",
        title: "Obchodný register",
        description: "Zmena údajov majiteľa",
        href: urlTo("/obchodny-register"),
        isActive: request.path === "/obchodny-register"
      },
      {
        number: "",
        title: "Živnostenský register",
        description: "Zmena pre živnosť",
        href: urlTo("/zivnost"),
        isActive: request.path === "/zivnost"
      },
      {
        number: "",
        title: "Dopravný inšpektorát",
        description: "Zmena údajov držiteľa vozidla",
        href: urlTo("/dopravny-inspektorat"),
        isActive: request.path === "/dopravny-inspektorat"
      },

      {
        number: "4",
        title: "Ostatné zmeny",
        description: "Zmena údajov držiteľa vozidla",
        href: urlTo("/ostatne-zmeny"),
        isActive: request.path === "/ostatne-zmeny"
      },
      {
        number: "",
        title: "Kataster",
        description: "Zmena údajov vlastníka",
        href: urlTo("/kataster"),
        isActive: request.path === "/kataster"
      }
    ]
  };
}

module.exports = router;
