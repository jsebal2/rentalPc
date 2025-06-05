<script setup>
import { ref, onMounted, provide } from 'vue'
import axios from 'axios'
// 전역 로그인 상태
const isLoggedIn = ref(false)
const userName = ref('')

// provide로 하위 컴포넌트에서 inject 가능하게 함
provide('isLoggedIn', isLoggedIn)
provide('userName', userName)
provide('setIsLoggedIn', val => isLoggedIn.value = val)
provide('setUserName', val => userName.value = val)

onMounted(async () => {
  try {
    const res = await axios.post(import.meta.env.VITE_API_URL + '/users/refresh', {}, {
      withCredentials: true
    });

    const newToken = res.data.accessToken;
    localStorage.setItem('token', newToken);

    // ✅ 사용자 정보는 별도로 요청
    const profileRes = await axios.get(import.meta.env.VITE_API_URL + '/users/profile', {
      headers: { Authorization: `Bearer ${newToken}` }
    });

    userName.value = profileRes.data.name;
    isLoggedIn.value = true;

    console.log('✅ 토큰 갱신 성공:', newToken)
  } catch (err) {
    console.warn('⚠️ 토큰 갱신 실패:', err?.response?.data?.message || err.message)
    localStorage.removeItem('token');
    isLoggedIn.value = false;
    userName.value = '';
  }
});

</script>

<template>
  <router-view />
</template>

<style scoped>
/* 필요 시 글로벌 스타일 정의 */
</style>
