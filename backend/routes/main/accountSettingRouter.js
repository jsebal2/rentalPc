const express = require('express');
const router = express.Router();
const { getUserdata } = require('../../controllers/main/accoutSettingController');

router.get('/getUserdata', getUserdata);

module.exports = router;
