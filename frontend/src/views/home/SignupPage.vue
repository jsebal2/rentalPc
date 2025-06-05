<template>
    <div class="signup-container">
      <h2>회원가입</h2>
  
      <form @submit.prevent="handleSignup">
        <input type="text" v-model="name" placeholder="이름을 입력하세요" required />
        <input type="email" v-model="email" placeholder="이메일을 입력하세요" required />
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" required />
  
        <button type="submit">회원가입</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const handleSignup = async () => {
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + '/users/register', {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      console.log(res)
      router.push('/')
      // 필요 시 라우터 이동 또는 로그인 창 열기
    } catch (err) {
      console.log(err)
      alert('회원가입 실패')
      console.error(err)
    }
  }
  </script>
  
  <style src="../../style/home_css/signup-page.css"></style>
  