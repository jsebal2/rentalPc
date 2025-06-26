<template>
  <div class="con">
    <div class="product-detail-page">
        <Header />
      <!-- 상단 상세 정보 -->
      <div class="product-header">
        <div class="product-image">
          <img :src="`/img/${product?.image_src}.png`" alt="product image" />
        </div>
        <div class="product-summary">
          <div class="product-title">{{ product?.title }}</div>
          <div class="product-info-price">35,000원/월</div>
          <div class="product-info-box">{{ product?.info }}</div>
        </div>
      </div>
  
      <!-- 게시판 리스트 -->
      <div class="seller-pc-list">
        <h3 class="seller-pc-title">판매자의 PC 판매 건</h3>
        <table class="seller-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>회사명</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(seller, index) in sellerProfile"
              :key="index"
              @click="goToPostDetail(seller.user_id)"
              style="cursor: pointer"
            >
              <td>{{ seller.no ?? '-' }}</td>
              <td>{{ seller.introduction_title ?? '-' }}</td>
              <td>{{ seller.business_name ?? '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import Header from '../../components/Header.vue';
import axios from 'axios';

const posts = ref([])

const route = useRoute();
const router = useRouter();
const product = ref<{ title: string; image: string; info: string } | null>(null);
const sellerProfile = ref<{
  no: number;
  user_id: number;
  name: string;
  introduction_title: string;
  business_name: string;
  introduction_content: string;
  contact_phone: string;
}[]>([]);


const postsWithAuthor = computed(() => {
  return posts.value.map(post => {
    const seller = sellerProfile.value.find(s => s.user_id === post.user_id);
    return {
      ...post,
      business_name: seller?.business_name || '알 수 없음',
      introduction_title: seller?.introduction_title || '제목 없음'
    };
  });
});

const goToPostDetail = (user_id: number) => {
  router.push({
    path : `/post-detail/${user_id}`,
    query : {all : sellerProfile.value.map(s => s.user_id).join(','),
      title : product.value?.title
    }
  });
};

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
    sellerProfile.value = data;
    console.log(sellerProfile.value);
    console.log(posts.value);
  } catch (error) {
    console.error('제품 정보를 불러오는데 실패했습니다.', error);
  }
});




const allProducts = [
  { title: 'i5-4650', image: 'intel-i5.png', info: '4코어 4스레드 / 3.5GHz / HD 4600', image_src:'homepc1' },
  { title: 'E52660', image: 'intel-e5.png', info: '8코어 16스레드 / 2.2GHz / 서버용', image_src:'homepc2' },
  { title: 'Ryzen 2200G', image: 'ryzen-2200g.png', info: '4코어 4스레드 / 3.5GHz / Vega 8', image_src:'homepc3' },
  { title: 'Ryzen 4350G', image: 'ryzen-4350g.png', info: '4코어 8스레드 / 3.8GHz / Vega 6', image_src:'homepc4' },
  { title: 'Ryzen 4600G', image: 'ryzen-4600g.png', info: '6코어 12스레드 / 3.7GHz / Vega 7', image_src:'homepc5' },
  { title: 'Ryzen 4650G', image: 'ryzen-4650g.png', info: '6코어 12스레드 / 3.7GHz / Vega 7 PRO', image_src:'homepc6' },
  { title: 'Ryzen 5500GT', image: 'ryzen-5500gt.png', info: '6코어 12스레드 / 3.6GHz / 내장그래픽 없음', image_src:'homepc7' },
  { title: 'Ryzen 5600G', image: 'ryzen-5600g.png', info: '6코어 12스레드 / 3.9GHz / Vega 7', image_src:'homepc8' },
  { title: 'Ryzen 5700G', image: 'ryzen-5700g.png', info: '8코어 16스레드 / 3.8GHz / Vega 8', image_src:'homepc5' },
  { title: 'Ryzen 8700G', image: 'ryzen-8700g.png', info: '8코어 16스레드 / 4.2GHz / Radeon 780M', image_src:'homepc3' },
  { title: 'Ryzen 8745hs', image: 'ryzen-8745hs.png', info: '8코어 16스레드 / 4.0GHz / 고성능 모바일', image_src:'homepc7' },
  { title: 'Ryzen 6850H', image: 'ryzen-6850h.png', info: '8코어 16스레드 / 4.4GHz / Radeon 680M', image_src:'homepc4' },
  { title: 'Ryzen 1700', image: 'ryzen-1700.png', info: '8코어 16스레드 / 3.0GHz / 내장그래픽 없음', image_src:'homepc2' },
  { title: 'Ryzen 1700X', image: 'ryzen-1700x.png', info: '8코어 16스레드 / 3.4GHz / 내장그래픽 없음', image_src:'homepc5' },
  { title: 'Ryzen 2600X', image: 'ryzen-2600x.png', info: '6코어 12스레드 / 3.6GHz / 내장그래픽 없음', image_src:'homepc7' },
  { title: 'Ryzen 2700X', image: 'ryzen-2700x.png', info: '8코어 16스레드 / 3.7GHz / 내장그래픽 없음', image_src:'homepc5' },
  { title: 'Ryzen 3700X', image: 'ryzen-3700x.png', info: '8코어 16스레드 / 3.6GHz / 내장그래픽 없음', image_src:'homepc3' },
  { title: 'Ryzen 3800X', image: 'ryzen-3800x.png', info: '8코어 16스레드 / 3.9GHz / 내장그래픽 없음', image_src:'homepc7' },
  { title: 'Ryzen 5600X', image: 'ryzen-5600x.png', info: '6코어 12스레드 / 3.7GHz / 내장그래픽 없음', image_src:'homepc1' },
  { title: 'Ryzen 5700X', image: 'ryzen-5700x.png', info: '8코어 16스레드 / 3.4GHz / 내장그래픽 없음', image_src:'homepc4' },
];

  </script>
  
  <style src="../../style/home_css/product-detail.css" scoped></style>
  