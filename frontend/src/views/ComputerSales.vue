<template>
  <div class="container">
    <!-- Header -->
    <Header
      :class="{ scrolled: isScrolled }"
      :isLoggedIn="isLoggedIn"
      :userName="userName"
      @open-login="showLoginPopup = true"
      @logout="handleLogout"
      @follows="showFollowModal = true"
    />

    <!-- Product Detail Section -->
    <div class="product-detail-container">
      <div class="product-detail">
        <!-- Left: Image Section -->
        <div class="image-section">
          <img class="main-image" :src="selectedImage" alt="이미지" />
          <div class="thumbnail-list">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              class="thumbnail"
              :class="{ active: img === selectedImage }"
              @click="selectedImage = img"
            />
          </div>
        </div>

        <!-- Right: Info Section -->
        <div class="info-section">
          <h1 class="title">헌터 프로 PC</h1>
          <div class="price">849,000원</div>

          <ul class="spec-list">
            <li><strong>별점</strong> ★★★★★ (50개)</li>
            <li><strong>평점</strong> ★★★★☆</li>
            <li><strong>조회수</strong> 500</li>
            <li><strong>비이비</strong> 뚜툴''</li>
          </ul>

          <div class="service">
            <label for="service-title">서비스</label>
            <select id="service-option" v-model="selectedService">
              <option disabled value="">서비스 선택</option>
              <option>기본 서비스</option>
              <option>프리미엄 서비스</option>
            </select>
          </div>

          <div class="detailInfo">
            <div class="detailContent">
                <p>Intel i7 / 16GB RAM / RTX 3060</p>
                <p>고사양 게이밍을 위한 최적의 구성</p>
            </div>
            <div class="detailPrice">849,000원</div>
          </div>
          <div class="action-buttons">
            <button class="cart-btn">장바구니</button>
            <button class="buy-btn">구매하기</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Login Modal -->
    <div v-if="showLoginPopup" class="modal-overlay" @click.self="closePopup">
      <LoginPopup @login-success="handleLoginSuccess" />
    </div>
  </div>

  <!-- Follow Modal -->
  <FollowModal v-if="showFollowModal" @close="showFollowModal = false" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import LoginPopup from './home/LoginPopup.vue';
import Header from '../components/Header.vue';
import FollowModal from '../components/FollowModal.vue';

const showLoginPopup = ref(false);
const showFollowModal = ref(false);

const isLoggedIn = inject('isLoggedIn');
const userName = inject('userName');
const setIsLoggedIn = inject('setIsLoggedIn');
const setUserName = inject('setUserName');

const handleLoginSuccess = ({ name, role }) => {
  setIsLoggedIn(true);
  setUserName(name);
  closePopup();
};

const handleLogout = () => {
  setIsLoggedIn(false);
  setUserName('');
};

const closePopup = () => {
  showLoginPopup.value = false;
};

const handleKeydown = (e) => {
  if (e.key === 'Escape') closePopup();
};

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('scroll', handleScroll);
});

// Product detail logic
const images = [
  '/img/image-Photoroom.png',
  '/img/image-Photoroom1.png',
  '/img/image-Photoroom2.png',

];
const selectedImage = ref(images[0]);
const selectedService = ref('');
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.product-detail-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.product-detail {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.image-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image {
  width: 400px;
  height: 400px;
  border-radius: 12px;
  object-fit: contain;
}

.thumbnail-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
}

.thumbnail {
  width: 70px;
  height: 65px;
  border-radius: 6px;
  padding: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s, transform 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.thumbnail:hover {
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: #000;
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #222;
}

.price {
  font-size: 30px;
  font-weight: bold;
  color: #111;
}

.spec-list {
  font-size: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 1.8;
  width: 100%;
}

.spec-list li {
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #eee;
  padding: 4px 0;
}

.spec-list strong {
  width: 80px;
  font-weight: 600;
  color: #444;
  display: inline-block;
}

.service {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 12px;
}

.service label {
  font-size: 14px;
  color: #333;
  min-width: 70px;
  font-weight: 500;
}

.service select {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fafafa;
  transition: border-color 0.2s;
}

.service select:focus {
  border-color: #888;
  outline: none;
}

.detailInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.detailInfo p{
    display: flex;
    justify-content: start;
    font-size: 15px;
    font-weight: 700;
}

.detailInfo p:nth-child(1){
    margin-bottom: 5px;
}

.detailInfo .detailPrice{
    font-size: 22px;
    font-weight: 700;
}

.model-info {
  font-size: 13px;
  color: #666;
  margin-top: 10px;
}

.final-price {
  font-size: 20px;
  font-weight: bold;
  margin-top: 6px;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
}

.cart-btn,
.buy-btn {
  flex: 1;
  padding: 14px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.cart-btn {
  background: #fff;
  border: 1px solid #000;
  color: #000;
}

.cart-btn:hover {
  background: #f0f0f0;
}

.buy-btn {
  background: #000;
  color: #fff;
  border: none;
}

.buy-btn:hover {
  background: #222;
}
</style>