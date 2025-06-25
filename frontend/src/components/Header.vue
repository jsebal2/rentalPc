<template>
  <header class="header" v-bind="$attrs">
    <div class="header-box">
      <router-link to="/" class="logo">RemoteR</router-link>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/seller-registration">판매자 등록</router-link>
        <template v-if="isLoggedIn">
          <div>{{ userName }}님 환영합니다</div>
          <div v-if="user_role === 'Admin'">
            <router-link to="/admin-dashboard">마이페이지</router-link>
          </div>
          <div v-else-if="user_role === 'Seller'">
            <router-link to="/seller-dashboard">마이페이지</router-link>
          </div>
          <div v-else-if="user_role === 'Customer'">
            <router-link to="/custom-dashboard">마이페이지</router-link>
          </div>
          <a href="#" @click.prevent="$emit('follows')">팔로우</a>
          <a href="#" @click.prevent="handleLogout">로그아웃</a>
        </template>
        <template v-else>
          <a href="#" @click.prevent="handleLoginClick">로그인</a>
          <router-link to="/signup">
            <button class="signup-btn">회원가입</button>
          </router-link>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import axios from 'axios'
import {ref,onMounted,inject } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = inject('isLoggedIn') // ref
const userName = inject('userName')
const setIsLoggedIn = inject('setIsLoggedIn')
const setUserName = inject('setUserName')
const token = localStorage.getItem('token');
const userStatuses = ref([]);
const user_role = ref();

const emit = defineEmits(['open-login', 'logout'])


const handleLoginClick = () => {
  localStorage.removeItem('token')
  emit('open-login')
}


const handleLogout = async () => {
  try {
    await axios.post(import.meta.env.VITE_API_URL + '/users/logout', {}, {
      withCredentials: true
    })

    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setUserName('')
    alert('로그아웃 되었습니다.')
  } catch (error) {
    console.error('로그아웃 실패:', error)
    alert('로그아웃 실패했습니다. 다시 시도해주세요.')
  }
}

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

const openSellerRegistrationPopup = () => {
  emit('open-seller-registration')
}

</script>

<style scoped>
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
</style>
