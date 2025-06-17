const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAuthorsByCpuTitle = async (req, res) => {
    try {
      // 1. URL 파라미터 정제 (띄어쓰기 제거 + 대문자 변환)
      const rawTitle = req.params.title;
      const normalized = rawTitle.toUpperCase().replace(/\s/g, '');
  
      // 2. DB 조회 (cpu = title 조건)
      const pcs = await prisma.pc.findMany({
        where: {
          cpu: normalized, // 또는 cpu: rawTitle (가공하지 않았다면)
        },
        select: {
          user_id: true,
        },
      });
  
      // 3. user_id 중복 제거
      const uniqueUserIds = [...new Set(pcs.map(p => p.user_id))];
  
      // 4. 사용자 정보 조회 (이름, 이메일 등 필요 시)
      const authors = await prisma.user.findMany({
        where: {
          user_id: { in: uniqueUserIds },
        },
        select: {
          user_id: true,
          name: true, // 글쓴이 이름
        },
      });
      console.log(authors);
  
      res.json(authors); // 프론트로 넘김
    } catch (error) {
      console.error('글쓴이 조회 오류:', error);
      res.status(500).json({ error: '서버 오류' });
    }
  };

  module.exports = { getAuthorsByCpuTitle };