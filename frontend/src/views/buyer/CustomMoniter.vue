<template>
  <Layout headerTitle="고객 monitering">
    <div class="monitoring-page">
      <!-- 헤더 -->
      <div class="c_m_header">
        <div class="left-title">
          <h2 class="title">PC 모니터링</h2>
          <p class="subtitle">Active PC</p>
        </div>
        <div class="controls">
          <button class="additional-loan">PC 추가 구매</button>
          <input v-model="searchKeyword" type="text" placeholder="Search" class="search-input" />
          <select v-model="sortOrder" class="sort-select">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
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
              <th>메일</th>
              <th>Start Date</th>
              <th>Return Date</th>
              <th>대여회사</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(rental, index) in sortedAndFilteredList"
              :key="index"
              :class="{ selected: selectedRentals.some(r => r.pc_id === rental.pc_id) }"
              @click.left="(e) => toggleRentalSelection(rental, index, e)"
              @contextmenu.prevent="showContextMenu($event)"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ rental.pcName || '알 수 없음' }}</td>
              <td>{{ rental.cpu || '알 수 없음' }}</td>
              <td>{{ rental.ram || '알 수 없음' }}</td>
              <td>미정</td>
              <td>{{ new Date(rental.rental[0].start_date).toLocaleDateString() }}</td>
              <td>{{ new Date(rental.rental[0].end_date).toLocaleDateString() }}</td>
              <td>YC</td>
              <td><span class="status activate">active</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 우클릭 메뉴 -->
      <div
        v-if="contextMenuVisible"
        class="context-menu"
        :style="{ top: contextMenuY + 'px', left: contextMenuX + 'px' }"
        @click="closeContextMenu"
      >
        <ul>
          <li @click.stop="extension">🗓️ 대여기간 연장</li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import e from 'cors';

const searchKeyword = ref('');
const rentallist = ref([]);
const rentalCount = ref(0);
const sortOrder = ref('Newest');
const userId = Number(localStorage.getItem('user_id'));

// 다중 선택 상태
const selectedRentals = ref<any[]>([])
const lastSelectedIndex = ref<number | null>(null)

const contextMenuVisible = ref(false)
const contextMenuX = ref(0)
const contextMenuY = ref(0)

onMounted(async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('토템이 없습니다.');
    return;
  }
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/customers/rental`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    rentallist.value = res.data;
    rentalCount.value = rentallist.value.length;
  } catch (error) {
    console.error('대여 수 조회 실패:', error);
  }

  document.addEventListener('click', closeContextMenu);
});

onUnmounted(() => {
  document.removeEventListener('click', closeContextMenu);
});

const sortedAndFilteredList = computed(() => {
  const keyword = searchKeyword.value.toLowerCase().trim();
  let filtered = rentallist.value.filter((rental) => {
    if (!keyword) return true;
    return (
      rental.pcName?.toLowerCase().includes(keyword) ||
      rental.cpu?.toLowerCase().includes(keyword) ||
      rental.ram?.toLowerCase().includes(keyword)
    );
  });

  filtered.sort((a, b) => {
    const dateA = new Date(a.rental[0].start_date).getTime();
    const dateB = new Date(b.rental[0].start_date).getTime();
    return sortOrder.value === 'Newest' ? dateB - dateA : dateA - dateB;
  });

  return filtered;
});

const toggleRentalSelection = (rental: any, index: number, event: MouseEvent) => {
  if (event.shiftKey && lastSelectedIndex.value !== null) {
    const start = Math.min(lastSelectedIndex.value, index);
    const end = Math.max(lastSelectedIndex.value, index);
    const range = sortedAndFilteredList.value.slice(start, end + 1);

    selectedRentals.value = range;
  } else {
    selectedRentals.value = [rental];
    lastSelectedIndex.value = index;
  }
};

const showContextMenu = (event: MouseEvent) => {
  if (selectedRentals.value.length === 0) return;
  contextMenuX.value = event.clientX;
  contextMenuY.value = event.clientY;
  contextMenuVisible.value = true;
};

const closeContextMenu = () => {
  contextMenuVisible.value = false;
};

const extension = async () => {
  const token = localStorage.getItem('token');
  if (!token || selectedRentals.value.length === 0) return;

  try {
    for (const rental of selectedRentals.value) {
      const payload = {
        pc_id: rental.pc_id,
        user_id: userId,
        seller_id: rental.user_id,
        original_end: rental.rental[0].end_date,
        requested_end: new Date(new Date(rental.rental[0].end_date).getTime() + 30 * 24 * 60 * 60 * 1000),
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/buyer-moniter/rentalExtension`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    alert(`${selectedRentals.value.length}개의 연장 요청이 완료되었습니다.`);
  } catch (err) {
    alert('연장 요청 실패');
  } finally {
    closeContextMenu();
    selectedRentals.value = [];
    lastSelectedIndex.value = null;
  }
};
</script>

<style scoped>
.context-menu {
  position: fixed;
  z-index: 9999;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  min-width: 150px;
}

.context-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.context-menu li {
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
}

.context-menu li:hover {
  background-color: #f5f5f5;
}

.selected {
  background-color: #e6f7ff !important;
}
</style>

<style src="../../style/buyer_css/custom-moniter.css" scoped></style>