const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, role, status } = req.body

  try {
    const updated = await prisma.user.update({
      where: { user_id: Number(id) },
      data: { name, email, role, status }
    })
    res.json(updated)
  } catch (err) {
    console.error('사용자 수정 오류:', err)
    res.status(500).json({ error: '업데이트 실패', detail: err })
  }
}

const getAllPcs = async (req, res) => {
  try {
    const pcs = await prisma.pc.findMany();  // 전체 PC 조회
    res.status(200).json(pcs);               // 201 → 200으로 변경
  } catch (error) {
    console.error('PC 목록 조회 실패:', error);
    res.status(500).json({ error: 'PC 조회 실패', detail: error });
  }
};

module.exports = {updateUser, getAllPcs};