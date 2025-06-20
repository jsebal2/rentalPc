const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 알림 조회
const getNotifications = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id가 누락되었습니다.' });
  }

  try {
    const notifications = await prisma.notification.findMany({
      where: {
        user_id: Number(user_id),
        is_read: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    res.status(200).json({ notifications });
  } catch (error) {
    console.error('알림 조회 실패:', error);
    res.status(500).json({ error: '서버 오류' });
  }
};

// 알림 등록
const createNotification = async (req, res) => {
  const { user_id, title, message, type } = req.body;

  if (!user_id || !title || !message || !type) {
    return res.status(400).json({ error: '필수 항목이 누락되었습니다.' });
  }

  try {
    const result = await prisma.notification.create({
      data: {
        user_id: Number(user_id),
        title,
        message,
        type,
        is_read: false,
      },
    });

    res.status(200).json({ message: '알림 등록 성공', notification: result });
  } catch (error) {
    console.error('알림 등록 실패:', error);
    res.status(500).json({ error: '서버 오류' });
  }
};

module.exports = {
  getNotifications,
  createNotification,
};
