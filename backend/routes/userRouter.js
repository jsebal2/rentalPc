const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { authenicateToken } = require('../middlewares/authMiddleware');
const jwt = require('jsonwebtoken');
const { register } = require('../controllers/authController');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/login', login);

router.get('/profile', authenicateToken, async(req, res) => {
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
    

module.exports = router;