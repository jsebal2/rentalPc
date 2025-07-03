<template>
  <div class="dashboard-frame">
    <!-- 좌측 사이드바 -->
    <div class="sidebar" :class="{ show: showSidebar }">
      <router-link class="sidebar-header" to="/">RemoteR</router-link>
      <div class="sidebar-menu">
        <div v-if="user_role === 'Admin'">
          <router-link class="sidebar-menu-item" to="/" @click="showSidebar = false">home</router-link>
          <router-link class="sidebar-menu-item" to="/admin-dashboard" @click="showSidebar = false">Dashboard</router-link>
          <router-link class="sidebar-menu-item" to="/admin-Manage" @click="showSidebar = false">판매자 관리</router-link>
          <router-link class="sidebar-menu-item" to="/admin-notice" @click="showSidebar = false">공지사항</router-link>
        </div>
        <div v-else-if="user_role === 'Seller'">
          <router-link class="sidebar-menu-item" to="/" @click="showSidebar = false">home</router-link>
          <router-link class="sidebar-menu-item" to="/seller-dashboard" @click="showSidebar = false">Dashboard</router-link>
          <router-link class="sidebar-menu-item" to="/pc-status" @click="showSidebar = false">PC 상태 관리</router-link>
          <router-link class="sidebar-menu-item" to="/customer-management" @click="showSidebar = false">고객 관리</router-link>
          <router-link class="sidebar-menu-item" to="/sales-management" @click="showSidebar = false">요금 및 결제 관리</router-link>
          <router-link class="sidebar-menu-item" to="#" @click="showSidebar = false">설정</router-link>
          <router-link class="sidebar-menu-item" to="/notice-support" @click="showSidebar = false">고객 및 공지 관리</router-link>
        </div>
        <div v-else-if="user_role === 'Customer'">
          <router-link class="sidebar-menu-item" to="/" @click="showSidebar = false">home</router-link>
          <router-link class="sidebar-menu-item" to="/custom-dashboard" @click="showSidebar = false">Dashboard</router-link>
          <router-link class="sidebar-menu-item" to="/custom-moniter" @click="showSidebar = false">모니터링</router-link>
          <router-link class="sidebar-menu-item" to="/custom-notice" @click="showSidebar = false">공지사항</router-link>
        </div>
      </div>
    </div>

    <!-- 우측 메인 콘텐츠 -->
    <div class="main-content">
      <!-- 상단 고정 헤더 -->
      <div class="header">
        <span class="header-title">{{ headerTitle }}</span>
        <div class="header-right">
          <router-link class="header-btn" to="/message-chat">
            <span class="header-icon"></span>
            메세지
          </router-link>
          <button class="header-btn" @click="toggleNotificationModal">
            <span class="header-icon"></span>
            알림
          </button>
          <a href="#" class="header-btn" @click.prevent="showFollowModal = true">팔로우</a>
          <router-link class="header-btn" to="/account-setting">
            <span class="header-icon"></span>
            내정보
          </router-link>
          <button class="mobile-hamburger" @click="showSidebar = !showSidebar">☰</button>
        </div>
      </div>

      <!-- 알림 드롭다운 -->
      <div 
        :class="['notification-dropdown', { show: showNotificationModal }]"
        class="notification-dropdown"
        @click.stop
      >
        <div class="dropdown-content">
          <h4 class="dropdown-title">알림</h4>
          <ul class="notification-list">
            <li v-if="notifications.length === 0" class="notification-item">
              새로운 알림이 없습니다.
            </li>
            <li 
              v-else 
              v-for="noti in notifications" 
              :key="noti.notification_id" 
              class="notification-item"
            >
              <strong>{{ noti.title }}</strong>
              <p>{{ noti.message }}</p>
              <span class="date">{{ noti.created_at ? new Date(noti.created_at).toLocaleString() : '' }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 실제 페이지 콘텐츠 -->
      <div class="page-body">
        <FollowModal v-if="showFollowModal" @close="showFollowModal = false" />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import FollowModal from '../components/FollowModal.vue'

const showFollowModal = ref(false)
const showSidebar = ref(false)

const token = localStorage.getItem('token');
const userStatuses = ref([]);
const user_role = ref();
const user_id = localStorage.getItem('user_id');

const showNotificationModal = ref(false);
const notifications = ref([]);

const props = defineProps({
  headerTitle: {
    type: String,
    default: 'PC 상태 관리',
  },
});

onMounted(async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/users/status', {
      headers: { Authorization: `Bearer ${token}` },
    });
    userStatuses.value = res.data;
    user_role.value = userStatuses.value[0].role;
  } catch (err) {
    console.error(err);
  }

  window.addEventListener('click', handleOutsideClick);
  window.addEventListener('scroll', closeNotification);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleOutsideClick);
  window.removeEventListener('scroll', closeNotification);
});

const fetchNotifications = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/layout/notifications', {
      params: { user_id },
      headers: { Authorization: `Bearer ${token}` },
    });
    notifications.value = res.data.notifications;
  } catch (error) {
    console.error('알림 불러오기 실패:', error);
  }
};

const toggleNotificationModal = async () => {
  if (showNotificationModal.value) {
    showNotificationModal.value = false;
  } else {
    await fetchNotifications();
    showNotificationModal.value = true;
  }
};

const handleOutsideClick = (e: MouseEvent) => {
  const dropdown = document.querySelector('.notification-dropdown');
  const button = document.querySelector('.header-btn');
  if (
    dropdown && !dropdown.contains(e.target as Node) &&
    button && !button.contains(e.target as Node)
  ) {
    showNotificationModal.value = false;
  }
};

const closeNotification = () => {
  showNotificationModal.value = false;
};
</script>

<style scoped>
/* 기본 레이아웃 */
.dashboard-frame {
  width: calc(100% - 240px);
  margin-left: 240px;
  display: flex;
}

/* 사이드바 */
.sidebar {
  width: 240px;
  background: #eef0f6;
  border-right: 1px solid #eee;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.sidebar-header {
  justify-content: center;
  display: flex;
  align-items: center;
  background: #fff;
  height: 60px;
  color: #000;
  font-weight: 800;
  font-size: 28px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
}
.sidebar-menu {
  margin-top: 20px;
  padding: 0 16px;
}
.sidebar-menu-item {
  color: #000;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  display: block;
  text-decoration: none;
}
.sidebar-menu-item.router-link-exact-active {
  font-weight: bold;
  color: #257cff;
}

/* 메인 콘텐츠 영역 */
.main-content {
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f6fa;
  padding: 60px 0;
  position: relative;
}


/* 고정 헤더 */
.header {
  position: fixed;
  padding: 0 30px;
  left: 240px;
  width: calc(100% - 240px);
  top: 0;
  right: 0;
  height: 60px;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;        
  box-sizing: border-box;
}

.header-title {
  font-size: 16px;
  font-weight: 700;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.header-btn {
  background: none;
  border: none;
  color: #000;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0;
}

/* 실제 콘텐츠가 헤더에 가리지 않도록 마진 추가 */
.page-body {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* 알림 모달 */
.notification-dropdown {
  position: absolute;
  top: 60px;
  right: 13px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 250px;
  z-index: 9999;

  /* 👇 애니메이션 */
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.notification-dropdown.show {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.dropdown-content {
  padding: 15px 10px;
}

.dropdown-title {
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
}

.notification-list {
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0 10px;
  max-height: 350px;
  overflow-y: auto;
}

.notification-item {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: background 0.3s ease;
}

.notification-item:hover {
  background: #f9fafb;
}

.notification-item strong {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 6px;
}

.notification-item p {
  font-size: 14px;
  color: #111827; 
  margin: 0 0 6px;
  word-break: break-word;
}

.notification-item .date {
  font-size: 12px;
  color: #6b7280;
}

.notification-list::-webkit-scrollbar-track {
  background: transparent;
}

.notification-list::-webkit-scrollbar {
  width: 6px; 
}

.notification-list::-webkit-scrollbar-thumb {
  background-color: #cbd5e1; 
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.notification-list::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
.mobile-hamburger{
  display: none;
  padding: 5px 10px;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .dashboard-frame {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 200px;
    transition: left 0.3s ease;
    z-index: 10000;
  }
  .sidebar.show {
    left: 0;
  }

  .main-content {
    padding: 60px 10px 40px;
  }

  .header {
    left: 0;
    width: 100%;
  }

  .mobile-hamburger {
    display: block;
  }

  .sidebar-menu {
    flex-direction: column;
  }

  .sidebar-menu-item {
    padding: 10px 16px;
  }
  .header-title{
    font-size: 13px;
  }
  .header-right a{
    font-size: 10px;
  }
  .header-right :nth-child(2){
    font-size: 10px;
  }
}
  
</style>
