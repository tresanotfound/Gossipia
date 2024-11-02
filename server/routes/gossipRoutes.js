const express = require('express');
const router = express.Router();
const gossipController = require('../controllers/gossipController.js');


router.post('/gossips', gossipController.createGossip);
router.get('/gossips', gossipController.getGossips);
router.put('/gossips/:id', gossipController.updateGossip);  
router.delete('/gossips/:id', gossipController.deleteGossip);

module.exports = router;