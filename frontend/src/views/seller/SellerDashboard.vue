<template>
  <Layout headerTitle="관리자 DashBoard">
    <div class="content-row">
      <div class="content-left">
        <div class="stat-cards">
          <div class="stat-card">
            <div class="stat-title">총 PC 수</div>
            <div class="stat-value">{{ stats.totalPCCount }} 대</div>
          </div>
          <div class="stat-card">
            <div class="stat-title">현재 사용 중</div>
            <div class="stat-value">{{ stats.inUsePCCount }} 대</div>
          </div>
          <div class="stat-card">
            <div class="stat-title">미사용</div>
            <div class="stat-value">{{ stats.availablePCCount }} 대</div>
          </div>
          <div class="stat-card">
            <div class="stat-title">만료 예정 pc</div>
            <div class="stat-value">{{ stats.expiredPCCount }} 대</div>
          </div>
        </div>
        <div class="chart-section">
          <div class="chart-title">접속 추이</div>
          <div class="chart-box"></div>
        </div>
        <div class="log-section">
          <div class="log-title">최근접속로그</div>
          <div class="log-box"></div>
        </div>
      </div>
      <div class="content-right">
        <div class="status-section">
          <div class="status-title">PC상태(사용중, 미사용, 고장)</div>
          <div class="status-box"></div>
        </div>
        <div class="warning-section">
          <div class="warning-title">경고</div>
          <div class="warning-box"></div>
        </div>
        <div class="button-section">
          <div class="blue-button">고객 상담 바로가기</div>
          <div class="blue-button" @click="goToPage('/pc-status')">PC 상태 관리</div>
          <div class="blue-button" @click="goToPage('/customer-management')">고객 관리</div>
          <div class="blue-button">요금제 설정</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const stats = ref({
  totalPCCount: 0,
  inUsePCCount: 0,
  availablePCCount: 0,
  expiredPCCount: 0,
});

const fetchDashboardData = async () => {
  const user_id = localStorage.getItem('user_id');
  if (!user_id) return;

  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + `/admin-dashboard?user_id=${user_id}`);
    stats.value = response.data;
  } catch (error) {
    console.error('대시보드 데이터 로드 오류:', error);
  }
};

onMounted(async () => {
  await fetchDashboardData();
});


const router = useRouter();

const goToPage = (page: string) => {
  router.push(page);
};
</script>

<style src="../../style/seller_css/seller-dashboard.css" scoped></style>