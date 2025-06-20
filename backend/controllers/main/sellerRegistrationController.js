const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 판매자 등록
const registerSellerProfile = async (req, res) => {
  try {
    const {
      user_id,
      business_name,
      introduction_title,
      introduction_content,
      contact_phone,
      contact_email,
      bank_name,
      bank_account_number,
      account_holder,
    } = req.body;

    console.log(req.body);

    // 기존 seller_profile 존재 여부 확인
    const existing = await prisma.seller_profile.findUnique({
      where: { user_id: Number(user_id) },
    });

    if (existing) {
      return res.status(400).json({ message: '이미 등록된 판매자입니다.' });
    }

    // 등록
    const newSeller = await prisma.seller_profile.create({
      data: {
        user_id: Number(user_id),
        business_name,
        introduction_title,
        introduction_content,
        contact_phone,
        contact_email,
        bank_name,
        bank_account_number,
        account_holder,
        verified_at: null, // 초기에는 미승인 상태
      },
    });

    await prisma.user.update({
      where: { user_id: Number(user_id) },
      data: { role: 'Seller' },
    });

    return res.status(201).json({ message: '판매자 등록 완료', seller: newSeller });
  } catch (error) {
    console.error('판매자 등록 오류:', error);
    return res.status(500).json({ message: '판매자 등록 중 오류가 발생했습니다.' });
  }
};

module.exports = { registerSellerProfile };

