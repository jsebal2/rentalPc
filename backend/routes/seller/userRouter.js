const express = require('express');
const router = express.Router();
const { login } = require('../../controllers/seller/authController');
const { authenticateToken } = require('../../middlewares/authMiddleware');
const jwt = require('jsonwebtoken');
const { register } = require('../../controllers/seller/authController');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/login', login);

router.get('/profile', authenticateToken, async(req, res) => {
    const user = await prisma.user.findUnique({
        where: { user_id: req.user.userId },
        select: {user_id: true, name: true, email: true,},
    });
    res.json(user);
});

router.post('/register', register);

router.post('/logout', (req, res) => {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure : true,
        sameSite: 'Strict',
        path : '/',
    });
    res.sendStatus(200)
});

router.post('/refresh', (req, res) => {
    console.log('refresh 호출');
    const token = req.cookies.refreshToken;

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);

        const newAccessToken = jwt.sign(
            { userId: decoded.userId },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        );

        res.json({ accessToken: newAccessToken });
    });
});
    
router.get('/status', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
    return res.status(401).json({ message : '토큰이 없습니다.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user_id = decoded.userId;
        
        const users = await prisma.user.findMany({
            where: { user_id: user_id },
            select: {
                user_id: true,
                role: true,
            },
        });
        res.json(users);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 오류' });
  }
});

module.exports = router;