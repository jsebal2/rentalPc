const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const getCustomerList = async (req, res) => {
  try {
    const search = req.query.search?.trim().toLowerCase();

    // 1. 사용자 리스트 조회
    const customers = await prisma.user.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search } },  // 대소문자 구분됨 (insensitive 제거)
              { email: { contains: search } },
              // user_id는 숫자일 경우 contains 사용 불가
            ],
          }
        : undefined,
      select: {
        user_id: true,
        name: true,
        email: true,
        phone: true,
        join_date: true,
      },
      orderBy: {
        join_date: 'desc',
      },
    });

    // 2. 사용자 ID 목록 추출
    const customerIds = customers.map(c => c.user_id);

    // 3. rental 테이블에서 유저별 대여 횟수 그룹화
    const rentalCounts = await prisma.rental.groupBy({
      by: ['user_id'],
      where: {
        user_id: {
          in: customerIds,
        },
      },
      _count: {
        rental_id: true,
      },
    });

    // 4. user_id → count 맵핑
    const rentalMap = Object.fromEntries(
      rentalCounts.map(r => [r.user_id, r._count.rental_id])
    );

    // 5. 최종 사용자 리스트에 pcCount 추가
    const processed = customers.map(user => ({
      ...user,
      pcCount: rentalMap[user.user_id] || 0,
    }));

    res.status(200).json(processed);
  } catch (error) {
    console.error('고객 목록 조회 오류:', error);
    res.status(500).json({ message: '고객 목록 조회 오류' });
  }
};


  const getUserRentals = async (req, res) => {
    const userId = parseInt(req.params.id);
  
    if (isNaN(userId)) {
      return res.status(400).json({ message: '잘못된 사용자 ID입니다.' });
    }
  
    try {
      const rentals = await prisma.rental.findMany({
        where: { user_id: userId },
        select: {
          start_date: true,
          end_date: true,
          pc: {
            select: {
              pc_id: true,
              cpu: true,
              ram: true,
            },
          },
        },
        orderBy: {
          start_date: 'desc',
        },
      });
  
      res.status(200).json(rentals);
      console.log(userId);
      console.log(rentals);
    } catch (error) {
      console.error('대여 내역 조회 오류:', error);
      res.status(500).json({ message: '대여 내역 조회 오류' });
    }
  };
  

module.exports = {getCustomerList, getUserRentals};
