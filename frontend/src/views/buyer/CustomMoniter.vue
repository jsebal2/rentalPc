<template>
  <Layout headerTitle="고객 monitering">
    <div class="monitoring-page">
      <!-- 헤더 -->
      <div class="c_m_header">
        <div>
          <h2 class="title">PC 모니터링</h2>
          <p class="subtitle">Active PC</p>
        </div>
        <div class="controls">
          <input v-model="searchKeyword" type="text" placeholder="Search" class="search-input" />
          <select class="sort-select">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <!-- 테이블 -->
      <div class="c-table-scroll-wrapper">
        <table class="c-usage-table">
          <thead>
            <tr>
              <th>PC NO</th>
              <th>PC Name</th>
              <th>CPU</th>
              <th>RAM</th>
              <th>모델</th>
              <th>Start Date</th>
              <th>Return Date</th>
              <th>대여회사</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rental, index) in rentallist" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ rental.pcName || '알 수 없음' }}</td>
              <td>{{ rental.cpu || '알 수 없음' }}</td>
              <td>{{ rental.ram || '알 수 없음' }}</td>
              <td>미정</td>
              <td>{{ new Date(rental.rental[0].start_date).toLocaleDateString() }}</td>
              <td>{{ new Date(rental.rental[0].end_date).toLocaleDateString() }}</td>
              <td>YC</td>
              <td><span class="status activate">ative</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'

const searchKeyword = ref('')
const rentallist = ref([])
const rentalCount = ref(0)

onMounted(async () => {
    const token = localStorage.getItem('token')
    if (!token) {
        console.error('토큰이 없습니다.')
        return
    }
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/customers/rental`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        rentallist.value = res.data
        console.log(rentallist)
        rentalCount.value = rentallist.value.length
    } catch (error) {
        console.error('대여 수 조회 실패:', error)
    }
})

</script>

<style src="../../style/buyer_css/custom-moniter.css" scoped></style>
