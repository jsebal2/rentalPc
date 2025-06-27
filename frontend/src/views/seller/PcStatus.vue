<template>
  <Layout>
    <div class="main-inner">
      <h1 class="main-title">PC 상태 관리</h1>
      <div class="search-box">
        <input v-model="searchKeyword" class="search-input" type="text" placeholder="검색어를 입력하세요 (PC ID, PC위치, CPU, RAN, SSD, 대여자명)" @input="onTyping">
      </div>
      <div class="table-section">
        <div class="table-header-row">
          <div class="table-title">PC 목록</div>
          <div class="add-btn-group">
            <button class="add-btn" @click="toggleEdit">{{ isEditing ? '저장' : '수정' }}</button>
            <button class="add-btn" @click="showAddPopup = true">PC 등록</button>
            <button class="add-btn" @click="showBulkRegister = true">PC 다량 등록</button>
            <button class="add-btn" @click="pcExtension">연장</button>
          </div>
        </div>
        <table class="dummy-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>PC ID</th>
              <th>PC 위치</th>
              <th>대여상태</th>
              <th>임대료</th>
              <th>CPU</th>
              <th>RAM</th>
              <th>SSD</th>
              <th>대여자명</th>
              <th>연장 신청</th>
            </tr>
          </thead>
          <tbody>
            <tr
             v-for="(pc, index) in pcList"
              :key="pc.pc_id"
              :class="{ selected: selectedRows.includes(pc.no) }"
              @click="selectPc(pc, index, $event)"
              @contextmenu.prevent="openContextMenu(pc, $event)">
              <td>{{ pc.no }}</td>
              <td>
                <span v-if="!isEditing">{{ pc.pcName }}</span>
                <input v-else v-model="pc.pcName" />
              </td>
              <td>
                <span v-if="!isEditing">{{ pc.location }}</span>
                <input v-else v-model="pc.location" />
              </td>
              <td>
                <span v-if="!isEditing">{{ stateMap[pc.state]||'-' }}</span>
                <input v-else v-model="pc.state" />
              </td>
              <td>
                <span v-if="!isEditing">{{ Number(pc.price).toLocaleString() }}</span>
                <input v-else v-model="pc.price" />
              </td> 
              <td class="cpu-column">
                <span v-if="!isEditing">{{ pc.cpu }}</span>
                <input v-else v-model="pc.cpu" @input="pc.cpu = pc.cpu.replace(/\s+/g, '').toUpperCase()" />
              </td>
              <td>
                <span v-if="!isEditing">{{ pc.ram }}</span>
                <input v-else v-model="pc.ram" />
              </td>
              <td>
                <span v-if="!isEditing">{{ pc.ssd }}</span>
                <input v-else v-model="pc.ssd" />
              </td>
              <td>
                <span>{{ pc.renter?.name || '미대여' }}</span>
              </td>
              <td>
                <span
                  class="pc_status_extension"
                  :class="{ active: pc.rental_extensions?.[0]?.status === 'PENDING' }"
                  :disabled="pc.rental_extensions?.[0]?.status !== 'PENDING'"
                >
                    연장
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div v-if="showAddPopup" class="modal-overlay">
      <PcAddPopup @close="showAddPopup = false" @registered="fetchPcList" :cpuModels="cpuModels" :cpuManufacturers="Object.keys(cpuModels)" />
    </div>
    <div v-if="showBulkRegister" class="modal-overlay">
      <BulkPcRegister @close="showBulkRegister = false" />
    </div>
    <DeleteConfirmModal
      v-if="showDeleteConfirm"
      :pcToDelete="pcToDelete"
      :count="count"
      @confirm="handleDelete"
      @cancel="showDeleteConfirm = false"
    />
    <PcRentalModal 
      v-if="showPcRentalModal"
      :selectedPcIds="selectedRows.slice()"
      @close="showPcRentalModal = false"
      @rent="submitRentalInfo"
    />
    <PcDetailModal
      v-if="showDetailModal"
      :pc="detailPc"
      @close="showDetailModal = false"
    />
    <div
        v-if="contextMenu.visible"
        class="context-menu"
        :style="{ top: contextMenu.y + 'px', left: contextMenu.x + 'px' }">
      <ul>
        <li @click="handleContextAction('rent')">대여</li>
        <li @click="handleContextAction('delete')">삭제</li>
        <li @click="handleContextAction('details')">상세 보기</li>
      </ul>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted} from 'vue';
import Layout from '../../layouts/Layout.vue';
import PcAddPopup from './PcAddPopup.vue';
import BulkPcRegister from './BulkPcRegister.vue';
import DeleteConfirmModal from './DeleteConfirmModal.vue';
import PcRentalModal from './PcRentalModal.vue';
import PcDetailModal from './PcDetailModal.vue';

const showAddPopup = ref(false);
const showBulkRegister = ref(false);

const isEditing = ref(false);
const pcList = ref([]);
const selectedPc = ref<number | null>(null);
const selectedRows = ref<number[]>([]);
const lastClickedIndex = ref<number | null>(null);
const showDeleteConfirm = ref(false);
const pcToDelete = ref<any>(null);
const count = ref(1);
const showPcRentalModal = ref(false);
const isSubmitting = ref(false);
const searchKeyword = ref('');

const showDetailModal = ref(false);
const detailPc = ref(null);
const cpuModels = {
  Intel: ['I5-4650', 'E52660'],
  AMD: [
    'RYZEN 2200G', 'RYZEN 4350G', 'RYZEN 4600G', 'RYZEN 4650G',
    'RYZEN 5500GT', 'RYZEN 5600G', 'RYZEN 5700G', 'RYZEN 8700G',
    'RYZEN 8745hs', 'RYZEN 6850H', 'RYZEN 1700', 'RYZEN 1700X',
    'RYZEN 2600X', 'RYZEN 2700X', 'RYZEN 3700X', 'RYZEN 3800X',
    'RYZEN 5600X', 'RYZEN 5700X'
  ]
}




const fetchPcList = async () => {
  const token = localStorage.getItem('token');

  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + '/pcs/list', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: searchKeyword.value
      }
    });

    // 번호를 부여
    pcList.value = res.data.map((pc: any, index: number) => ({
      ...pc,
      no: index + 1,
    }));
    
  } catch (error) {
    console.error('PC 목록 조회 오류:', error);
  }
};

const toggleEdit = async () => {
  if (!isEditing.value) {
    isEditing.value = true
    return
  }

  try {
    await Promise.all(
      pcList.value.map(({ pc_id, ...pcData }) =>
        axios.put(`${import.meta.env.VITE_API_URL}/pcs/${pc_id}`, pcData)
      )
    )
    alert('모든 수정사항 저장 완료')
    isEditing.value = false
  } catch (err) {
    console.error('저장 오류:', err)
    alert('저장 실패')
  }
}

const selectPc = (pc: any, index: number, event: MouseEvent) => {
  const no = pc.no;

  if (event.ctrlKey || event.metaKey) {
    // Ctrl: 토글 선택
    if (selectedRows.value.includes(no)) {
      selectedRows.value = selectedRows.value.filter(n => n !== no);
    } else {
      selectedRows.value.push(no);
    }
    lastClickedIndex.value = index;
  } else if (event.shiftKey && lastClickedIndex.value !== null) {
    // Shift: 범위 선택
    const start = Math.min(lastClickedIndex.value, index);
    const end = Math.max(lastClickedIndex.value, index);
    const range = pcList.value.slice(start, end + 1).map(p => p.no);
    selectedRows.value = Array.from(new Set([...selectedRows.value, ...range]));
  } else {
    // 일반 클릭: 단일 선택
    selectedRows.value = [no];
    lastClickedIndex.value = index;
  }
};

const contextMenu = ref({
  visible: false,
  x: 0,
  y: 0,
  pc: null as any,
});

const openContextMenu = (pc: any, event: MouseEvent) => {
  contextMenu.value = {
    visible: true,
    x: event.clientX,
    y: event.clientY,
    pc,
  };
};

const closeContextMenu = () => {
  contextMenu.value.visible = false;
};

const handleContextAction = async(action: string) => {
  const pc = contextMenu.value.pc;
  if (!pc) return;

  switch (action) {
    case 'rent':
      showPcRentalModal.value = true;
      break;
    case 'delete':
      pcToDelete.value = pc;
      count.value = selectedRows.value.includes(pc.no) ? selectedRows.value.length : 1;
      showDeleteConfirm.value = true;
      break;
    case 'details':
        // 상세 정보가 부족할 경우, 서버에서 최신 정보 요청
      detailPc.value = pc;
      showDetailModal.value = true;
      break;
  }
  closeContextMenu();
};

const handleDelete = async () => {
  try {
    const idsToDelete = selectedRows.value.includes(pcToDelete.value.no)
      ? selectedRows.value
      : [pcToDelete.value.no];

    // 예: pc_id 대신 no를 넘긴다면 서버에서도 그 기준을 처리해야 함
    await Promise.all(
      idsToDelete.map(no => {
        const target = pcList.value.find(pc => pc.no === no);
        if (!target) return;
        return axios.delete(`${import.meta.env.VITE_API_URL}/pcs/${target.pc_id}`);
      })
    );

    alert(`${idsToDelete.length}개 항목 삭제 완료`);
    showDeleteConfirm.value = false;
    fetchPcList(); // 새로고침
  } catch (error) {
    console.error('삭제 실패:', error);
    alert('삭제 중 오류가 발생했습니다.');
  }
};

const submitRentalInfo = async ({ userId, startDate, endDate }) => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  try {
    const selectedPcs = pcList.value.filter(pc => selectedRows.value.includes(pc.no));
    if (selectedPcs.length === 0) {
      alert('선택된 PC가 없습니다.');
      return;
    }

    const payload = selectedPcs.map(pc => ({
      pc_id: pc.pc_id,
      user_id: userId,
      start_date: startDate,
      end_date: endDate,
    }));

    const results = await Promise.allSettled(
      payload.map(rental =>
        axios.post(`${import.meta.env.VITE_API_URL}/pcs/rent`, rental)
      )
    );

    const successCount = results.filter(r => r.status === 'fulfilled').length;
    const failureCount = results.length - successCount;

    alert(`${successCount}개 대여 성공, ${failureCount}개 실패`);
    showPcRentalModal.value = false;
    fetchPcList(); // 새로고침
  } catch (err) {
    console.error('대여 처리 실패:', err);
    alert('대여 요청 중 오류 발생');
  } finally {
    isSubmitting.value = false;
  }
};

const stateMap = {
  AVAILABLE: '대여 가능',
  IN_USE: '대여 중',
  MAINTENANCE: '수리 중',
};

const pcExtension = async () => {
  const selectedPcs = pcList.value.filter(pc =>
    selectedRows.value.includes(pc.no) &&
    pc.rental_extensions?.[0]?.status === 'PENDING'
  );

  if (selectedPcs.length === 0) {
    alert('선택된 PC가 없습니다.');
    return;
  }

  try {
    const payload = selectedPcs.map(pc => ({
      pc_id: pc.pc_id,
      user_id: pc.rental[0].user_id,
    }));
    console.log(payload);
    await Promise.all(
      payload.map(p =>
        axios.put(`${import.meta.env.VITE_API_URL}/pcs/rentalExtension`, p)
      )
    );

    alert(`${payload.length}개 연장 승인 완료`);
    fetchPcList(); // 새로고침
  } catch (err) {
    console.error('연장 승인 실패:', err);
    alert('연장 승인 중 오류가 발생했습니다.');
  }
};



// 외부 클릭 시 우클릭 메뉴 닫기
document.addEventListener('click', closeContextMenu);

//pc상태 관리 검색
const onTyping = () => {
  fetchPcList();
};

onMounted(() => {
  fetchPcList();
})

</script>

<style src="../../style/seller_css/pc-status.css" scoped></style>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
</style> 