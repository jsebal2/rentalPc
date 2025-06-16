<template>
  <div class="container">
    <!-- Header -->
    <Header
      :class="{ scrolled: isScrolled }"
      :isLoggedIn="isLoggedIn"
      :userName="userName"
      @open-login="showLoginPopup = true"
      @logout="handleLogout"
    />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-banner">
        <div class="text-area">
          <h1>합리적인 가격으로<br>최고인 원격 PC를 대여</h1>
          <a href="#" class="cta-button">대여 상품 보러가기</a>
        </div>
        <div class="image-area">
          <img src="../../img/Hevo.gif" alt="원격 PC 이미지" />
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info">
      <div class="Popular-rental">
        <div class="Popular-title">지금 가장 많이 대여 중인 PC</div>
        <div class="card-grid">
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
        </div>
      </div>

      <div class="new-rental">
        <div class="new-title">신규 등록 상품</div>
        <div class="card-grid">
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="badge">NOW</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="badge">NEW</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="../../img/rentalpc.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
        </div>
      </div>
    </section>

    <!-- process Section -->
    <section class="process">
      <div class="process-box">
        <div class="process-title">렌탈은 이렇게 진행돼요</div>
        <div class="process-steps">
          <div class="step-card">
            <img src="../../img/selection.png" alt="선택 아이콘" />
            <div class="step-label">1. 선택</div>
          </div>
          <div class="step-card">
            <img src="../../img/credit-card.png" alt="결제 아이콘" />
            <div class="step-label">2. 결제</div>
          </div>
          <div class="step-card">
            <img src="../../img/remote-access.png" alt="접속 아이콘" />
            <div class="step-label">3. 접속</div>
          </div>
          <div class="step-card">
            <img src="../../img/back-arrow.png" alt="반납 아이콘" />
            <div class="step-label">4. 반납</div>
          </div>
        </div>
      </div>
    </section>

    <!-- review Section -->
    <section class="review-section">
      <div class="review-box">
        <h2 class="review-title">Reviews</h2>
        <div class="review-filter">
          <button class="active">All</button>
          <button>5 Stars</button>
          <button>4 Stars</button>
          <button>3 Stars or less</button>
        </div>
  
        <div class="review-grid">
          <div class="review-card">
            <div class="review-header">
              <div class="avatar"></div>
              <div class="review-info">
                <div class="name">ChoiSubin</div>
                <div class="stars">★★★★★</div>
                <div class="date">Aug 23, 2023</div>
              </div>
            </div>
            <p class="review-text">빠르고 쉽게 구매도 되고 아주 좋네요 추천합니다.</p>
          </div>
  
          <div class="review-card">
            <div class="review-header">
              <div class="avatar"></div>
              <div class="review-info">
                <div class="name">유진</div>
                <div class="stars">★★★★★</div>
                <div class="date">Aug 23, 2023</div>
              </div>
            </div>
            <p class="review-text">컴퓨터를 휠밋 해서 사진지, 직원이었다; 잘 사용하고 구배겠습니다</p>
          </div>
  
          <div class="review-card">
            <div class="review-header">
              <div class="avatar"></div>
              <div class="review-info">
                <div class="name">eastblue</div>
                <div class="stars">★★★★★</div>
                <div class="date">Aug 22, 2023</div>
              </div>
            </div>
            <p class="review-text">직진자인 UI앗 베트 속도도 베르 사용해서 엄지지! 하는데 아주 괜하게 사용할 수 있었습니다.</p>
          </div>
  
          <div class="review-card">
            <div class="review-header">
              <div class="avatar"></div>
              <div class="review-info">
                <div class="name">Byeongzeong Han</div>
                <div class="stars">★★★★★</div>
                <div class="date">Aug 23, 2023</div>
              </div>
            </div>
            <p class="review-text">어려운 언어 뵌뷰티 잘 사용하고 있습니다! 앞으로도 잘 부탁드립니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Login Popup Modal -->
    <div v-if="showLoginPopup" class="modal-overlay" @click.self="closePopup">
      <LoginPopup @login-success="handleLoginSuccess" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import LoginPopup from './LoginPopup.vue';
import Header from '../../components/Header.vue';

const showLoginPopup = ref(false);

// Injected global state
const isLoggedIn = inject('isLoggedIn');
const userName = inject('userName');
const setIsLoggedIn = inject('setIsLoggedIn');
const setUserName = inject('setUserName');

// 스크롤 감지
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Modal close shortcut
const closePopup = () => (showLoginPopup.value = false);
const handleKeydown = (e) => {
  if (e.key === 'Escape') closePopup();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('scroll', handleScroll);
});

// Login and logout handlers
const handleLoginSuccess = (name) => {
  setIsLoggedIn(true);
  setUserName(name);
  closePopup();
};

const handleLogout = () => {
  setIsLoggedIn(false);
  setUserName('');
};
</script>

<style src="../../style/home_css/main-page.css" scoped></style>
<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
</style>
