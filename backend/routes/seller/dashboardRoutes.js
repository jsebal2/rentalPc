const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../../controllers/seller/dashboardController');

router.get('/', getDashboardData);

module.exports = router;
