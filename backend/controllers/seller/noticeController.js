const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const createNotice = async (req, res) => {
    try {
      const userId = req.user.userId; 
      const { title, content, type, pinned } = req.body;
  
      const newNotice = await prisma.notice.create({
        data: {
          title,
          content,
          type,
          admin_id: userId,
          pinned: pinned === true || pinned === 'true',
        },
      });
  
      res.status(201).json({ message: '공지가 성공적으로 등록되었습니다.', notice: newNotice });
    } catch (error) {
      console.error('공지 등록 오류:', error);
      res.status(500).json({ message: '공지 등록 중 오류가 발생했습니다.' });
    }
  };
  

const getNotice = async (req, res) => {
    const { type, page = 1, limit = 5 } = req.query;
    const pageNumber = parseInt(page);
    const pageSize = parseInt(limit);
    const userId = req.user.userId;

    try {
        const [notices, total] = await Promise.all([
            prisma.notice.findMany({
                where: { type, admin_id: userId },
                orderBy: [
                    { pinned: 'desc' },
                    { created_at: 'desc' },
                ],
                skip: (pageNumber - 1) * pageSize,
                take: pageSize,
            }),
            prisma.notice.count({
                where: { type, admin_id: userId },
            }),
        ]);

        res.status(200).json({ notices, total, page: pageNumber, totalPages: Math.ceil(total / pageSize) });
        console.log(notices);
    } catch (error) {
        console.error('공지 조회 오류:', error);
        res.status(500).json({ message: '공지 조회 중 오류가 발생했습니다.' });
    }
}

const deleteNotice = async (req, res) => {
    const noticeId = parseInt(req.params.id);

    try {
        await prisma.notice_file.deleteMany({ where : { notice_id : noticeId }})
        await prisma.notification_log.deleteMany({ where : { notice_id : noticeId }})

        await prisma.notice.delete({ where : { notice_id : noticeId }})

        res.status(200).json({ message : '공지가 성공적으로 삭제되었습니다.'})
    } catch (error) {
        console.error('공지 삭제 오류:', error);
        res.status(500).json({ message : '공지 삭제 중 오류가 발생했습니다.'})
    }
}

const updateNotice = async (req, res) => {
    const noticeId = parseInt(req.params.id);
    const { title, content, type, pinned } = req.body;
  
    try {
      const updated = await prisma.notice.update({
        where: { notice_id: noticeId },
        data: {
          title,
          content,
          type,
          pinned: pinned === true || pinned === 'true',
        },
      });
  
      res.status(200).json({ message: '공지 수정 완료', notice: updated });
    } catch (error) {
      console.error('공지 수정 오류:', error);
      res.status(500).json({ message: '공지 수정 중 오류 발생' });
    }
  };

  const getQnAByUser = async (req, res) => {
    try {
      const userId = req.user.userId;

      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * limit;

      const [qnas, total] = await Promise.all([
        prisma.qna.findMany({
          where : { seller_id : userId },
          orderBy : { created_at : 'desc' },
          skip,
          take : limit,
        }),
        prisma.qna.count({
          where : { seller_id : userId },
        })
      ])

      res.status(200).json({ qnas, total, page, limit });
    } catch (error) {
      console.error('QnA 조회 오류:', error);
      res.status(500).json({ message : 'QnA 조회 중 오류가 발생했습니다.'});
    }
  }

  const answerQna = async (req, res) => {
    const qnaId = parseInt(req.params.id, 10); 
    const { answer } = req.body;


    if (!answer) {
      return res.status(400).json({ message : '답변을 입력해주세요.'});
    }

    try {
      const updatedQna = await prisma.qna.update({
        where : { qna_id : qnaId },
        data : { answer, answered_at : new Date() },
      });

      res.status(200).json({ message : '답변이 성공적으로 등록되었습니다.', qna : updatedQna });
    } catch (error) {
      console.error('답변 등록 오류:', error);
      res.status(500).json({ message : '답변 등록 중 오류가 발생했습니다.'});
    }
  }

module.exports = { createNotice, getNotice, deleteNotice, updateNotice, getQnAByUser, answerQna }; 