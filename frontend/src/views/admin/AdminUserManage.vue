<template>
  <Layout headerTitle="고객 관리">
    <div class="admin-container">
      <!-- 판매자 목록 -->
      <section class="seller-section">
        <h2>판매자 목록</h2>
        <table class="seller-table">
          <thead>
            <tr>
              <th>판매자명</th>
              <th>이메일</th>
              <th>등록일</th>
              <th>보유 PC 수</th>
              <th>고객 수</th>
              <th>세부내용</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="seller in sellers" :key="seller.user_id">
              <td>{{ seller.name }}</td>
              <td>{{ seller.email || '–' }}</td>
              <td>{{ seller.join_date ? formatDate(seller.join_date) : '–' }}</td>
              <td>{{ seller.pc_count }}대</td>
              <td>{{ seller.customer_count }}명</td>
              <td>
                <button class="btn-policy" v-if="seller.email">보기</button>
                <span v-else>–</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 진채 PC 관리 -->
      <!-- 전체 PC 관리 UI -->
      <section class="pc-management">
        <h2>전체 PC 관리</h2>

        <div class="pc-filters">
          <input v-model="search" placeholder="PC 이름 검색" />
          <select v-model="selectedSeller">
            <option value="">전체 판매자</option>
            <option v-for="seller in sellers" :key="seller.user_id" :value="seller.user_id">
              {{ seller.name }}
            </option>
          </select>
          <select v-model="selectedStatus">
            <option value="">전체 상태</option>
            <option value="AVAILABLE">사용 가능</option>
            <option value="RENTED">대여 중</option>
            <option value="RESERVED">예약됨</option>
          </select>
        </div>

        <table class="pc-table">
          <thead>
            <tr>
              <th>PC 이름</th>
              <th>CPU</th>
              <th>RAM</th>
              <th>상태</th>
              <th>판매자</th>
              <th>대여 상태</th>
              <th>등록일</th>
              <th>조치</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pc in filteredPcs" :key="pc.pc_id">
              <td>{{ pc.pcName }}</td>
              <td>{{ pc.cpu }}</td>
              <td>{{ pc.ram }}</td>
              <td>{{ getStateLabel(pc.state) }}</td>
              <td>{{ getSellerName(pc.user_id) }}</td>
              <td>{{ getRentalStatusLabel(pc.rental_status) }}</td>
              <td>{{ formatDate(pc.reg_date) }}</td>
              <td>
                <button class="btn" @click="forceReturn(pc.pc_id)">반납</button>
                <button class="btn-red" @click="deletePc(pc.pc_id)">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>

  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import Layout from '../../layouts/Layout.vue'

const pcs = ref([])
const sellers = ref([])

const search = ref('')
const selectedSeller = ref('')
const selectedStatus = ref('')

// 날짜 포맷
function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

// 판매자 이름 가져오기
function getSellerName(userId: number | null) {
  const seller = sellers.value.find(s => s.user_id === userId)
  return seller ? seller.name : '-'
}

// PC 필터링
const filteredPcs = computed(() => {
  return pcs.value.filter(pc => {
    const matchesSearch = pc.pcName?.toLowerCase().includes(search.value.toLowerCase())
    const matchesSeller = selectedSeller.value === '' || pc.user_id == selectedSeller.value
    const matchesStatus = selectedStatus.value === '' || pc.rental_status === selectedStatus.value
    return matchesSearch && matchesSeller && matchesStatus
  })
})

// PC 반납 처리
async function forceReturn(pcId: number) {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/admin-sellermana/force-return/${pcId}`)
    await fetchPcs()
  } catch (err) {
    console.error('반납 실패:', err)
  }
}

// PC 삭제 처리
async function deletePc(pcId: number) {
  if (!confirm('정말 삭제하시겠습니까?')) return
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/admin-sellermana/${pcId}`)
    await fetchPcs()
  } catch (err) {
    console.error('삭제 실패:', err)
  }
}

// 데이터 불러오기
async function fetchPcs() {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin-sellermana/all`)
    pcs.value = res.data
    console.log(pcs);
    
  } catch (err) {
    console.error('PC 목록 로드 실패:', err)
  }
}

async function fetchSellers() {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin-sellermana/sellers`)
    sellers.value = res.data
  } catch (err) {
    console.error('판매자 목록 로드 실패:', err)
  }
}

function getStateLabel(state: string | null): string {
  switch (state) {
    case 'AVAILABLE': return '사용 가능'
    case 'IN_USE': return '사용 중'
    case 'MAINTENANCE': return '고장/점검'
    default: return '-'
  }
}

function getRentalStatusLabel(status: string | null): string {
  switch (status) {
    case 'AVAILABLE': return '사용 가능'
    case 'RENTED': return '대여 중'
    case 'RESERVED': return '예약됨'
    default: return '-'
  }
}

// 초기 로딩
onMounted(() => {
  fetchPcs()
  fetchSellers()
})

</script>

<style src="../../style/admin_css/admin-seller.css" scoped></style>