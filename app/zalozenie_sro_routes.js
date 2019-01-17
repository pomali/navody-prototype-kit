const express = require("express");
const router = express.Router();

const baseRoute = "zalozenie-sro";

function urlTo(path) {
  return `/${baseRoute}${path}`;
}
router.get("/", function(req, res) {
  res.render(`${baseRoute}/index.html`, buildRequestData(req));
});

router.use("/images", express.static(`app/views/${baseRoute}/images`)); // Maybe move all images in /assets ??

[
  "navrh-na-zapis",
  "podpisanie-tlaciv",
  "podanie-tlaciv",
  "sledovanie-procesu",
  "zaplatenie-poplatkov",
  "vykonanie-zapisu-or",
  "zacnite-podnikat"
].forEach((page, i, arr) => {
  router.get(`/${page}`, function(req, res) {
    res.render(`${baseRoute}/${page}.html`, {
      ...buildRequestData(req),
      nextUrl: arr[i + 1] ? urlTo("/" + arr[i + 1]) : null
    });
  });
});

function buildRequestData(request, errors) {
  const navigationSteps = [
    {
      title: "Úvod",
      path: "/"
    },
    {
      title: "Vyplňte tlačivo návrhu na zápis s. r. o. do Obchodného registra",
      path: "/navrh-na-zapis"
    },
    {
      title: "Podpíšte pripravené tlačivá",
      path: "/podpisanie-tlaciv"
    },
    {
      title: "Podajte tlačivá elektronicky",
      path: "/podanie-tlaciv"
    },
    {
      title: "Odsledujte si proces overovania podania",
      path: "/sledovanie-procesu"
    },
    {
      title: "Zaplaťte poplatky za založenie s.r.o.",
      path: "/zaplatenie-poplatkov"
    },
    {
      title: "Vykonanie zápisu s.r.o. do Obchodného registra",
      path: "/vykonanie-zapisu-or"
    },
    {
      title: "Začnite podnikať",
      path: "/zacnite-podnikat"
    }
  ].map((step, i) => {
    return {
      ...step,
      number: i.toString(),
      href: urlTo(step.path),
      isActive: request.path == step.path
    };
  });

  return {
    errors: errors ? mapErrorrs(errors.array()) : null,
    activeHref: urlTo(request.path),
    serviceName: "Založenie s.r.o.",
    serviceUrl: `/${baseRoute}`,
    sessionToken: request.query.token,
    navigationSteps
  };
}

module.exports = router;
