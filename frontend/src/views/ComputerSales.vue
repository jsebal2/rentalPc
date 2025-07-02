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
          <h1 class="title">{{ products.cpu }}</h1>
          <div class="price">{{ (products?.price ?? 0).toLocaleString() }}원</div>

          <ul class="spec-list">
            <li><strong>별점</strong> ★★★★★ (50개)</li>
            <li><strong>평점</strong> ★★★★☆</li>
            <li><strong>조회수</strong> 500</li>
            <li><strong>제조사</strong>{{pcinfolist.business_name}}</li>
          </ul>

          <div class="service">
            <label>부품 추가</label>
            <label>
              <input type="checkbox" v-model="addCase" />
              케이스 미니 신품 추가 - 12,000원
            </label>
            <label>
              <input type="checkbox" v-model="addCooler" />
              쿨러 공냉 타워 쿨러 추가 - 20,000원
            </label>
            <label>
              <input type="checkbox" v-model="addNvme" />
              nvme 512g 추가 - 15,000원
            </label>
          </div>

          <div class="detailInfo">
            <div class="detailContent">
                <p>cpu:{{products.cpu}} / ram:{{products.ram}} / ssd:{{products.ssd}}</p>
                <p class="pmemo">{{ products.memo }}</p>
            </div>
            <div class="detailPrice">{{ totalPrice.toLocaleString() }}원</div>
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
import { ref, onMounted, onUnmounted, inject, computed  } from 'vue';
import { useRoute } from 'vue-router';
import LoginPopup from './home/LoginPopup.vue';
import Header from '../components/Header.vue';
import FollowModal from '../components/FollowModal.vue';
import axios from 'axios';

const showLoginPopup = ref(false);
const showFollowModal = ref(false);

const isLoggedIn = inject('isLoggedIn');
const userName = inject('userName');
const setIsLoggedIn = inject('setIsLoggedIn');
const setUserName = inject('setUserName');

const addCase = ref(false);
const addCooler = ref(false);
const addNvme = ref(false);

const addPrices = {
  addCase: 12000,
  addCooler: 20000,
  addNvme: 15000
};

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

const totalPrice = computed(() => {
  let basePrice = products.value?.price ?? 0;
  if (addCase.value) basePrice += addPrices.addCase;
  if (addCooler.value) basePrice += addPrices.addCooler;
  if (addNvme.value) basePrice += addPrices.addNvme;
  return basePrice;
});

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const products = ref([])
const pcinfolist = ref([])
const route = useRoute();

// pc판매 데이터 가져오기
async function pcIdList() {
  try {
    const pc_id = route.params.id;
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/salespc/youngpcIdlist/${pc_id}`);
    products.value = res.data
    console.log(products.value);
    
  } catch (error) {
    console.error('상품 불러오기 실패:', error)
  }
}

async function pcinfo() {
  try {
    const pc_id = route.params.id;
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/salespc/sellerProfile/`);
    pcinfolist.value = res.data
    console.log(pcinfolist.value);
    
  } catch (error) {
    console.error('상품 불러오기 실패:', error)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('scroll', handleScroll);

  pcIdList()
  pcinfo()
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

<style src="../style//computer-sales.css" scoped> </style>