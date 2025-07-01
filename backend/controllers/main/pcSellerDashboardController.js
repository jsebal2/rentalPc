const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getSellerProfile = async (req, res) => {
    const { userId } = req.params

    try {
        const seller = await prisma.seller_profile.findUnique({
            where: {
                user_id: parseInt(userId)
            }
        })

        if (!seller) {
            return res.status(404).json({ error: '판매자 프로필을 찾을 수 없습니다.' })
        }

        res.json({
            business_name: seller.business_name,
            contact_phone: seller.contact_phone,
            contact_email: seller.contact_email,
            kakao_id: seller.introduction_title,
            company_introduction: seller.introduction_content,
            start_time: seller.start_time,
            end_time: seller.end_time
        })
    } catch (error) {
        console.error('판매자 프로필 조회 오류:', error)
        res.status(500).json({ error: '판매자 프로필 조회 오류' })
    }
}

const updateSellerProfile = async (req, res) => {
    const { userId } = req.params
    const {
      business_name,
      contact_phone,
      contact_email,
      introduction_title,
      introduction_content,
      start_time,
      end_time
    } = req.body
  
    try {
      const updated = await prisma.seller_profile.update({
        where: {
          user_id: parseInt(userId)
        },
        data: {
          business_name,
          contact_phone,
          contact_email,
          introduction_title,
          introduction_content,
          start_time: start_time ? parseInt(start_time) : null,
          end_time: end_time ? parseInt(end_time) : null
        }
      })
  
      res.json({ message: '프로필이 성공적으로 업데이트되었습니다.', profile: updated })
    } catch (error) {
      console.error('프로필 업데이트 오류:', error)
      res.status(500).json({ error: '프로필 업데이트 실패' })
    }
  }
  

module.exports = { getSellerProfile, updateSellerProfile }