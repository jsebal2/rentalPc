const express = require('express');
const router = express.Router();
const { createNotice, getNotice, deleteNotice, updateNotice } = require('../controllers/noticeController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/', authenticateToken, createNotice);
router.get('/', authenticateToken, getNotice);
router.delete('/:id', authenticateToken, deleteNotice);
router.put('/:id', authenticateToken, updateNotice);

module.exports = router;


