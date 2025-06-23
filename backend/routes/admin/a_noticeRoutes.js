const express = require('express');
const router = express.Router();
const { getNotices,deleteNotice, createNotice } = require('../../controllers/admin/a_noticeController');

router.get('/list', getNotices);

router.delete('/delete/:id', deleteNotice);

router.post('/createnotice', createNotice);

module.exports = router;
