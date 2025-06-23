const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 전체 PC 목록 가져오기
const getAllPcs = async (req, res) => {
  try {
    const pcs = await prisma.pc.findMany({
      include: {
        user: true // 판매자 정보 포함
      }
    });
    res.json(pcs);
    
  } catch (error) {
    console.error('PC 조회 실패:', error);
    res.status(500).json({ error: 'PC 목록 불러오기 실패' });
  }
};

// 강제 반납 처리
const forceReturnPc = async (req, res) => {
  const pc_id = Number(req.params.id);
  try {
    const updated = await prisma.pc.update({
      where: { pc_id },
      data: {
        renter_id: null,
        rental_status: 'AVAILABLE'
      }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: '반납 실패' });
  }
};

// PC 삭제
const deletePcById = async (req, res) => {
  const pc_id = Number(req.params.id);
  try {
    await prisma.pc.delete({
      where: { pc_id }
    });
    res.json({ message: '삭제 완료' });
  } catch (error) {
    res.status(500).json({ error: '삭제 실패' });
  }
};

const getSellersWithStats = async (req, res) => {
  try {
    const sellers = await prisma.user.findMany({
      where: {
        role: 'Seller'
      },
      select: {
        user_id: true,
        name: true,
        email: true,
        join_date: true,
        pc: {
          select: { pc_id: true }
        },
        followsAsSeller: {
          select: { buyer_id: true }
        }
      }
    })

    const result = sellers.map(seller => ({
      user_id: seller.user_id,
      name: seller.name,
      email: seller.email || '–',
      join_date: seller.join_date,
      pc_count: seller.pc.length,
      customer_count: seller.followsAsSeller.length
    }))

    res.json(result)
  } catch (err) {
    console.error('판매자 목록 조회 실패:', err)
    res.status(500).json({ error: '판매자 목록 불러오기 실패' })
  }
}

module.exports = { getAllPcs, forceReturnPc, deletePcById, getSellersWithStats };
