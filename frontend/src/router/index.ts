import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { jwtDecode } from 'jwt-decode';
import axios from '../api/axios';
import SellerDashboard from '../views/seller/SellerDashboard.vue';
import PcStatus from '../views/seller/PcStatus.vue';
import PcAddPopup from '../views/seller/PcAddPopup.vue';
import BulkPcRegister from '../views/seller/BulkPcRegister.vue';
import CustomerManagement from '../views/seller/CustomerManagement.vue';
import SalesManagement from '../views/seller/SalesManagement.vue';
import NoticeSupport from '../views/seller/NoticeSupport.vue';
import MessageChat from '../views/MessageChat.vue';
import SellerLogin from '../views/SellerLogin.vue';
import MainPage from '../views/home/MainPage.vue';
import LoginPopup from '../views/home/LoginPopup.vue';
import SignupPage from '../views/home/SignupPage.vue';
import CustomDashboard from '../views/buyer/CustomDashboard.vue';
import CustomMoniter from '../views/buyer/CustomMoniter.vue';
import CustomNotice from '../views/buyer/CustomNotice.vue';
import PcListPage from '../views/home/PcListPage.vue';
import ProductDetail from '../views/home/ProductDetail.vue';
import SellerRegistration from '../views/home/SellerRegistration.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue';
import AdminUserManage from '../views/admin/AdminUserManage.vue';
import AdminNotice from '../views/admin/AdminNotice.vue';
import PostDetail from '../views/home/PostDetail.vue';
import AccountSetting from '../views/home/AccountSetting.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/seller-dashboard',
    name: 'SellerDashboard',
    component: SellerDashboard,
  },
  {
    path: '/pc-status',
    name: 'PcStatus',
    component: PcStatus,
  },
  {
    path: '/pc-add-popup',
    name: 'PcAddPopup',
    component: PcAddPopup,
  },
  {
    path: '/bulk-pc-register',
    name: 'BulkPcRegister',
    component: BulkPcRegister,
  },
  {
    path: '/customer-management',
    name: 'CustomerManagement',
    component: CustomerManagement,
  },
  {
    path: '/sales-management',
    name: 'SalesManagement',
    component: SalesManagement,
  },
  {
    path: '/notice-support',
    name: 'NoticeSupport',
    component: NoticeSupport,
  },
  {
    path: '/message-chat',
    name: 'MessageChat',
    component: MessageChat,
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'LoginPopup',
    component: LoginPopup,
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
  },
  {
    path: '/custom-dashboard',
    name: 'CustomDashboard',
    component: CustomDashboard,
  },
  {
    path: '/custom-moniter',
    name: 'CustomMoniter',
    component: CustomMoniter,
  },
  {
    path: '/custom-notice',
    name: 'CustomNotice',
    component: CustomNotice,
  },
  {
    path: '/pc-list',
    name: 'PcListPage',
    component: PcListPage,
  },
  {
    path: '/product-detail/:title',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/seller-registration',
    name: 'SellerRegistration',
    component: SellerRegistration,
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
  {
    path: '/admin-Manage',
    name: 'AdminUserManage',
    component: AdminUserManage,
  },
  {
    path: '/admin-notice',
    name: 'AdminNotice',
    component: AdminNotice,
  },
  {
    path: '/post-detail/:user_id',
    name: 'PostDetail',
    component: PostDetail,
    props: true,
  },
  {
    path: '/account-setting',
    name: 'AccountSetting',
    component: AccountSetting,
  },

  // 기존 라우트가 있다면 아래에 추가
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // 토큰이 없으면 로그인 필요 여부에 따라 처리
    return next(); // or next('/login');
  }

  try {
    const decoded: any = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();

    if (!isExpired) {
      return next(); // 토큰이 유효하면 그대로 진행
    }

    // 토큰 만료 → refresh 시도
    const res = await axios.post('/users/refresh', {}, { withCredentials: true });
    const newToken = res.data.accessToken;
    localStorage.setItem('token', newToken);
    return next(); // 토큰 재발급 후 라우트 이동
  } catch (err) {
    console.warn('토큰 만료 또는 refresh 실패');
    localStorage.removeItem('token');
    return next('/login');
  }
});

export default router; 