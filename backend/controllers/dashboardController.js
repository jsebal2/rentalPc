const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getDashboardData = async (req, res) => {
    try {
        const userId = Number(req.query.user_id);
        const today = new Date();
        const sevenDaysLater = new Date()
        sevenDaysLater.setDate(today.getDate() + 7);

        // 총 pc 수
        const totalPCCount = await prisma.pc.count({
            where : { user_id: userId }
        });

        // 현재 사용 중
        const inUsePCCount = await prisma.pc.count({
            where : {
                user_id : userId,
                rental_status : 'RENTED'
            },
        });

        // 미사용
        const availablePCCount = totalPCCount - inUsePCCount;

        // 만료 예정 PC
        const expiredPCCount = await prisma.rental.count({
            where : {
                user_id : userId,
                status : 'ACTIVE',
                end_date : {
                    gte : today,
                    lt : sevenDaysLater
                }
            }
        });

        res.json({
            totalPCCount,
            inUsePCCount,
            availablePCCount,
            expiredPCCount
        });

        console.log(totalPCCount, inUsePCCount, availablePCCount, expiredPCCount);

    } catch (error) {
        console.error('대시보드 데이터 조회 오류:', error);
        res.status(500).json({ message : '대시보드 데이터 조회 오류' });
    }
}

module.exports = { getDashboardData };
