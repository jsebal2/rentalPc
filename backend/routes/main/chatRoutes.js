const express = require('express');
const router = express.Router();
const { getChatUsers, getMessages, getCommonPhrases, addCommonPhrase,updateCommonPhrase,deleteCommonPhrase } = require('../../controllers/main/chatController');

router.get('/users/:userId', getChatUsers);
router.get('/messages', getMessages);
router.get('/phrases/:userId', getCommonPhrases)
router.post('/phrases', addCommonPhrase)
router.put('/phrases/:id', updateCommonPhrase)
router.delete('/phrases/:id', deleteCommonPhrase)

module.exports = router;