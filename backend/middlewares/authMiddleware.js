const jwt = require('jsonwebtoken');

const authenicateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; //Bearer 토큰
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // 토큰이 없으면 401 에러 반환

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); // 토큰이 유효하지 않으면 403 에러 반환

        req.user = decoded;
        next();
    });
};

module.exports = { authenicateToken };