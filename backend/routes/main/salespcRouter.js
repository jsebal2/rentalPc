const express = require('express');
const router = express.Router();
const { pclist,pcIdlist,sellerProfile } = require('../../controllers/main/salespcController.js');

router.get('/youngpclist', pclist);
router.get('/youngpcIdlist/:pc_id', pcIdlist);
router.get('/sellerProfile', sellerProfile);
module.exports = router;