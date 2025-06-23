const express = require('express');
const router = express.Router();
const { getPostDetail, createFollowRequest } = require('../../controllers/main/postDetailController');

router.get('/:user_id', getPostDetail);
router.post('/follow', createFollowRequest);

module.exports = router;
