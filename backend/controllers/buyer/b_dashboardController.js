const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getNotice = async (req, res) => {
  try {
    const newNotice = await prisma.notice.findMany({
      select:{
        title: true,
        content: true,
        type: true,
        admin_id: true,
        pinned:true
      }     
    });
    console.log(newNotice)
    res.status(201).json({ message: '공지가 성공적으로 등록되었습니다.', notice: newNotice });
  } catch (error) {
    console.error('공지 등록 오류:', error);
    res.status(500).json({ message: '공지 등록 중 오류가 발생했습니다.' });
  }
}

module.exports = {getNotice};