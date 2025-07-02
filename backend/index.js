const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const https = require('https');
const http = require('http');
const fs = require('fs');
const initSocket = require('./socket');
const { PrismaClient } = require('@prisma/client');
const errorHandler = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');

// sellerRouters
const pcRouter = require('./routes/seller/pcRoutes');
const customerRouter = require('./routes/seller/customerRoutes');
const salesRouter = require('./routes/seller/salesRoutes');
const noticeRouter = require('./routes/seller/noticeRoutes');
const dashboardRouter = require('./routes/seller/dashboardRoutes');

// buyerRouters
const b_dashboardRouter = require('./routes/buyer/b_dashboardRoutes');
const b_noticeRouter = require('./routes/buyer/b_noticeRouter');
const b_moniterRouter = require('./routes/buyer/b_moniterRouters');

// main
const productDetailRouter = require('./routes/main/productDetailRoutes');
const sellerRegistrationRouter = require('./routes/main/sellerRegistrationRoutes');
const postDetailRouter = require('./routes/main/postDetailRoutes');
const followRouter = require('./routes/main/followRoutes');
const chatRouter = require('./routes/main/chatRoutes');
const accountSettingRouter = require('./routes/main/accountSettingRouter');
const pcSellerDashboardRouter = require('./routes/main/pcSellerDashboardRouter');
const salespcRouter = require('./routes/main/salespcRouter');
// layout
const layoutRouter = require('./routes/layout/notificationRoutes');

// admin
const a_dashboardRouter = require('./routes/admin/a_dashboardRoutes');
const a_sellermanaRoutes = require('./routes/admin/a_sellermanaRoutes');
const a_noticeRoutes = require('./routes/admin/a_noticeRoutes');

// 환경변수 로드
dotenv.config();

// 인증서 경로
// const privateKey = fs.readFileSync('./ssl/key.pem', 'utf8');
// const certificate = fs.readFileSync('./ssl/cert.pem', 'utf8');
// const credentials = { key: privateKey, cert: certificate };

// Express 앱 생성
const app = express();
// const server = http.createServer(credentials, app);
const server = http.createServer(app);
initSocket(server);
const port = process.env.PORT || 3000;

// 미들웨어 설정
// const allowedOrigins = [
//   'https://localhost:5173',
//   'https://192.168.0.29:5173',
//   'https://192.168.0.81:5173',
//   'https://115.93.85.189:5173',
//   'https://211.239.114.71:5173',
//   // 필요시 추가
// ];
const allowedOrigins = [
  'http://localhost:5173',
  'http://192.168.0.29:5173',
  'http://192.168.0.81:5173',
  'http://115.93.85.189:5173',
  'http://211.239.114.71:5173',
  // 필요시 추가
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS 차단: ' + origin));
    }
  },
  credentials: true
}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(express.static('public'));

// 기본 라우터
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 사용자 라우터 등록
const userRouter = require('./routes/seller/userRouter');
app.use('/users', userRouter);

// sellerRouters
// PC 라우터 등록
app.use('/pcs', pcRouter);

// 고객 라우터 등록
app.use('/customers', customerRouter);

// 매출 라우터 등록
app.use('/sales', salesRouter);

// 공지 라우터 등록
app.use('/notice', noticeRouter);

// 대시보드 라우터 등록
app.use('/seller-dashboard', dashboardRouter);

// buyer
app.use('/buyer-dashboard', b_dashboardRouter);
app.use('/buyer-notice', b_noticeRouter);
app.use('/buyer-moniter', b_moniterRouter);

// main
app.use('/product-detail', productDetailRouter);
app.use('/seller-registration', sellerRegistrationRouter);
app.use('/post-detail', postDetailRouter);
app.use('/follow', followRouter);
app.use('/chat', chatRouter);
app.use('/account-setting', accountSettingRouter);
app.use('/pc-seller-dashboard', pcSellerDashboardRouter);
app.use('/salespc', salespcRouter);
// layout
app.use('/layout', layoutRouter);
//admin
app.use('/admin-dashboard', a_dashboardRouter);
app.use('/admin-sellermana', a_sellermanaRoutes);
app.use('/admin-notice', a_noticeRoutes);


// 서버 실행
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

