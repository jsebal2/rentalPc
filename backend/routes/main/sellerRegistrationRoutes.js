const express = require('express');
const router = express.Router();
const { registerSellerProfile } = require('../../controllers/main/sellerRegistrationController');

router.post('/register', registerSellerProfile);

module.exports = router;