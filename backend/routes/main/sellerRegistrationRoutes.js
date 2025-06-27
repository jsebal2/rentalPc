const express = require('express');
const router = express.Router();
const { registerSellerProfile, accountNumber } = require('../../controllers/main/sellerRegistrationController');

router.post('/register', registerSellerProfile);
router.get('/account-number/:user_id', accountNumber);
module.exports = router;