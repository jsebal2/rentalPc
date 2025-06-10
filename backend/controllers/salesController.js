const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const getPcList = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (!token) {
      return res.status(401).json({ message: '토큰이 없습니다.' })
    }
  
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      const userId = decoded.userId
  
      const pcs = await prisma.pc.findMany({
        where: {
          user_id: userId,
        },
        select: {
          pc_id: true,
          pcName: true,
          rental: {
            orderBy: { created_at: 'desc' },
            take: 1,
            select: {
              start_date: true,
              end_date: true,
              auto_renew: true,
            },
          },
        },
      })
  
      const result = pcs.map(pc => ({
        pcName: pc.pcName,
        startDate: pc.rental[0]?.start_date ?? null,
        endDate: pc.rental[0]?.end_date ?? null,
        autoRenew: pc.rental[0]?.auto_renew ?? null,
      }))
  
      res.status(200).json(result)
      console.log(result);
    } catch (error) {
      console.error('PC 목록 가져오기 실패:', error)
      res.status(500).json({ message: 'PC 목록 가져오기 실패' })
    }
  }
  

module.exports = { getPcList };