const express = require('express');
const router = express.Router();
const { WriteInsert, getQnaList, getFollowedSellers } = require('../../controllers/buyer/b_noticeController');

router.post('/qnaWrite', WriteInsert);
router.get('/qnaList', getQnaList);
router.get('/followed-sellers', getFollowedSellers);

module.exports = router;