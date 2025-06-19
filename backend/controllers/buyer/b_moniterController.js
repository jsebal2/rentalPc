const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const requestExtension = async (req, res) => {
  try {
    const {
      pc_id,
      user_id,
      seller_id,
      original_end,
      requested_end,
    } = req.body;

    // 필수 값 검증
    if (!pc_id || !user_id || !seller_id || !requested_end) {
      return res.status(400).json({ message: '필수 항목 누락' });
    }

    const extension = await prisma.rental_extension.create({
      data: {
        pc_id,
        user_id,
        seller_id,
        original_end: new Date(original_end),
        requested_end: new Date(requested_end),
        status: 'PENDING', 
      },
    });

    console.log('연장 요청 등록됨:', extension);
    res.status(201).json({ extension });
  } catch (error) {
    console.error('연장 요청 오류:', error);
    res.status(500).json({ message: '연장 요청 중 오류가 발생했습니다.' });
  }
};

module.exports = { requestExtension };