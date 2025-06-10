const express = require('express');
const router = express.Router();
const { createNotice } = require('../controllers/noticeController');

router.post('/', createNotice);

module.exports = router;


