<template>
    <div class="product-detail-page">
        <Header />
      <!-- 상단 상세 정보 -->
      <div class="product-header">
        <div class="product-image">제품 이미지</div>
        <div class="product-summary">
          <div class="product-title">{{ product?.title }}</div>
          <div class="product-info-box">{{ product?.info }}</div>
        </div>
      </div>
  
      <!-- 게시판 리스트 -->
      <table class="post-list">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>조회</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in postsWithAuthor" :key="index">
            <td>{{ post.no }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.userName }}</td>
            <td>{{ post.views }}</td>
            <td>{{ post.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import Header from '../../components/Header.vue';
import axios from 'axios';

// 예시 상품 데이터


const route = useRoute();
const author = ref<{user_id : number; name : string}[]>([]);
const product = ref<{ title: string; image: string; info: string } | null>(null);

// 게시판 예시 데이터
const posts = ref([
  { no: 1, title: '이 제품 어떤가요?', userName: 'user1', views: 120, date: '2024-06-01' },
  { no: 2, title: '배송 빠르네요', userName: 'user2', views: 80, date: '2024-06-03' },
]);

const postsWithAuthor = computed(() => {
  return posts.value.map(post => {
    const user = author.value.find(a => a.name === post.userName);
    return {
      ...post,
      name: user?.name || '알 수 없음'
    };
  });
});


onMounted(async () => {
  const rawTitle = route.params.title as string;
  const normalized = rawTitle.toUpperCase().replace(/\s/g, '');

  product.value = allProducts.find(p =>
    p.title.toUpperCase().replace(/\s/g, '') === normalized
  ) ?? null;

  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/product-detail/${encodeURIComponent(rawTitle)}/authors`
    );
    author.value = data;
    console.log(author.value);
  } catch (error) {
    console.error('제품 정보를 불러오는데 실패했습니다.', error);
  }
});

console.log(route.params.title);
const normalized = route.params.title.toUpperCase().replace(/\s/g, '');
console.log(normalized);


const allProducts = [
  { title: 'i5-4650', image: 'intel-i5.png', info: '4코어 4스레드 / 3.5GHz / HD 4600' },
  { title: 'E52660', image: 'intel-e5.png', info: '8코어 16스레드 / 2.2GHz / 서버용' },
  { title: 'Ryzen 2200G', image: 'ryzen-2200g.png', info: '4코어 4스레드 / 3.5GHz / Vega 8' },
  { title: 'Ryzen 4350G', image: 'ryzen-4350g.png', info: '4코어 8스레드 / 3.8GHz / Vega 6' },
  { title: 'Ryzen 4600G', image: 'ryzen-4600g.png', info: '6코어 12스레드 / 3.7GHz / Vega 7' },
  { title: 'Ryzen 4650G', image: 'ryzen-4650g.png', info: '6코어 12스레드 / 3.7GHz / Vega 7 PRO' },
  { title: 'Ryzen 5500GT', image: 'ryzen-5500gt.png', info: '6코어 12스레드 / 3.6GHz / 내장그래픽 없음' },
  { title: 'Ryzen 5600G', image: 'ryzen-5600g.png', info: '6코어 12스레드 / 3.9GHz / Vega 7' },
  { title: 'Ryzen 5700G', image: 'ryzen-5700g.png', info: '8코어 16스레드 / 3.8GHz / Vega 8' },
  { title: 'Ryzen 8700G', image: 'ryzen-8700g.png', info: '8코어 16스레드 / 4.2GHz / Radeon 780M' },
  { title: 'Ryzen 8745hs', image: 'ryzen-8745hs.png', info: '8코어 16스레드 / 4.0GHz / 고성능 모바일' },
  { title: 'Ryzen 6850H', image: 'ryzen-6850h.png', info: '8코어 16스레드 / 4.4GHz / Radeon 680M' },
  { title: 'Ryzen 1700', image: 'ryzen-1700.png', info: '8코어 16스레드 / 3.0GHz / 내장그래픽 없음' },
  { title: 'Ryzen 1700X', image: 'ryzen-1700x.png', info: '8코어 16스레드 / 3.4GHz / 내장그래픽 없음' },
  { title: 'Ryzen 2600X', image: 'ryzen-2600x.png', info: '6코어 12스레드 / 3.6GHz / 내장그래픽 없음' },
  { title: 'Ryzen 2700X', image: 'ryzen-2700x.png', info: '8코어 16스레드 / 3.7GHz / 내장그래픽 없음' },
  { title: 'Ryzen 3700X', image: 'ryzen-3700x.png', info: '8코어 16스레드 / 3.6GHz / 내장그래픽 없음' },
  { title: 'Ryzen 3800X', image: 'ryzen-3800x.png', info: '8코어 16스레드 / 3.9GHz / 내장그래픽 없음' },
  { title: 'Ryzen 5600X', image: 'ryzen-5600x.png', info: '6코어 12스레드 / 3.7GHz / 내장그래픽 없음' },
  { title: 'Ryzen 5700X', image: 'ryzen-5700x.png', info: '8코어 16스레드 / 3.4GHz / 내장그래픽 없음' },
];

  </script>
  
  <style src="../../style/home_css/product-detail.css" scoped></style>
  