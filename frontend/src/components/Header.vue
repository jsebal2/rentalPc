<template>
  <header class="header" v-bind="$attrs">
    <div class="header-box">
      <router-link to="/" class="logo">RemoteR</router-link>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <template v-if="user_role !== 'Seller'">
          <router-link to="/seller-registration">판매자 등록</router-link>
        </template>
        <template v-if="isLoggedIn">
          <div v-if="user_role === 'Admin'">
            <router-link to="/admin-dashboard">마이페이지</router-link>
          </div>
          <div v-else-if="user_role === 'Seller'">
            <router-link to="/seller-dashboard">마이페이지</router-link>
          </div>
          <div v-else-if="user_role === 'Customer'">
            <router-link to="/custom-dashboard">마이페이지</router-link>
          </div>
          <div v-else-if="user_role === 'pcSeller'">
            <router-link to="/pc-seller-dashboard">마이페이지</router-link>
          </div>
          <a href="#" @click.prevent="$emit('follows')">팔로우</a>
          <a href="#" @click.prevent="handleLogout">로그아웃</a>
          <div class="user_info"></div>
        </template>
        <template v-else>
          <a href="#" @click.prevent="handleLoginClick">로그인</a>
          <router-link to="/signup">
            <button class="signup-btn">회원가입</button>
          </router-link>
        </template>
      </nav>
    </div>

    <!-- 모바일 메뉴 -->
    <div class="mobile-menu" v-if="isMobile">
      <button class="menu-toggle" @click="toggleMenu">⋯</button>
    </div>
    <div v-if="menuOpen" class="dropdown-menu">
      <router-link to="/">Home</router-link>
      <router-link v-if="user_role !== 'Seller'" to="/seller-registration">판매자 등록</router-link>
      <router-link v-if="isLoggedIn" :to="dashboardPath">마이페이지</router-link>
      <a v-if="isLoggedIn" href="#" @click.prevent="$emit('follows')">팔로우</a>
      <a v-if="isLoggedIn" href="#" @click.prevent="handleLogout">로그아웃</a>
      <a v-else href="#" @click.prevent="handleLoginClick">로그인</a>
      <router-link v-if="!isLoggedIn" to="/signup">회원가입</router-link>
    </div>
  </header>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, onUnmounted, inject, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoggedIn = inject('isLoggedIn')
const userName = inject('userName')
const setIsLoggedIn = inject('setIsLoggedIn')
const setUserName = inject('setUserName')
const user_role = inject('userRole')
const token = localStorage.getItem('token')

const emit = defineEmits(['open-login', 'logout', 'follows'])

// 로그인 팝업 열기
const handleLoginClick = () => {
  localStorage.removeItem('token')
  emit('open-login')
}

// 로그아웃
const handleLogout = async () => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/users/logout`, {}, {
      withCredentials: true
    })
    localStorage.removeItem('token')
    localStorage.removeItem('justLoggedIn')
    localStorage.removeItem('user_id')
    setIsLoggedIn(false)
    setUserName('')
    alert('로그아웃 되었습니다.')
  } catch (error) {
    console.error('로그아웃 실패:', error)
    alert('로그아웃 실패했습니다. 다시 시도해주세요.')
  }
}

// 사용자 상태 확인 (선택적 기능)
const userStatuses = ref([])
onMounted(async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/status`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    userStatuses.value = res.data
  } catch (err) {
    console.error(err)
  }
})

// 반응형: 모바일 감지
const isMobile = ref(false)
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// 역할에 따른 마이페이지 경로 계산
const dashboardPath = computed(() => {
  switch (user_role.value) {
    case 'Admin': return '/admin-dashboard'
    case 'Seller': return '/seller-dashboard'
    case 'Customer': return '/custom-dashboard'
    case 'pcSeller': return '/pc-seller-dashboard'
    default: return '/'
  }
})
</script>


<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.header {
  background: transparent;
  color: black;
  display: flex;
  justify-content: center;
}
.header .header-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 1200px;
  max-width: 1200px;
}
.header.scrolled {
  background-color: rgba(255, 255, 255, 0.493);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px)
}

.header span{
  font-size: 14px;
}


.logo {
  font-size: 26px;
  font-weight: bold;
  color: #000;
}

.nav {
  display: flex;
  gap: 15px;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: black;
  font-size: 14px;
}

.signup-btn {
  background-color: #1976f2;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.user_info{
  background-color: rgb(116, 172, 34);
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

/* 모바일 */
@media (max-width: 768px) {
.header .header-box{
  padding: 0px 20px;
}
.header .header-box .logo{
  font-size: 20px;
}
.header .header-box .nav a{
  font-size: 12px;
}
.header-box .nav{
  display: none;
}

.mobile-menu {
  position: relative;
  display: flex;
  align-items: center;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  padding: 10px;
}

.dropdown-menu {
  position: absolute;
  width: 100%;
  top: 60px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0px 0px 20px 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.dropdown-menu a,
.dropdown-menu router-link {
  font-size: 14px;
  color: black;
  text-decoration: none;
}
.dropdown-menu a{
  display: flex;
  justify-content: center;
}
}
</style>
