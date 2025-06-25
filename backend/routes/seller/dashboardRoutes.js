const express = require('express');
const router = express.Router();
const { getDashboardData, getAvailablePcCount, getPcRentalRatio } = require('../../controllers/seller/dashboardController');

router.get('/', getDashboardData);
router.get('/available-pc-count', getAvailablePcCount);
router.get('/pc-rental-ratio', getPcRentalRatio);
module.exports = router;
