const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPostDetail = async (req, res) => {
    const user_id = Number(req.params.user_id);
    try {
      const post = await prisma.seller_profile.findUnique({
        where: {
          user_id: user_id,
        },
        select: {
          user_id: true,
          business_name: true,
          introduction_title: true,
          introduction_content: true,
          contact_phone: true,
        },
      });
      res.json(post);
      console.log(post);
    } catch (error) {
      console.error('판매자 정보 조회 오류:', error);
      res.status(500).json({ error: '서버 오류' });
    }
  };

  const createFollowRequest = async (req, res) => {
    try {
      const { loginUserId, sellerUserId } = req.body;
  
      if (!loginUserId || !sellerUserId) {
        return res.status(400).json({ error: '요청자와 수신자 ID가 필요합니다.' });
      }
  
      // 이미 요청된 상태인지 확인
      const existing = await prisma.follow_request.findUnique({
        where: {
          requesterId_receiverId: {
            requesterId: Number(loginUserId),
            receiverId: Number(sellerUserId)
          }
        }
      });
  
      if (existing) {
        return res.status(409).json({ message: '이미 팔로우 요청이 존재합니다.' });
      }
  
      // 새 요청 생성
      const newRequest = await prisma.follow_request.create({
        data: {
          requesterId: Number(loginUserId),
          receiverId: Number(sellerUserId)
        }
      });
  
      res.status(201).json({ message: '팔로우 요청이 전송되었습니다.', request: newRequest });
    } catch (error) {
      console.error('팔로우 요청 저장 오류:', error);
      res.status(500).json({ error: '서버 오류' });
    }
  };

module.exports = { getPostDetail, createFollowRequest };