const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const requestExtension = async (req, res) => {
  try {
    const {
      pc_id,
      user_id,
      seller_id,
    } = req.body;

    // 필수 값 검증
    if (!pc_id || !user_id || !seller_id ) {
      return res.status(400).json({ message: '필수 항목 누락' });
    }

    const rental = await prisma.rental.findFirst({
      where: {
        pc_id,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    const requestedEnd = new Date(rental.end_date);
    requestedEnd.setDate(requestedEnd.getDate() + 30);

    const extension = await prisma.rental_extension.create({
      data: {
        pc_id,
        user_id,
        seller_id,
        original_end: rental.end_date,
        requested_end: requestedEnd,
        status: 'PENDING', 
      },
    });

    const ex_title = "대여연장 신청"
    const ex_message = `${user_id}님이 pc Name: ${pc_id}를 연장 신청했습니다.`
    await prisma.notification.create({
      data: {
        user_id: seller_id,
        title: ex_title,
        message: ex_message,
        type: "INFO",
        is_read: false,
      }
    })

    console.log('연장 요청 등록됨:', extension);
    res.status(201).json({ extension });
  } catch (error) {
    console.error('연장 요청 오류:', error);
    res.status(500).json({ message: '연장 요청 중 오류가 발생했습니다.' });
  }
};

module.exports = { requestExtension };