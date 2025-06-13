<template>
  <div class="dashboard-frame">
    <!-- 좌측 사이드바 -->
    <div class="sidebar">
      <router-link class="sidebar-header" to="/">Admin Portal</router-link>
      <div class="sidebar-menu">
        <div v-if="user_role === 'Admin'">

        </div>
        <div v-else-if="user_role === 'Seller'">
          <router-link class="sidebar-menu-item" to="/">home</router-link>
          <router-link class="sidebar-menu-item" to="/seller-dashboard">Dashboard</router-link>
          <router-link class="sidebar-menu-item" to="/pc-status">PC 상태 관리</router-link>
          <router-link class="sidebar-menu-item" to="/customer-management">고객 관리</router-link>
          <router-link class="sidebar-menu-item" to="/sales-management">요금 및 결제 관리</router-link>
          <router-link class="sidebar-menu-item" to="#">설정</router-link>
          <router-link class="sidebar-menu-item" to="/notice-support">고객 및 공지 관리</router-link>
        </div>
        <div v-else-if="user_role === 'Customer'">
          <router-link class="sidebar-menu-item" to="/">home</router-link>
          <router-link class="sidebar-menu-item" to="/custom-dashboard">Dashboard</router-link>
          <router-link class="sidebar-menu-item" to="/custom-moniter">monitering</router-link>
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
            <span class="header-icon">💬</span>
            메세지
          </router-link>
          <button class="header-btn">
            <span class="header-icon">🔔</span>
            알림
          </button>
          <button class="header-btn">
            <span class="header-icon">👤</span>
            내정보
          </button>
        </div>
      </div>

      <!-- 실제 페이지 콘텐츠 -->
      <div class="page-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
const token = localStorage.getItem('token');
const userStatuses = ref([]);
const user_role = ref();

const props = defineProps({
  headerTitle: {
    type: String,
    default: 'PC 상태 관리',
  },
});


onMounted(async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/users/status',{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    userStatuses.value = res.data;
    user_role.value = userStatuses.value[0].role;
  } catch (err) {
    console.error(err);
  }
});
</script>


<style scoped>
/* 전체 프레임 */
.dashboard-frame {
  width: calc(100% - 200px);
  margin-left: 200px;
  display: flex;
}

/* 사이드바 */
.sidebar {
  width: 199px;
  background: #fff;
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
  background: #00003e;
  height: 60px;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
}
.sidebar-menu {
  margin-top: 40px;
  padding: 0 16px;
}
.sidebar-menu-item:nth-child(1){
  border-top: 1px solid;
}
.sidebar-menu-item:nth-child(-n + 7){
  border-bottom: 1px solid;
}
.sidebar-menu-item {
  color: #1d77ff;
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
  display: block;
  text-decoration: none;
}
.sidebar-menu-item.router-link-exact-active {
  font-weight: bold;
  color: #00003e;
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
  left: 200px;
  width: calc(100% - 200px);
  top: 0;
  right: 0;
  height: 60px;
  background: #00003e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;         /* ✅ 다른 요소보다 위에 표시 */
  box-sizing: border-box; /* ✅ 내부 패딩 포함 계산 */
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
  color: white;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
}

/* 실제 콘텐츠가 헤더에 가리지 않도록 마진 추가 */
.page-body {
  box-sizing: border-box;
}
</style>

<!-- <style src="../style/buyer_css/pc-status.css"></style> -->
