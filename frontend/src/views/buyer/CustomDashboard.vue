<template>
  <Layout headerTitle="고객 Dashboard">
    <div class="dashboard-container">
      <!-- 상단 요약 박스 -->
      <div class="summary-boxes">
        <div class="summary-box">
          <img src="" alt="PC" class="icon" />
          <p class="label">총 대여 PC 수</p>
          <p class="value">{{ rentalCount }} 대</p>
        </div>
        <div class="summary-box">
          <img src="" alt="ON" class="icon" />
          <p class="label">현재 전원 ON</p>
          <p class="value">10 대</p>
        </div>
        <div class="summary-box">
          <img src="" alt="OFF" class="icon" />
          <p class="label">전원 OFF</p>
          <p class="value">0 대</p>
        </div>
      </div>

      <!-- 👇 좌우 분할 구조 -->
      <div class="dashboard-split-wrapper">
        <!-- 왼쪽: 모니터 사용량 + 그래프 -->
        <div class="dashboard-left">
          <!-- 모니터 사용량 -->
          <div class="section">
            <h3 class="section-title">모니터 사용량</h3>
            <div class="table-scroll-wrapper">
              <table class="usage-table">
                <thead>
                  <tr>
                    <th>PC Name</th>
                    <th>CPU</th>
                    <th>Return Date</th>
                    <th>Status</th>
                    <th>대여 업체</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(rental, index) in rentallist" :key="index">
                    <td>{{ rental.pcName || '알 수 없음' }}</td>
                    <td>미정</td>
                    <td>{{ new Date(rental.rental[0].end_date).toLocaleDateString() }}</td>
                    <td><span class="status activate">ative</span></td>
                    <td>YC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 그래프 추천 -->
          <div class="section">
            <h3 class="section-title">그래프 추천중...</h3>
            <div class="chart-placeholder"></div>
          </div>
        </div>

        <!-- 오른쪽: 공지사항 + 반납 일자 -->
        <div class="dashboard-right">
          <!-- 공지사항 -->
          <div class="notice-box">
            <p><strong>YC</strong><br />장기 사용자 우대 행사 진행중<br />2025-03-01~2025-06-01<br />1년 이상 사용자 10% DC</p>
            <hr />
            <p><strong>JG</strong><br />공사 예정 알림<br />2025-05-19 12~14<br />전기 공사 일정을 알려 드립니다.<br />자세한 사항은 사이트 확인해주세요</p>
          </div>

          <!-- 반납 일자 -->
          <div class="section">
            <h3 class="section-title">반납 일자</h3>
            <div class="table-scroll-wrapper">
              <table class="usage-table">
                <thead>
                  <tr>
                    <th>PC Name</th>
                    <th>Return Date</th>
                    <th>대여 업체</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(rental, index) in rentallist" :key="index">
                    <td>{{ rental.pcName || '알 수 없음' }}</td>
                    <td>{{ new Date(rental.rental[0].end_date).toLocaleDateString() }}</td>
                    <td>YC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'

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

<style src="../../style/buyer_css/custom-dashboard.css"></style>