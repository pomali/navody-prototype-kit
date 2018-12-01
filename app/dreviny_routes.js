const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("dreviny/index.html", buildRequestData(req));
});


router.get("/povolenie-vyrubu", function(req, res) {
  res.render("dreviny/povolenie-vyrubu.html", buildRequestData(req));
});

router.get("/todo-list", function(req, res) {
  res.render("dreviny/todo-list.html", buildRequestData(req));
});

router.get("/formular", function(req, res) {
  res.render("dreviny/formular.html", buildRequestData(req));
});


router.get("/kontrola", function(req, res) {
  res.render("dreviny/kontrola.html", buildRequestData(req));
});


router.get("/result", function(req, res) {
  res.render("dreviny/result.html", buildRequestData(req));
});


function buildRequestData(request) {
  function urlTo(path) {
    return "/dreviny" + path;
  }

  return {
    serviceName: "Výrub drevín",
    serviceUrl: "/dreviny",
    navigationSteps: [
      {
        number: "0",
        title: "Základné informácie",
        description: "",
        href: urlTo("/"),
        isActive: request.path === "/"
      },
      {
        number: "1",
        title: "Povolenie k výrubu? Potrebujem ho?",
        description: "",
        href: urlTo("/povolenie-vyrubu"),
        isActive: request.path === "/povolenie-vyrubu"
      },
      {
        number: "2",
        title: "TODO list",
        description: "",
        href: urlTo("/todo-list"),
        isActive: request.path === "/todo-list"
      },
      {
        number: "3",
        title: "Formulár",
        description: "",
        href: urlTo("/formular"),
        isActive: request.path === "/formular"
      },
      {
        number: "4",
        title: "Kontrola",
        description: "",
        href: urlTo("/kontrola"),
        isActive: request.path === "/kontrola"
      }
    ]
  };
}

module.exports = router;
