<template>
  <div class="dashboard-frame">
    <!-- 좌측 사이드바 -->
    <div class="sidebar">
      <router-link class="sidebar-header" to="/">RemoteR</router-link>
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
          <router-link class="sidebar-menu-item" to="/custom-moniter">모니터링</router-link>
          <router-link class="sidebar-menu-item" to="/custom-notice">공지사항</router-link>
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
          <button class="header-btn">
            <span class="header-icon"></span>
            알림
          </button>
          <button class="header-btn">
            <span class="header-icon"></span>
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
}

/* 실제 콘텐츠가 헤더에 가리지 않도록 마진 추가 */
.page-body {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

<!-- <style src="../style/buyer_css/pc-status.css"></style> -->
