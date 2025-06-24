const express = require('express');
const router = express.Router();
const {getFollowRequests,approveFollowRequest} = require('../../controllers/main/followController');

router.get('/:user_id', getFollowRequests);           // 요청/수신 목록 조회
router.patch('/approve/:id', approveFollowRequest);   // 요청 승인

module.exports = router;
