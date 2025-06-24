const express = require('express');
const router = express.Router();
const { getPostDetail, createFollowRequest, getPostList } = require('../../controllers/main/postDetailController');

router.get('/:user_id', getPostDetail);
router.post('/follow', createFollowRequest);
router.get('/list', getPostList);

module.exports = router;
