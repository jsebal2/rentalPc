const express = require('express');
const router = express.Router();
const { pclist,pcIdlist } = require('../../controllers/main/salespcController.js');

router.get('/youngpclist', pclist);
router.get('/youngpcIdlist/:pc_id', pcIdlist);
module.exports = router;