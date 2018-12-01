const express = require('express')
const router = express.Router()
const zivnostRouter = require('./zalozenie_zivnosti_routes')
const trvalyPobyt = require('./trvaly_pobyt_routes')

// Add your routes here - above the module.exports line
router.use('/zalozenie-zivnosti', zivnostRouter)
router.use('/trvaly-pobyt', trvalyPobyt)

module.exports = router
