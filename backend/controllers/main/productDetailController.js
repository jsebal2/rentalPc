const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAuthorsByCpuTitle = async (req, res) => {
  try {
    const rawTitle = req.params.title;
    const normalized = rawTitle.toUpperCase().replace(/\s/g, '');

    // 1. cpu 컬럼에서 pc 검색 → user_id 추출
    const pcs = await prisma.pc.findMany({
      where: {
        cpu: normalized,
      },
      select: {
        user_id: true,
      },
    });

    const uniqueUserIds = [...new Set(pcs.map(p => p.user_id))];

    // 2. user_id에 해당하는 seller_profile 조회
    const authors = await prisma.seller_profile.findMany({
      where: {
        user_id: { in: uniqueUserIds },
      },
      select: {
        user_id: true,
        business_name: true,
        introduction_title: true,
        introduction_content: true,
        contact_phone: true,
      },
    });

    console.log(authors);
    res.json(authors);
  } catch (error) {
    console.error('판매자 정보 조회 오류:', error);
    res.status(500).json({ error: '서버 오류' });
  }
};
  module.exports = { getAuthorsByCpuTitle };