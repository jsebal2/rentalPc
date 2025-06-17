<template>
  <Layout headerTitle="고객 Dashboard">
    <div class="dashboard-container">
      <!-- 상단 요약 박스 -->
      <div class="summary-boxes">
        <div class="summary-box">
          <img src="../../img/custom_pc.png" alt="PC" class="icon" />
          <p class="label">총 대여 PC 수</p>
          <p class="value">{{ rentalCount }} 대</p>
        </div>
        <div class="summary-box">
          <img src="../../img/on-button.png" alt="ON" class="icon" />
          <p class="label">현재 전원 ON</p>
          <p class="value">10 대</p>
        </div>
        <div class="summary-box">
          <img src="../../img/off-button.png" alt="OFF" class="icon" />
          <p class="label">전원 OFF</p>
          <p class="value">0 대</p>
        </div>
      </div>

      <!-- 좌우 분할 구조 -->
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
          <div class="notice-box">
            <h3 class="section-title">공지사항</h3>
            <div class="notice-wrapper">
              <div class="notice-admins">
                <ul>
                  <li
                    v-for="(admin, index) in uniqueAdmins"
                    :key="index"
                    :class="{ active: selectedAdmin === admin }"
                    @click="selectedAdmin = admin"
                  >
                    {{ sellerIdNameMap.get(admin) }}
                  </li>
                </ul>
              </div>
              <div class="notice-content">
                <ul>
                  <li
                    v-for="(item, index) in filteredNotices"
                    :key="index"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
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
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const rentallist = ref([])
const notice = ref([])
const rentalCount = ref(0)
const userId = Number(localStorage.getItem('user_id'))
const seller_id = ref<number[]>([])

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
        rentalCount.value = rentallist.value.length
    } catch (error) {
        console.error('대여 수 조회 실패:', error)
    }
})

onMounted(async () => {
  try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/buyer-dashboard/notice`)
      notice.value = res.data.notice
      console.log(notice);

      const sellerSet = new Set<number>()
      for (const n of notice.value) {
        for (const follow of n.user?.followsAsSeller ?? []) {
          if (follow.buyer_id === userId) {
            sellerSet.add(n.admin_id)  // 중복 방지
          }
        }
      }
      seller_id.value = [...sellerSet]
      selectedAdmin.value = seller_id.value[0] ?? null
    } catch (error) {
        console.error('대여 수 조회 실패:', error)
    }
})

const uniqueAdmins = computed(() => [...new Set(seller_id.value)])

const selectedAdmin = ref(uniqueAdmins.value[0] ?? null)

const filteredNotices = computed(() => {
  return notice.value.filter(n =>
    seller_id.value.includes(n.admin_id) && n.admin_id === selectedAdmin.value
  )
})

const sellerIdNameMap = computed(() => {
  const map = new Map<number, string>()
  for (const n of notice.value) {
    const adminId = n.admin_id
    const name = n.user?.name
    if (seller_id.value.includes(adminId) && name) {
      map.set(adminId, name)
    }
  }
  return map
})

</script>

<style src="../../style/buyer_css/custom-dashboard.css" scoped></style>