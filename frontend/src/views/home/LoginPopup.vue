<template>
  <div class="popup-container">
    <h2 class="title">RemoteR</h2>

    <form @submit.prevent="handleLogin">
  <input
    type="email"
    placeholder="이메일을 입력해주세요"
    class="input-box"
    v-model="email"
    required
  />
  <input
    type="password"
    placeholder="비밀번호를 입력해주세요"
    class="input-box"
    v-model="password"
    required
  />

  <button type="submit" class="login-btn">로그인</button>
</form>


    <div class="login-options">
      <label><input type="checkbox" /> 로그인 유지</label>
      <a href="#" class="find-link">아이디/비밀번호 찾기</a>
    </div>

    <div class="divider">
      <span>SNS 간편 로그인</span>
    </div>

    <div class="sns-icons">
      <div class="circle yellow"></div>
      <div class="circle green"></div>
      <div class="circle white"></div>
    </div>

    <button class="signup-link" @click.prevent="router.push('/signup')">회원가입</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const emit = defineEmits(['login-success', 'open-login']);
const router = useRouter();

// 입력값 저장
const email = ref('');
const password = ref('');

function resetAuthState() {
  localStorage.removeItem('token');
  console.log('토큰 제거');
}

const handleLogin = async () => {
  resetAuthState();

  try {
    const res = await axios.post(import.meta.env.VITE_API_URL + '/users/login', {
      email : email.value,
      password : password.value,
    }, { withCredentials : true })

    const token = res.data.token;
    const name = res.data.user.name;

    localStorage.setItem('token', token);
    localStorage.setItem('user_id', res.data.user.user_id);
    console.log(token);
    console.log(res.data);
    

    emit('login-success', name);
  } catch (error) {
    alert('로그인 실패: ' + error.response.data.message);
  }
}

// axios.post(import.meta.env.VITE_API_URL + '/users/refresh', {}, {
//   withCredentials : true,
// }).then(res => {
//   const newToken = res.data.token;
//   localStorage.setItem('token', newToken);
//   console.log(newToken);
// })
// .catch(err => {
//   localStorage.removeItem('token');
//   emit('open-login');
// })
</script>

<style src="../../style/home_css/login-popup.css"></style> 