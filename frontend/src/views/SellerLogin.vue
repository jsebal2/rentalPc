<template>
  <div class="login-wrapper">
    <div class="login-box">
      <h2>관리자 로그인</h2>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">이메일</label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            placeholder="admin@example.com"
          />
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input
            id="password"
            type="password"
            v-model="password"
            required
            placeholder="비밀번호 입력"
          />
        </div>

        <button type="submit" class="login-btn" :disabled="isLoading">{{ isLoading ? '로그인 중...' : '로그인' }}</button>
      </form>

      <div class="form-error" v-if="errorMsg">{{ errorMsg }}</div>


      <div class="helper">
        <a href="#" class="link">비밀번호를 잊으셨나요?</a>
      </div>

      <!-- ✅ 회원가입 버튼 추가 -->
      <button class="signup-btn" @click="goToRegister">회원가입</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import '../style/seller-login.css';

const email = ref('');
const password = ref('');
const router = useRouter();
const errorMsg = ref('');
const isLoading = ref(false);

async function handleLogin() {
  errorMsg.value = '';
  isLoading.value = true;

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
      email: email.value,
      password: password.value
    });

    const { token, user } = response.data;

    // ✅ 토큰 저장 (localStorage 등)
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', user.role); // 권한 분기 시 사용

    // ✅ 관리자 확인 후 대시보드 이동
    if (user.role === 'ADMIN') {
      router.push('/admin-dashboard');
    } else {
      errorMsg.value = '관리자 계정만 로그인할 수 있습니다.';
    }
  } catch (error: any) {
    console.error('로그인 실패:', error);
    errorMsg.value = error.response?.data?.error || '로그인 중 오류가 발생했습니다.';
  } finally {
    isLoading.value = false;
  }
}

function goToRegister() {
  router.push('/register'); // 원하는 회원가입 경로로 이동
}
</script>