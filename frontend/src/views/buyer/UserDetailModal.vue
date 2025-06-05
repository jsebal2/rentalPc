<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h2>상세보기</h2>
      <div class="info-sections">
        <div class="section">
          <h3>사용자 정보</h3>
          <ul>
            <li><strong>이름:</strong> {{ user.name }}</li>
            <li><strong>ID:</strong> {{ user.user_id }}</li>
            <li><strong>E-Mail:</strong> {{ user.email }}</li>
            <li><strong>연락처:</strong> {{ user.phone }}</li>
            <li><strong>가입일:</strong> {{ formatDate(user.join_date) }}</li>
            <li><strong>상태:</strong> 활성</li>
          </ul>
        </div>
        <div class="section">
          <h3>결제 정보</h3>
          <ul>
            <li><strong>결제 방식:</strong> 정액제</li>
            <li><strong>결제 금액:</strong> ₩150,000</li>
            <li><strong>결제 이력:</strong> 최근 1건 (일자, 금액, 상태)</li>
            <li><strong>미납 금액:</strong> ₩50,000</li>
            <li><strong>자동 연장 설정:</strong> ON</li>
          </ul>
        </div>
      </div>

      <h3>대여 내역</h3>
      <table class="rental-table">
        <thead>
          <tr>
            <th>PC-ID</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>대여 시작일</th>
            <th>만료일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rental, i) in rentals" :key="i">
            <td>{{ rental.pc.pc_id }}</td>
            <td>{{ rental.pc.cpu }}</td>
            <td>{{ rental.pc.ram }}</td>
            <td>{{ formatDate(rental.start_date) }}</td>
            <td>{{ formatDate(rental.end_date) }}</td>
          </tr>
        </tbody>
      </table>

      <button class="close-btn" @click="close">닫기</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const emit = defineEmits(['close'])
const close = () => emit('close')
const rentals = ref([]);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}.${month}.${day}`;
}

onMounted(async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + `/customers/${props.user.user_id}/rentals`);
    rentals.value = response.data;
    console.log(rentals.value);
    console.log(props.user.user_id);
    console.log(import.meta.env.VITE_API_URL + `/customers/${props.user.user_id}/rentals`);
  } catch (error) {
    console.error('대여 내역 조회 오류:', error);
  }
});

</script>

<style src="../../style/buyer_css/user-detail-modal.css"></style>