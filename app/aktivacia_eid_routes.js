const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('aktivacia-eid/index.html', buildRequestData(req))
})

router.get('/bankovy-ucet', function (req, res) {
  res.render('aktivacia-eid/bankovy_ucet.html', buildRequestData(req))
})

router.get('/ohlasenie', function (req, res) {
  res.render('aktivacia-eid/ohlasenie.html', buildRequestData(req))
})

router.get('/dph', function (req, res) {
  res.render('aktivacia-eid/dph.html', buildRequestData(req))
})

function buildRequestData (request) {
  function urlTo (path) {
    return '/aktivacia-eid' + path
  }

  return {
    'serviceName': 'Aktivácia eID a elektronickej schránky',
    'serviceUrl': '/aktivacia-eid',
    'navigationSteps': [
      {
        number: '0',
        title: 'Úvod',
        href: urlTo('/'),
        isActive: request.path === '/'
      },
      {
        number: '1',
        title: 'Osobne si vyžiadajte potrebné certifikáty',
        href: urlTo('/bankovy-ucet'),
        isActive: request.path === '/bankovy-ucet'
      },
      {
        number: '2',
        title: 'Nainštalujte si a spustite potrebné aplikácie',
        description: 'Zaregistrujte vašu živnosť a získajte IČO.',
        href: urlTo('/ohlasenie'),
        isActive: request.path === '/ohlasenie'
      },
      {
        number: '3',
        title: 'Aktivujte si e-schránku',
        description: 'Ak budete pracovať pre zahraničných zákazníkov alebo obracať veľké peniaze.',
        href: urlTo('/dph'),
        isActive: request.path === '/dph'
      }
    ]
  }
}

module.exports = router
