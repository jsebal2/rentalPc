const express = require('express');
const router = express.Router();
const { getCustomerList, getUserRentals, getCustomerRentalList } = require('../../controllers/seller/customerController');

router.get('/list', getCustomerList);
router.get('/:id/rentals', getUserRentals);
router.get('/rental', getCustomerRentalList);

module.exports = router;
