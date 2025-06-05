const express = require('express');
const router = express.Router();
const { getCustomerList, getUserRentals } = require('../controllers/customerController');

router.get('/list', getCustomerList);
router.get('/:id/rentals', getUserRentals);

module.exports = router;
