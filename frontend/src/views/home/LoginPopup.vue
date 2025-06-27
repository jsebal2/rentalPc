<template>
  <div class="login-modal">
    <h2 class="logo-title" @click="router.push('/')">RemoteR</h2>

    <form @submit.prevent="handleLogin" class="login-form">
      <input type="email" v-model="email" placeholder="이메일을 입력하세요" required />
      <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" required />
      <button type="submit" class="login-btn">로그인</button>
    </form>

    <div class="login-options">
      <label><input type="checkbox" /> 로그인 유지</label>
      <a href="#" class="link-text">아이디 / 비밀번호 찾기</a>
    </div>

    <div class="divider">
      <span>또는 SNS 로그인</span>
    </div>

    <div class="sns-login">
      <button class="sns-button kakao">Kakao</button>
      <button class="sns-button naver">Naver</button>
      <button class="sns-button google">Google</button>
    </div>

    <div class="signup-wrap">
      <span>아직 회원이 아니신가요?</span>
      <button @click.prevent="router.push('/signup')" class="signup-btn">회원가입</button>
    </div>
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

    console.log(res);
    

    const token = res.token;
    const name = res.data.user.name;
    

    localStorage.setItem('token', token);
    localStorage.setItem('user_id', res.data.user.user_id);
    console.log(token);
    console.log(res.data);
    

    emit('login-success', name);

    localStorage.setItem('justLoggedIn', 'true');
    window.location.reload();
  } catch (error) {
    alert('로그인 실패: ' + error.response.data.message);
  }
}

</script>

<style src="../../style/home_css/login-popup.css" scoped></style> 