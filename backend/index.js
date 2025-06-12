const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { PrismaClient } = require('@prisma/client');
const errorHandler = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const pcRouter = require('./routes/pcRoutes');
const customerRouter = require('./routes/customerRoutes');
const salesRouter = require('./routes/salesRoutes');
const noticeRouter = require('./routes/noticeRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');
// 환경변수 로드
dotenv.config();

// Express 앱 생성
const app = express();
const port = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(cookieParser());

// 기본 라우터
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 사용자 라우터 등록
const userRouter = require('./routes/userRouter');
app.use('/users', userRouter);

// PC 라우터 등록
app.use('/pcs', pcRouter);

// 고객 라우터 등록
app.use('/customers', customerRouter);

// 매출 라우터 등록
app.use('/sales', salesRouter);

// 공지 라우터 등록
app.use('/notice', noticeRouter);

// 대시보드 라우터 등록
app.use('/admin-dashboard', dashboardRouter);

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

