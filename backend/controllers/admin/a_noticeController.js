const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 공지 목록 조회
const getNotices = async (req, res) => {
  const type = req.query.type; // 'ALL', 'SELLER', 'CUSTOMER'

  try {
    const notices = await prisma.admin_notice.findMany({
      where: type && type !== 'ALL' ? { role: type } : {},
      orderBy: [
        { pinned: 'desc' },
        { created_at: 'desc' }
      ]
    });

    res.json(notices);
  } catch (err) {
    console.error('공지 목록 조회 실패:', err);
    res.status(500).json({ message: '공지 목록 조회 중 오류 발생' });
  }
};

// 삭제
const deleteNotice = async (req, res) => {
  const notice_id = Number(req.params.id);

  try {
    await prisma.admin_notice.delete({
      where: { id: notice_id }
    });
    res.json({ message: '공지 삭제 완료' });
  } catch (err) {
    console.error('공지 삭제 실패:', err);
    res.status(500).json({ message: '공지 삭제 중 오류 발생' });
  }
};

// 관리자 공지 등록
const createNotice = async (req, res) => {
  const { admin_id, title, content, type, pinned, role } = req.body;

  try {
    const newNotice = await prisma.admin_notice.create({
      data: {
        admin_id,
        title,
        content,
        type,
        pinned,
        role,
      },
    });

    res.json(newNotice);
  } catch (err) {
    console.error('공지 등록 실패:', err);
    res.status(500).json({ message: '공지 등록 중 오류 발생' });
  }
};


module.exports = {getNotices, deleteNotice, createNotice};