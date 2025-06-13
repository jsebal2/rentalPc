const express = require('express');
const router = express.Router();
const { getPcList } = require('../../controllers/seller/salesController');

router.get('/pc-list', getPcList);

module.exports = router;