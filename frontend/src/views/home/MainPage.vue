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

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-banner">
        <div class="text-area">
          <h1>합리적인 가격으로<br>최고의 원격 PC를 대여</h1>
          <router-link class="sidebar-header" to="/pc-list">대여 상품 보러가기</router-link>
        </div>
        <div class="image-area">
          <img src="../../img/Hevo.gif" alt="원격 PC 이미지" />
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info">
      <div class="new-title">인기 등록 상품</div>
      <div class="card-grid">
        <a class="home-card" href="/product-detail/Ryzen%205600G">
          <img src="/img/homepc8.png" alt="원격 PC">
          <div class="title">Ryzen 5600G</div>
          <div class="price">월 79,000원부터</div>
        </a>
        <a class="home-card" href="/product-detail/Ryzen%205700G">
          <img src="/img/homepc5.png" alt="원격 PC">
          <div class="title">Ryzen 5700G</div>
          <div class="price">월 79,000원부터</div>
        </a>
        <a class="home-card" href="/product-detail/Ryzen%205700X">
          <img src="/img/homepc3.png" alt="원격 PC">
          <div class="title">Ryzen 5700X</div>
          <div class="price">월 79,000원부터</div>
        </a>
        <a class="home-card" href="/product-detail/Ryzen%205500GT">
          <img src="/img/homepc7.png" alt="원격 PC">
          <div class="title">Ryzen 5500GT</div>
          <div class="price">월 79,000원부터</div>
        </a>
      </div>

      <div class="new-rental">
        <div class="new-title">신규 등록 상품</div>
        <div class="card-grid">
          <div class="home-card">
            <img src="/img/homepc4.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="/img/homepc1.png" alt="원격 PC">
            <div class="badge">NOW</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="/img/homepc6.png" alt="원격 PC">
            <div class="badge">NEW</div>
            <div class="price">월 79,000원부터</div>
          </div>
          <div class="home-card">
            <img src="/img/homepc8.png" alt="원격 PC">
            <div class="title">원격 PC</div>
            <div class="price">월 79,000원부터</div>
          </div>
        </div>
      </div>
    </section>

    <!-- process Section -->
    <div class="sales-wrapper">
      <div class="sellercon">
        <h2 class="sales-title">PC 판매 상품</h2>
        <div class="contact-info">
          <span>P.H: 010-1234-5678</span> | 
          <span>Kakao: blazePC</span> | 
          <span>상담시간: 10:00 ~ 18:00</span>
        </div>
        <div class="floating-buttons">
          <a href="https://pf.kakao.com/_your_kakao_id" target="_blank" class="btn kakao">카톡문의</a>
          <a href="tel:01012345678" class="btn call">전화하기</a>
        </div>
        <section class="process">
          <div class="process-box">
            <div class="process-title">인기 등록 상품</div>
            <div class="process-steps">
              <a
                class="step-card"
                v-for="(item, index) in products"
                :key="index"
                :href="`/computer-sales/`"
                @mouseenter="hoveredIndex = index"
                @mouseleave="hoveredIndex = null"
                @mousemove="updateTooltipPosition"
              >
                <div class="pc-title">{{ item.title }}</div>
                <div class="pc-price">{{ item.price }}</div>
                <div class="pc-spec">{{ item.spec }}</div>
              </a>
            </div>
          </div>
        </section>
        <div
          v-if="hoveredIndex !== null"
          class="tooltip"
          :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }"
        >
          {{ products[hoveredIndex].description }}
        </div>
        <section class="process" id="new_process">
          <div class="process-box">
            <div class="process-title">신규 등록 상품</div>
            <div class="process-steps">
              <div class="step-card">
                <div class="pc-title">헌터 프로 PC</div>
                <div class="pc-price">₩1,350,000</div>
                <div class="pc-spec">Intel i5 / 16GB RAM / RTX 4060</div>
              </div>
              <div class="step-card">
                <div class="pc-title">노마드 스튜디오 PC</div>
                <div class="pc-price">₩2,200,000</div>
                <div class="pc-spec">Ryzen 9 / 64GB RAM / RTX 4080</div>
              </div>
              <div class="step-card">
                <div class="pc-title">제로 노트북형 PC</div>
                <div class="pc-price">₩720,000</div>
                <div class="pc-spec">Intel i5 / 16GB RAM / SSD 512GB</div>
              </div>
              <div class="step-card">
                <div class="pc-title">큐브 컴팩트 PC</div>
                <div class="pc-price">₩460,000</div>
                <div class="pc-spec">AMD Ryzen 3 / 8GB RAM / 256GB SSD</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

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

    <footer class="footer">
      <div class="footer-container">
        
        <!-- 로고 및 소개 -->
        <div class="footer-section">
          <h2 class="footer-logo">RemoteR</h2>
          <p class="footer-description">
            합리적인 가격으로 최고의 원격 PC를 제공합니다.<br>
            언제 어디서나, 안정적인 서비스를 경험하세요.
          </p>
        </div>

        <!-- 링크 섹션 -->
        <div class="footer-section">
          <h3 class="footer-heading">바로가기</h3>
          <ul class="footer-links">
            <li><a href="#">회사 소개</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">자주 묻는 질문</a></li>
          </ul>
        </div>

        <!-- 고객지원 및 SNS -->
        <div class="footer-section">
          <h3 class="footer-heading">고객지원</h3>
          <p class="footer-text">평일 09:00 ~ 18:00</p>
          <p class="footer-text">Email: support@remoter.kr</p>
          <div class="footer-sns">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>
      <div class="footer-copy">© 2025 RemoteR. All rights reserved.</div>
    </footer>


    <!-- Login Popup Modal -->
    <div v-if="showLoginPopup" class="modal-overlay" @click.self="closePopup">
      <LoginPopup @login-success="handleLoginSuccess" />
    </div>
  </div>

  <!-- follow모달창 -->
  <FollowModal v-if="showFollowModal" @close="showFollowModal = false" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import LoginPopup from './LoginPopup.vue';
import Header from '../../components/Header.vue';
import FollowModal from '../../components/FollowModal.vue'

const showLoginPopup = ref(false);

// Injected global state
const isLoggedIn = inject('isLoggedIn');
const userName = inject('userName');
const setIsLoggedIn = inject('setIsLoggedIn');
const setUserName = inject('setUserName');
const userRole = inject('userRole');

// follow 모달창
const showFollowModal = ref(false)

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

// pc판매 호버
const tooltipX = ref(0);
const tooltipY = ref(0);

const updateTooltipPosition = (e) => {
  tooltipX.value = e.clientX + 12;
  tooltipY.value = e.clientY + 15;
};

const hoveredIndex = ref(null)

const products = ref([
  {
    title: '블레이즈 게이밍 PC',
    price: '₩1,250,000',
    spec: 'Intel i7 / 16GB RAM / RTX 3060',
    description: '고사양 게이밍을 위한 최적의 구성'
  },
  {
    title: '스톰 오피스 PC',
    price: '₩490,000',
    spec: 'Intel i3 / 8GB RAM / SSD 256GB',
    description: '사무용, 가정용으로 가성비 최고의 PC'
  },
  {
    title: '레이서 하이엔드 PC',
    price: '₩2,500,000',
    spec: 'Intel i9 / 32GB RAM / RTX 4080',
    description: '영상 편집 및 고사양 게임에 적합한 하이엔드 PC'
  },
  {
    title: '에코 미니 PC',
    price: '₩350,000',
    spec: 'Intel Celeron / 4GB RAM / SSD 128GB',
    description: '웹서핑, 문서작업에 최적화된 초소형 PC'
  },
  {
    title: '노마드 디자이너 PC',
    price: '₩1,480,000',
    spec: 'Ryzen 7 / 32GB RAM / RTX 3070',
    description: '그래픽 작업에 최적화된 디자이너용 PC'
  },
  {
    title: '큐브 학습용 PC',
    price: '₩420,000',
    spec: 'Intel Pentium / 8GB RAM / SSD 256GB',
    description: '학생을 위한 온라인 수업 및 문서 작업용 PC'
  },
  {
    title: '프로 스트리머 PC',
    price: '₩1,980,000',
    spec: 'Ryzen 9 / 32GB RAM / RTX 4070 Ti',
    description: '방송 송출 및 고화질 게임 플레이에 최적화'
  },
  {
    title: '제로 서버용 PC',
    price: '₩3,300,000',
    spec: 'Intel Xeon / 64GB RAM / 2TB NVMe SSD',
    description: '서버 및 데이터 처리용 전문가 시스템'
  }
]);

onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.scrollTo(0, 0);
  
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('scroll', handleScroll);
});

// Login and logout handlers
const handleLoginSuccess = ({name, role}) => {
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
