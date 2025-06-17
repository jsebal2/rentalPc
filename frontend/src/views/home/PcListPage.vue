<template>
  <div class="pc-list-page">
    <Header />
    <div class="filter-box">
      <p>상품 개수 : {{ filteredProducts.length }}개</p>
      <div class="filter-grid">
        <div class="filter-group">
          <label>제조사</label>
          <div class="checkboxes">
            <label><input type="checkbox" value="Intel" v-model="selectedManufacturers"
              :checked="selectedManufacturers ==='Intel'" @change="oncheckboxChange('Intel')" /> Intel</label>
            <label><input type="checkbox" value="AMD" v-model="selectedManufacturers"
              :checked="selectedManufacturers ==='AMD'" @change="oncheckboxChange('AMD')" /> AMD</label>
          </div>
        </div>

        <button class="reset-button" @click="resetFilters">필터 초기화</button>
      </div>
    </div>

    <div class="sort-tabs">
      <span>인기순</span>
      <span>가격순</span>
      <span>추천순</span>
      <span>평점순</span>
    </div>

    <div class="product-grid">
      <div class="product-card" v-for="(product, index) in filteredProducts" :key="index">
        <p class="title">{{ product.title }}</p>
        <p>35,000원/월</p>
        <button class="purchase" @click="goToDetail(product.id)">구매하기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedManufacturers = ref<string | null>(null);

const oncheckboxChange = (manufacturer: string) => {
  selectedManufacturers.value = selectedManufacturers.value === manufacturer ? null : manufacturer; 
};

const products = [
  { title: 'Intel i5-4650', manufacturer: 'Intel' , id : 'i5-4650'},
  { title: 'Intel E52660', manufacturer: 'Intel' , id : 'E52660'},
  { title: 'AMD Ryzen 2200G', manufacturer: 'AMD' , id : 'Ryzen 2200G'},
  { title: 'AMD Ryzen 4350G', manufacturer: 'AMD' , id : 'Ryzen 4350G'},
  { title: 'AMD Ryzen 4600G', manufacturer: 'AMD' , id : 'Ryzen 4600G'},
  { title: 'AMD Ryzen 4650G', manufacturer: 'AMD' , id : 'Ryzen 4650G'},
  { title: 'AMD Ryzen 5500GT', manufacturer: 'AMD' , id : 'Ryzen 5500GT'},
  { title: 'AMD Ryzen 5600G', manufacturer: 'AMD' , id : 'Ryzen 5600G'},
  { title: 'AMD Ryzen 5700G', manufacturer: 'AMD' , id : 'Ryzen 5700G'},
  { title: 'AMD Ryzen 8700G', manufacturer: 'AMD' , id : 'Ryzen 8700G'},
  { title: 'AMD Ryzen 8745hs', manufacturer: 'AMD' , id : 'Ryzen 8745hs'},
  { title: 'AMD Ryzen 6850H', manufacturer: 'AMD' , id : 'Ryzen 6850H'},
  { title: 'AMD Ryzen 1700', manufacturer: 'AMD' , id : 'Ryzen 1700'},
  { title: 'AMD Ryzen 1700X', manufacturer: 'AMD' , id : 'Ryzen 1700X'},
  { title: 'AMD Ryzen 2600X', manufacturer: 'AMD' , id : 'Ryzen 2600X'},
  { title: 'AMD Ryzen 2700X', manufacturer: 'AMD' , id : 'Ryzen 2700X'},
  { title: 'AMD Ryzen 3700X', manufacturer: 'AMD' , id : 'Ryzen 3700X'},
  { title: 'AMD Ryzen 3800X', manufacturer: 'AMD' , id : 'Ryzen 3800X'},
  { title: 'AMD Ryzen 5600X', manufacturer: 'AMD' , id : 'Ryzen 5600X'},
  { title: 'AMD Ryzen 5700X', manufacturer: 'AMD' , id : 'Ryzen 5700X'}
];

const filteredProducts = computed(() => {
  if (!selectedManufacturers.value) return products;
  return products.filter(product => product.manufacturer === selectedManufacturers.value);
});

const resetFilters = () => {
  selectedManufacturers.value = null;
};

const goToDetail = (id: string) => {
  router.push(`/product-detail/${id}`);
}
</script>


<style src="../../style/home_css/pc-list-page.css" scoped></style>
