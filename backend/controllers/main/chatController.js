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

module.exports = { getChatUsers };
