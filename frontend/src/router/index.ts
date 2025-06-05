import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AdminDashboard from '../views/buyer/AdminDashboard.vue';
import PcStatus from '../views/buyer/PcStatus.vue';
import PcAddPopup from '../views/buyer/PcAddPopup.vue';
import BulkPcRegister from '../views/buyer/BulkPcRegister.vue';
import CustomerManagement from '../views/buyer/CustomerManagement.vue';
import SalesManagement from '../views/buyer/SalesManagement.vue';
import NoticeSupport from '../views/NoticeSupport.vue';
import MessageChat from '../views/MessageChat.vue';
import SellerLogin from '../views/SellerLogin.vue';
import MainPage from '../views/home/MainPage.vue';
import LoginPopup from '../views/home/LoginPopup.vue';
import SignupPage from '../views/home/SignupPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
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
  // 기존 라우트가 있다면 아래에 추가
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router; 