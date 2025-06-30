const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const WriteInsert = async (req, res) => {
  try {
    const {title, content, seller_id, user_id } = req.body;

    if (!content || !seller_id || !user_id) {
      return res.status(400).json({ error: '필수 항목이 누락되었습니다.' });
    }

    const result = await prisma.qna.create({
      data: {
        title: title,
        question: `${content}`,
        seller_id: Number(seller_id),
        user_id: Number(user_id),
      },
    });

    res.status(200).json({ message: '질문 등록 성공', qna: result });
  } catch (error) {
    console.error('질문 등록 실패:', error);
    res.status(500).json({ error: '서버 오류' });
  }
};

const getQnaList = async (req, res) => {
  const { seller_id, user_id } = req.query;

  if (!seller_id || !user_id) {
    return res.status(400).json({ error: 'seller_id 또는 user_id가 누락되었습니다.' });
  }

  try {
    const qnaList = await prisma.qna.findMany({
      where: {
        seller_id: Number(seller_id),
        user_id: Number(user_id),
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    console.log(qnaList);
    

    res.status(200).json({ qnaList });
  } catch (error) {
    console.error('QnA 조회 실패:', error);
    res.status(500).json({ error: '서버 오류' });
  }
};

const getFollowedSellers = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id가 필요합니다.' });
  }

  try {
    const follows = await prisma.follow.findMany({
      where: { buyer_id: Number(user_id) }
    });

    const sellerIds = follows.map(f => f.seller_id);

    const sellers = await prisma.user.findMany({
      where: { user_id: { in: sellerIds } },
      select: { user_id: true, name: true }
    });

    res.status(200).json({
      sellers: sellers.map(s => ({ admin_id: s.user_id, name: s.name }))
    });
  } catch (error) {
    console.error('팔로우한 판매자 조회 실패:', error);
    res.status(500).json({ error: '서버 오류' });
  }
};

module.exports = { WriteInsert, getQnaList, getFollowedSellers };