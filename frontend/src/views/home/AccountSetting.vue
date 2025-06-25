<template>
    <div class="account-settings">
      <h1 class="title">내 정보 관리</h1>
  
      <!-- 이메일 -->
      <div class="form-group">
        <label>이메일</label>
        <input type="email" :value="user.email" disabled />
      </div>
  
      <!-- 연동된 SNS -->
      <div class="form-group">
        <label>연동된 SNS</label>
        <input type="text" :value="user.sns ?? '없음'" disabled />
      </div>
  
      <!-- 휴대폰 번호 -->
      <div class="form-group">
        <label for="phone">휴대폰 번호</label>
        <input type="text" id="phone" v-model="form.phone" />
      </div>
  
      <!-- 계좌 정보 -->
      <div class="form-group">
        <label for="account">계좌 정보</label>
        <input type="text" id="account" v-model="form.account" />
      </div>
  
      <!-- 비밀번호 변경 -->
      <div class="form-group password-section">
        <label>비밀번호 변경</label>
        <button @click="showPasswordForm = !showPasswordForm">
          {{ showPasswordForm ? '취소' : '변경' }}
        </button>
        <div v-if="showPasswordForm" class="password-form">
          <input type="password" v-model="form.currentPassword" placeholder="현재 비밀번호" />
          <input type="password" v-model="form.newPassword" placeholder="새 비밀번호" />
          <input type="password" v-model="form.confirmPassword" placeholder="새 비밀번호 확인" />
        </div>
      </div>
  
      <!-- 저장 버튼 -->
      <button class="save-btn" @click="updateInfo">저장</button>
  
      <!-- 회원 탈퇴 -->
      <button class="delete-btn" @click="withdraw">회원 탈퇴</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const user = ref({
    email: 'user@example.com',
    sns: 'Kakao',
  })
  
  const form = ref({
    phone: '010-1234-5678',
    account: '카카오뱅크 3333-12-3456789',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  
  const showPasswordForm = ref(false)
  
  const updateInfo = () => {
    // 여기서 API로 정보 수정 요청
    console.log('수정 정보:', form.value)
    alert('정보가 수정되었습니다.')
  }
  
  const withdraw = () => {
    if (confirm('정말로 회원 탈퇴하시겠습니까?')) {
      // 탈퇴 API 호출
      alert('회원 탈퇴가 완료되었습니다.')
    }
  }
  </script>
  
  <style scoped src="../../style/home_css/account-setting.css"></style>
  