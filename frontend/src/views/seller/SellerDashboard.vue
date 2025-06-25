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

        <div class="notice-card">
          <div class="card-title">공지사항</div>
          <div class="notice-box">
            <table class="notice-table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>날짜</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(notice, index) in filledNotices" :key="index">
                  <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                  <td>{{ notice?.title || '-' }}</td>
                  <td>{{ notice?.created_at ? formatDate(notice.created_at) : '-' }}</td>
                </tr>
              </tbody>
            </table>
            <div class="pagination">
              <button @click="changePage(pageGroupStart - 1)" :disabled="currentPage === 1">이전</button>
              <button
              v-for="page in visiblePages"
              :key="page"
              :class="{ active: currentPage === page }"
               @click="changePage(page)" 
               :disabled="currentPage === page">
                {{ page }}
              </button>
              <button @click="changePage(pageGroupEnd + 1)" :disabled="pageGroupEnd === totalPages">다음</button>
            </div>
          </div>
        </div>

        <div class="log-card">
          <div class="card-title">pc당 대여 비율</div>
          <div class="log-box">
            <canvas ref="rentalRatioChartRef"></canvas>
          </div>
        </div>
      </div>

      <div class="right-section">
        <div class="graph-card">
          <div class="card-title">대여 가능 PC 수</div>
          <div class="chart-box scrllable-chart">
            <div class="chart-content">
              <canvas ref="cpuChartRef"></canvas>
              <div class="cpu-text-list">
                <div
                  v-for="(item, index) in cpuChartData"
                  :key="index"
                  class="cpu-item">
                  {{ formatCpuLabel(item.cpu) }} : {{ item.count }}대
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="alert-card">
          <div class="alert-left">
            <img  class="alert-icon" src="../../img/warning.png" alt="경고">
            <div class="alert-title">경고</div>
          </div>
          <div class="alert-text">고장 난 PC가 있습니다</div>
        </div>

        <div class="action-buttons">
          <div class="blue-button" @click="goToPage('/message-chat')">고객 상담</div>
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
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { Chart, ChartType } from 'chart.js/auto';

const notices = ref<Notice[]>([]);
const currentPage = ref(1);
const itemsPerPage = 5;
const maxVisiblePages = 5;
const cpuChartRef = ref<HTMLCanvasElement | null>(null);
let cpuChart: ChartType | null = null;
const cpuChartData = ref<{ cpu : string, count : number }[]>([]);
const rentalRatioChartRef = ref<HTMLCanvasElement | null>(null);
let rentalRatioChart: ChartType | null = null;

const totalPages = computed(() => Math.ceil(notices.value.length / itemsPerPage));

const paginatedNotices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return notices.value.slice(start, start + itemsPerPage);
});

const filledNotices = computed(() => {
  const result = [...paginatedNotices.value];
  while (result.length < itemsPerPage) {
    result.push(null);
  }
  return result;
})

const pageGroupStart = computed(() =>
  Math.floor((currentPage.value - 1) / maxVisiblePages) * maxVisiblePages + 1
);
const pageGroupEnd = computed(() =>
  Math.min(pageGroupStart.value + maxVisiblePages - 1, totalPages.value)
);

const visiblePages = computed(() =>
  Array.from(
    { length: pageGroupEnd.value - pageGroupStart.value + 1 },
    (_, i) => pageGroupStart.value + i
  )
);

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const stats = ref({
  totalPCCount: 0,
  inUsePCCount: 0,
  availablePCCount: 0,
  expiredPCCount: 0,
});



const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

const formatCpuLabel = (label: string) => {
  if (label.startsWith('RYZEN')) {
    return 'RYZEN ' + label.replace(/^RYZEN/, '');
  } else if (label.startsWith('INTEL')) {
    return 'INTEL ' + label.replace(/^INTEL/, '');
  }
  return label;
};


const fetchDashboardData = async () => {
  const user_id = localStorage.getItem('user_id');
  if (!user_id) return;

  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + `/seller-dashboard?user_id=${user_id}`);
    stats.value = response.data;

    if (response.data.notices) {
      notices.value = response.data.notices;
    }
  } catch (error) {
    console.error('대시보드 데이터 로드 오류:', error);
  }
};

const fetchAvailablePcCount = async () => {
  const user_id = localStorage.getItem('user_id');
  const response = await axios.get(import.meta.env.VITE_API_URL + `/seller-dashboard/available-pc-count?user_id=${user_id}`);
  
  cpuChartData.value = response.data;
  drawCpuChart(response.data);
};

const drawCpuChart = (data : { cpu : string, count : number }[]) => {
  if(cpuChart) cpuChart.destroy();

  const ctx = cpuChartRef.value?.getContext('2d');
  if(!ctx) return;

  const labels = data.map((d) => d.cpu);

  cpuChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map((d) => d.cpu),
      datasets: [{
        label: '대여 가능 PC 수',
        data: data.map((d) => d.count),
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      scales: {
        x : {
          ticks : {
            callback : function(value : index) {
              const label = labels[value as number];

              if(label.startsWith('RYZEN')) {
                return ['RYZEN', label.replace(/^RYZEN/, '')];
              }
              return label;
            }
          }
        },
        y: {
          beginAtZero: true,
          ticks : {
            stepSize : 1,
            callback : function(value) {
              return `${value}대`;
            }
          }
        }
      }
    }
  });
};

const fetchRentalRatioData = async () => {
  const user_id = localStorage.getItem('user_id');
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/seller-dashboard/pc-rental-ratio?user_id=${user_id}`
  );
  drawRentalRatioChart(response.data);
};

const drawRentalRatioChart = (data: { cpu: string; rented: number; available: number }[]) => {
  if (rentalRatioChart) rentalRatioChart.destroy();

  const ctx = rentalRatioChartRef.value?.getContext('2d');
  if (!ctx) return;

  const labels = data.map((d) =>
    d.cpu.startsWith('RYZEN') ? `RYZEN ${d.cpu.replace(/^RYZEN/, '')}` :
    d.cpu.startsWith('INTEL') ? `INTEL ${d.cpu.replace(/^INTEL/, '')}` : d.cpu
  );

  const total = data.map((d) => d.rented + d.available);

  rentalRatioChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: '대여 중',
          data: data.map((d, i) => Math.round((d.rented / total[i]) * 100)),
          backgroundColor: '#3674B5'
        },
        {
          label: '미대여',
          data: data.map((d, i) => Math.round((d.available / total[i]) * 100)),
          backgroundColor: '#FADA7A'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: ${context.parsed.y}%`;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value) => `${value}%`
          }
        }
      }
    }
  });
};



const router = useRouter();

const goToPage = (page: string) => {
  router.push(page);
};

onMounted(async () => {
  await fetchDashboardData();
  await fetchAvailablePcCount();
  await fetchRentalRatioData();
});

</script>

<style src="../../style/seller_css/seller-dashboard.css" scoped></style>