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
  res.render(
    "trvaly-pobyt/dopravny-inspektorat.html",
    buildRequestData(req)
  );
});



router.get("/obchodny-register", function(req, res) {
  res.render(
    "trvaly-pobyt/obchodny-register.html",
    buildRequestData(req)
  );
});

router.get("/zivnost", function(req, res) {
  res.render(
    "trvaly-pobyt/zivnost.html",
    buildRequestData(req)
  );
});


router.get("/ostatne-institucie", function(req, res) {
  res.render(
    "trvaly-pobyt/ostatne-institucie",
    buildRequestData(req)
  );
});


router.get("/kataster", function(req, res) {
  res.render(
    "trvaly-pobyt/ostatne-institucie",
    buildRequestData(req)
  );
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
        title: "Zmena trvalého pobytu",
        description: "",
        href: urlTo("/zmena-trvaleho-pobytu"),
        isActive: request.path === "/zmena-trvaleho-pobytu"
      },
      {
        number: "2",
        title: "Výmena občianskeho",
        description: "",
        href: urlTo("/vymena-obcianskeho"),
        isActive: request.path === "/vymena-obcianskeho"
      },
      {
        number: "3",
        title: "Dopravný inšpektorát",
        description: "Zmena údajov držiteľa vozidla",
        href: urlTo("/dopravny-inspektorat"),
        isActive: request.path === "/dopravny-inspektorat"
      },
      {
        number: "4",
        title: "Obchodný register",
        description: "Zmena údajov majiteľa",
        href: urlTo("/obchodny-register"),
        isActive: request.path === "/obchodny-register"
      },
      {
        number: "5",
        title: "Živnosť",
        description: "Zmena pre živnosť",
        href: urlTo("/zivnost"),
        isActive: request.path === "/zivnost"
      },
      {
        number: "6",
        title: "Ostatné inštitúcie",
        description: "Zmena údajov majiteľa",
        href: urlTo("/ostatne-institucie"),
        isActive: request.path === "/ostatne-institucie"
      },
      {
        number: "7",
        title: "Kataster",
        description: "Zmena údajov vlastníka",
        href: urlTo("/kataster"),
        isActive: request.path === "/kataster"
      }
    ]
  };
}

module.exports = router;
