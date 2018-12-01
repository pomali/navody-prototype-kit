const express = require('express')
const router = express.Router()
const zivnostRouter = require('./zalozenie_zivnosti_routes')
const eidRouter = require('./aktivacia_eid_routes')

// Add your routes here - above the module.exports line
router.use('/zalozenie-zivnosti', zivnostRouter)
router.use('/aktivacia-eid', eidRouter)

module.exports = router
