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
    } catch (error) {
      console.error('pclist 오류:', error)
      res.status(500).json({ message: '서버 오류가 발생했습니다.' })
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

module.exports = { pclist,pcIdlist };

