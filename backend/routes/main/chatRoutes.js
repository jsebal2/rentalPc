const express = require('express');
const router = express.Router();
const { getChatUsers } = require('../../controllers/layout/chatController');

router.get('/users/:userId', getChatUsers);

module.exports = router;