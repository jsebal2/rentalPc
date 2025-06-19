const express = require('express');
const router = express.Router();
const { createNotice, getNotice, deleteNotice, updateNotice, getQnAByUser, answerQna } = require('../../controllers/seller/noticeController');
const { authenticateToken } = require('../../middlewares/authMiddleware');

router.post('/', authenticateToken, createNotice);
router.get('/', authenticateToken, getNotice);
router.delete('/:id', authenticateToken, deleteNotice);
router.put('/:id', authenticateToken, updateNotice);
router.get('/qna', authenticateToken, getQnAByUser);
router.post('/qna/:id/answer', authenticateToken, answerQna);
module.exports = router;


