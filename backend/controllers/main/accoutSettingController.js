const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const getUserdata = async (req, res) => {
    try {
      const authHeader = req.headers.authorization
      const token = authHeader?.split(' ')[1]
  
      if (!token) {
        return res.status(401).json({ message: 'Access token missing' })
      }
  
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  
      const user = await prisma.user.findUnique({
        where: { user_id: decoded.userId },
        select: {
          user_id: true,
          name: true,
          phone: true,
          email: true,
        },
      })
  
      if (!user) {
        return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' })
      }
  
      res.json(user)
    } catch (error) {
      console.error('getUserdata 오류:', error)
      res.status(500).json({ message: '서버 오류가 발생했습니다.' })
    }
  }

module.exports = { getUserdata };

