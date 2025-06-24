const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getChatUsers = async (req, res) => {
  const userId = Number(req.params.userId);

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
      select: { role: true }
    });

    if (!user) return res.status(404).json({ error: '사용자 없음' });

    let result = [];

    if (user.role === 'Customer') {
      const follows = await prisma.follow.findMany({
        where: { buyer_id: userId },
        include: { seller: true }
      });

      result = follows.map(f => ({
        id: f.seller.user_id,
        name: f.seller.name
      }));

    } else if (user.role === 'Seller') {
      const follows = await prisma.follow.findMany({
        where: { seller_id: userId },
        include: { buyer: true }
      });

      result = follows.map(f => ({
        id: f.buyer.user_id,
        name: f.buyer.name
      }));
    }

    res.json(result);

  } catch (err) {
    console.error('채팅 유저 조회 실패:', err);
    res.status(500).json({ error: '서버 오류' });
  }
};

const getMessages = async (req, res) => {
  const { user1, user2 } = req.query;

  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: Number(user1), receiverId: Number(user2) },
          { senderId: Number(user2), receiverId: Number(user1) }
        ]
      },
      orderBy: { createdAt: 'asc' }
    });

    res.json(messages);
  } catch (err) {
    console.error('메시지 조회 실패:', err);
    res.status(500).json({ error: '서버 오류' });
  }
};

// 자주 쓰는 문구 가져오기
const getCommonPhrases = async (req, res) => {
  const userId = Number(req.params.userId);

  try {
    const phrases = await prisma.Phrase.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(phrases);
  } catch (err) {
    console.error('문구 조회 실패:', err);
    res.status(500).json({ error: '서버 오류' });
  }
};

// 자주 쓰는 문구 추가
const addCommonPhrase = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const phrase = await prisma.Phrase.create({
      data: {
        userId: Number(userId),
        text: content // ✅ 여기 'text'로 수정해야 함
      }
    });
    res.status(201).json(phrase);
  } catch (err) {
    console.error('문구 추가 실패:', err);
    res.status(500).json({ error: '서버 오류' });
  }
};

module.exports = { getChatUsers, getMessages, getCommonPhrases, addCommonPhrase };
