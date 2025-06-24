const express = require('express');
const router = express.Router();
const { getChatUsers, getMessages, getCommonPhrases, addCommonPhrase } = require('../../controllers/main/chatController');

router.get('/users/:userId', getChatUsers);
router.get('/messages', getMessages);
router.get('/phrases/:userId', getCommonPhrases)
router.post('/phrases', addCommonPhrase)

module.exports = router;