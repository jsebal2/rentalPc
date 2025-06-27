const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
 

// [GET] /follow/:user_id : 요청 목록 불러오기 (요청자, 수신자 둘 다 가능)
const getFollowRequests = async (req, res) => {
  const userId = Number(req.params.user_id);

  try {
    const requests = await prisma.follow_request.findMany({
      where: {
        approved:false,
        OR: [
          { requesterId: userId },
          { receiverId: userId }
        ]
      },
      include: {
        requester: { select: { name: true, email: true } },
        receiver: { select: { name: true, email: true } }
      },
      orderBy: {
        requestedAt: 'desc'
      }
    });

    res.json(requests);
  } catch (err) {
    console.error('요청 목록 오류:', err);
    res.status(500).json({ message: '요청 목록 조회 실패' });
  }
};

// [PATCH] /follow/approve/:id : 승인 처리
const approveFollowRequest = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const updated = await prisma.follow_request.update({
      where: { id },
      data: {
        approved: true,
        approvedAt: new Date()
      }
    });

    await prisma.follow.create({
      data: {
        seller_id: updated.receiverId,
        buyer_id: updated.requesterId
      }
    });

    const user = await prisma.user.findUnique({
      where: {
        user_id: updated.receiverId
      }
    });
    
    

    await prisma.notification.create({
      data: {
        user_id: updated.requesterId, // 알림을 받을 사람
        title: "팔로우 승인 완료",
        message: `${user.name}님이 팔로우 요청을 승인했습니다.`,
        type: "INFO",
        is_read: false
      }
    });
    res.json({ message: '승인 완료' });
  } catch (err) {
    console.error('승인 오류:', err);
    res.status(500).json({ message: '승인 실패' });
  }
};

module.exports = {
  getFollowRequests,
  approveFollowRequest
};
