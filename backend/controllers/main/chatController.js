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
  const { userId, content, title } = req.body;

  try {
    const phrase = await prisma.Phrase.create({
      data: {
        userId: Number(userId),
        text: content, // ✅ 여기 'text'로 수정해야 함
        title: title 
      }
    });
    res.status(201).json(phrase);
  } catch (err) {
    console.error('문구 추가 실패:', err);
    res.status(500).json({ error: '서버 오류' });
  }
};

// 자주 쓰는 문구 업데이트
const updateCommonPhrase = async (req, res) => {
  const { id } = req.params
  const { title, text } = req.body
  try {
    const updated = await prisma.phrase.update({
      where: { id: Number(id) },
      data: { title, text }
    })
    res.json(updated)
  } catch (err) {
    console.error('문구 수정 실패:', err)
    res.status(500).json({ error: '문구 수정 실패' })
  }
}

//자주 쓰는 문구 삭제
const deleteCommonPhrase = async (req, res) => {
  const id = Number(req.params.id)
  try {
    await prisma.phrase.delete({ where: { id } })
    res.sendStatus(204) // 삭제 성공
  } catch (err) {
    console.error('문구 삭제 실패:', err)
    res.status(500).json({ error: '문구 삭제 실패' })
  }
}

module.exports = { getChatUsers, getMessages, getCommonPhrases, addCommonPhrase,updateCommonPhrase,deleteCommonPhrase };
