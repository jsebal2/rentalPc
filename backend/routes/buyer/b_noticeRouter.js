const express = require('express');
const router = express.Router();
const { WriteInsert, getQnaList } = require('../../controllers/buyer/b_noticeController');

router.post('/qnaWrite', WriteInsert);
router.get('/qnaList', getQnaList);

module.exports = router;