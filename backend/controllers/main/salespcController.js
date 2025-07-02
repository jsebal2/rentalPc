const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const pclist = async (req, res) => {
  try {
      const pclist = await prisma.pc.findMany({
          where: {user_id: 9},
          orderBy: { reg_date: 'desc' },
          take: 4,
       });
       res.json(pclist);
       console.log(pclist);
  } catch (error) {
    console.error('pclist 오류:', error)
    res.status(500).json({ message: '서버 오류가 발생했습니다.' })
  }
}

const sellerProfile = async (req, res) => {
  try {
    const sellerProfile = await prisma.seller_profile.findUnique({
      where: {user_id: 9},
      select: {
        business_name: true,
        introduction_title: true,
        introduction_content: true,
        contact_phone: true,
        contact_email: true,
        start_time: true,
        end_time: true,
      },
    });
    res.json(sellerProfile);
    console.log(sellerProfile);
  } catch (error) {
    console.error('sellerProfile 오류:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
}

const pcIdlist = async (req, res) => {
  const { pc_id } = req.params;
  console.log('받은 pc_id:', pc_id);

  try {
    const pclist = await prisma.pc.findFirst({
      where: {
        user_id: 9,
        pc_id: Number(pc_id), // ← 숫자 형변환 권장
      },
    });

    res.json(pclist);
  } catch (error) {
    console.error('pcIdlist 오류:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
};

module.exports = { pclist,pcIdlist,sellerProfile };

