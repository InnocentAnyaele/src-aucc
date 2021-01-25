const express = require('express')
const router = express.Router()

const HallController = require('../controllers/HallController')

router.post('/addHall', HallController.addHall)
router.get('/getHall', HallController.getHall)
router.get('/searchHall/:id', HallController.searchHall)
router.delete('/deleteHall/:id', HallController.deleteHall)

module.exports = router