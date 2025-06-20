const express = require('express');
const router = express.Router();
const { getCustomerList, getUserRentals, getCustomerRentalList ,getAllList} = require('../../controllers/seller/customerController');

router.get('/list', getCustomerList);
router.get('/:id/rentals', getUserRentals);
router.get('/rental', getCustomerRentalList);
router.get('/alllist', getAllList);

module.exports = router;
