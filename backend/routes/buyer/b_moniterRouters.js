const express = require('express');
const router = express.Router();
const { requestExtension } = require('../../controllers/buyer/b_moniterController');

router.post('/rentalExtension', requestExtension);

module.exports = router;