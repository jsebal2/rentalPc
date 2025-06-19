const express = require('express');
const router = express.Router();
const {getNotifications,createNotification} = require('../../controllers/layout/notificationController');

// 알림 목록 조회
router.get('/notifications', getNotifications);

// 알림 생성
router.post('/notifications', createNotification);

module.exports = router;
