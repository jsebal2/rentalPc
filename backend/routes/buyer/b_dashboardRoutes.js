const express = require('express');
const router = express.Router();
const { getNotice } = require('../../controllers/buyer/b_dashboardController');

router.get('/notice', getNotice);

module.exports = router;