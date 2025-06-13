const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getNotice = async (req, res) => {
  try {
    const newNotice = await prisma.notice.findMany({
      where: { type: "GENERAL" },
      select: {
        title: true,
        content: true,
        type: true,
        admin_id: true,
        pinned: true,
        user: {
          select: {
            followsAsSeller: {
              select: {
                id: true,
                buyer_id: true,
                createdAt: true
              }
            }
          }
        }
      }
    });
    console.log(newNotice)
    res.status(201).json({ notice: newNotice });
  } catch (error) {
    console.error('공지 등록 오류:', error);
    res.status(500).json({ message: '공지 등록 중 오류가 발생했습니다.' });
  }
}

module.exports = {getNotice};