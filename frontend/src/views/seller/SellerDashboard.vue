<template>
  <Layout headerTitle="">
    <div class="dashboard">
      <div class="left-section">
        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-title">총 PC 수</div>
            <div class="stat-value">{{ stats.totalPCCount }} 대</div>
          </div>
          <div class="stat-card">
            <div class="stat-title">사용 중</div>
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

        <div class="graph-card">
          <div class="card-title">대여 현황</div>
          <div class="chart-box">
            <canvas id="rentalChart" ref="chartRef"></canvas>
          </div>
        </div>

        <div class="log-card">
          <div class="card-title">최근 접속 로그</div>
          <div class="log-box"></div>
        </div>
      </div>

      <div class="right-section">
        <div class="graph-card">
          <div class="card-title">PC 상태(사용 중, 미사용, 고장)</div>
          <div class="chart-box"></div>
        </div>

        <div class="alert-card">
          <div class="alert-left">
            <img  class="alert-icon" src="../../img/warning.png" alt="경고">
            <div class="alert-title">경고</div>
          </div>
          <div class="alert-text">고장 난 PC가 있습니다</div>
        </div>

        <div class="action-buttons">
          <div class="blue-button">고객 상담 내역가기</div>
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
import { Chart } from 'chart.js';
import { Chart as ChartType } from 'chart.js';

const stats = ref({
  totalPCCount: 0,
  inUsePCCount: 0,
  availablePCCount: 0,
  expiredPCCount: 0,
});

const chartRef = ref<HTMLCanvasElement | null>(null);
let rentalChart: ChartType | null = null;

const drawRentalChart = () => {
  if (!chartRef.value) return;

  const ctx = chartRef.value.getContext('2d');
  if (!ctx) return;

  // 이미 생성된 차트가 있다면 파괴
  if (rentalChart) {
    rentalChart.destroy();
  }

  rentalChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
      datasets: [
        {
          label: '월별 대여 수',
          data: stats.value.monthlyRentals,
          borderWidth: 2,
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
};

const fetchDashboardData = async () => {
  const user_id = localStorage.getItem('user_id');
  if (!user_id) return;

  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + `/seller-dashboard?user_id=${user_id}`);
    stats.value = response.data;
    drawRentalChart();
  } catch (error) {
    console.error('대시보드 데이터 로드 오류:', error);
  }
};


const router = useRouter();

const goToPage = (page: string) => {
  router.push(page);
};


onMounted(async () => {
  await fetchDashboardData();
});

</script>

<style src="../../style/seller_css/seller-dashboard.css" scoped></style>