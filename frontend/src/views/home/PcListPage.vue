<template>
  <div class="pc-list-page">
    <Header />
    <div class="filter-box">
      <p>상품 개수 : {{ products.length }}개</p>
      <div class="filter-grid">
        <div class="filter-group">
          <label>제조사</label>
          <div class="checkboxes">
            <label><input type="checkbox" /> 인텔</label>
            <label><input type="checkbox" /> RYZEN</label>
          </div>
        </div>

        <button class="reset-button">필터 초기화</button>
      </div>
    </div>

    <div class="sort-tabs">
      <span>인기순</span>
      <span>가격순</span>
      <span>추천순</span>
      <span>평점순</span>
    </div>

    <div class="product-grid">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <p class="title">{{ product.title }}</p>
        <p>35,000원/월</p>
        <button class="purchase">구매하기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';

const products = [
  { title: '인텔 i5-4650' },
  { title: '인텔 E52660' },
  { title: 'AMD Ryzen 2200G' },
  { title: 'AMD Ryzen 4350G' },
  { title: 'AMD Ryzen 4600G' },
  { title: 'AMD Ryzen 4650G' },
  { title: 'AMD Ryzen 5500GT' },
  { title: 'AMD Ryzen 5600G' },
  { title: 'AMD Ryzen 5700G' },
  { title: 'AMD Ryzen 8700G' },
  { title: 'AMD Ryzen 8745hs' },
  { title: 'AMD Ryzen 6850H' },
  { title: 'AMD Ryzen 1700' },
  { title: 'AMD Ryzen 1700X' },
  { title: 'AMD Ryzen 2600X' },
  { title: 'AMD Ryzen 2700X' },
  { title: 'AMD Ryzen 3700X' },
  { title: 'AMD Ryzen 3800X' },
  { title: 'AMD Ryzen 5600X' },
  { title: 'AMD Ryzen 5700X' }
];
</script>


<style src="../../style/home_css/pc-list-page.css" scoped></style>
