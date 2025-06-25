const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getDashboardData = async (req, res) => {
    try {
      const userId = Number(req.query.user_id);
      const today = new Date();
      const sevenDaysLater = new Date();
      sevenDaysLater.setDate(today.getDate() + 7);
  
      // 총 pc 수
      const totalPCCount = await prisma.pc.count({
        where: { user_id: userId },
      });
  
      // 사용 중 pc
      const inUsePCCount = await prisma.pc.count({
        where: {
          user_id: userId,
          rental_status: 'RENTED',
        },
      });
  
      // 미사용 pc
      const availablePCCount = totalPCCount - inUsePCCount;
  
      // 만료 예정 pc
      const expiredPCCount = await prisma.rental.count({
        where: {
          user_id: userId,
          status: 'ACTIVE',
          end_date: {
            gte: today,
            lt: sevenDaysLater,
          },
        },
      });
  
      // ✅ 공지사항(role = SELLER) 가져오기
      const notices = await prisma.admin_notice.findMany({
        where: {
          role: 'SELLER', // enum 타입이라 문자열 그대로 비교 가능
        },
        orderBy: {
          created_at: 'desc',
        },
        select: {
          id: true,
          title: true,
          created_at: true,
        },
      });
  
      // 응답
      res.json({
        totalPCCount,
        inUsePCCount,
        availablePCCount,
        expiredPCCount,
        notices, // 포함
      });
  
    } catch (error) {
      console.error('대시보드 데이터 조회 오류:', error);
      res.status(500).json({ message: '대시보드 데이터 조회 오류' });
    }
  };

  const getAvailablePcCount = async (req, res) => {
    try {
      const userId = Number(req.query.user_id);
      const pcs = await prisma.pc.findMany({
        where: {
          user_id: userId,
          rental_status: 'AVAILABLE',
        },
        select : { cpu : true }
      });

      const countMap = {};

      pcs.forEach((pc) => {
        const normalized = pc.cpu?.toUpperCase().replace(/\s/g, '');
        if (!countMap[normalized]) {
          countMap[normalized] = 0;
        }
        countMap[normalized]++;
      });

      const result = Object.entries(countMap).map(([cpu, count]) => ({
        cpu,
        count,
      }));

      res.json(result);
      
    } catch (error) {
      console.error('대여 가능 PC 수 조회 오류:', error);
      res.status(500).json({ message: '대여 가능 PC 수 조회 오류' });
    }
  };

  const getPcRentalRatio = async (req, res) => {
    try {
      const userId = Number(req.query.user_id);
  
      const pcs = await prisma.pc.findMany({
        where: {
          user_id: userId,
        },
        select: {
          cpu: true,
          rental_status: true,
        },
      });
  
      const cpuMap = {};
  
      pcs.forEach((pc) => {
        const cpu = pc.cpu?.toUpperCase().replace(/\s/g, '') ?? 'UNKNOWN';
        if (!cpuMap[cpu]) {
          cpuMap[cpu] = { rented: 0, available: 0 };
        }
  
        if (pc.rental_status === 'RENTED') {
          cpuMap[cpu].rented++;
        } else {
          cpuMap[cpu].available++;
        }
      });
  
      const result = Object.entries(cpuMap).map(([cpu, { rented, available }]) => ({
        cpu,
        rented,
        available,
      }));
  
      res.json(result);
  
    } catch (error) {
      console.error('PC 대여 비율 조회 오류:', error);
      res.status(500).json({ message: 'PC 대여 비율 조회 오류' });
    }
  };


module.exports = { getDashboardData, getAvailablePcCount, getPcRentalRatio };
