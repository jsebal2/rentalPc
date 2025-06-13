<template>
  <div class="container">
    <!-- Header -->
    <Header
      :isLoggedIn="isLoggedIn"
      :userName="userName"
      @open-login="showLoginPopup = true"
      @logout="handleLogout"
    />

    <!-- Hero Section -->
    <section class="hero">
      <div class="left-box">
        <h2>나에게 딱 맞는 PC 찾기</h2>
        <div class="ad-box"></div>
        <button class="get-started-btn">Get Started</button>
      </div>
      <div class="right-image"></div>
    </section>

    <!-- Info Section -->
    <section class="info">
      <h2>What is RemoteR</h2>
      <div class="card-container">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </section>

    <!-- Login Popup Modal -->
    <div v-if="showLoginPopup" class="modal-overlay" @click.self="showLoginPopup = false">
      <LoginPopup @login-success="handleLoginSuccess" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import LoginPopup from './LoginPopup.vue';
import Header from '../../components/Header.vue';

const showLoginPopup = ref(false);
const isLoggedIn = inject('isLoggedIn');
const userName = inject('userName');
const setIsLoggedIn = inject('setIsLoggedIn');
const setUserName = inject('setUserName');

function handleKeydown(e) {
  if (e.key === 'Escape') showLoginPopup.value = false;
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

function handleLoginSuccess(name) {
  setIsLoggedIn(true);
  setUserName(name);
  showLoginPopup.value = false;
}

function handleLogout() {
  setIsLoggedIn(false);
  setUserName('');
}

</script>

<style src="../../style/home_css/main-page.css" scoped></style>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
</style> 