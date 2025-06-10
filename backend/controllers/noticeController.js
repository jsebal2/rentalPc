const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const createNotice = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: '토큰이 없습니다.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const userId = decoded.userId

        const { title, content, type } = req.body;

        const newNotice = await prisma.notice.create({
            data: {
                title,
                content,
                type,
                admin_id: userId,
                pinned: pinned === true || pinned === 'true',
            }
        });
        console.log(newNotice);

        res.status(201).json({ message: '공지가 성공적으로 등록되었습니다.', notice: newNotice });
    } catch (error) {
        console.error('공지 등록 오류:', error);
        res.status(500).json({ message: '공지 등록 중 오류가 발생했습니다.' });
    }
} 

module.exports = { createNotice };
