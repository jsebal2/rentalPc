<template>
  <div class="bulk-pc-register">
    <h2>대량 PC 등록</h2>

    <div class="tab-buttons">
      <button :class="{ active: tab === 'excel' }" @click="tab = 'excel'">엑셀 업로드</button>
      <button :class="{ active: tab === 'manual' }" @click="tab = 'manual'">직접 입력</button>
    </div>

    <!-- 엑셀 업로드 영역 -->
    <div v-if="tab === 'excel'" class="drop-area">
      <p>파일을 이곳에 드래그 해주세요</p>
      <span class="upload-text">찾아보기</span>
    </div>

    <div v-if="tab === 'excel'">
      <p class="file-info">파일 형식 : .xlsx<br />최대 크기 : 10MB</p>
      <p class="sample-download">다운로드 샘플 파일</p>
    </div>

    <!-- 직접 입력 테이블 -->
    <div v-if="tab === 'manual'">
    <table class="pc-table">
      <thead>
        <tr>
          <th>PC ID</th>
          <th>PC 위치</th>
          <th>임대료</th>
          <th>CPU</th>
          <th>RAM</th>
          <th>SSD</th>
          <th>메모</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td><input v-model="row.pcId" /></td>
          <td><input v-model="row.location" /></td>
          <td><input v-model="row.rentalFee" /></td>
          <td><input v-model="row.cpu" /></td>
          <td><input v-model="row.ram" /></td>
          <td><input v-model="row.ssd" /></td>
          <td><input v-model="row.memo" /></td>
        </tr>
      </tbody>
    </table>
    </div>

    <div v-if="tab === 'manual'">
      <button class="add-row-btn" @click="addRow">+행추가</button>
    </div>

    <!-- 하단 버튼 -->
    <div class="button-group">
      <button class="cancel-btn" @click="onCancel">취소</button>
      <button class="submit-btn">등록</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const emit = defineEmits(['close'])

const tab = ref<'excel' | 'manual'>('excel')

const rows = ref([
  { pcId: 'PC-001', location: 'A열 1', rentalFee: '10,000', cpu: 'Ryzen 5700', ram: '32GB', ssd: '250GB', memo: '-' },
  { pcId: 'PC-002', location: 'A열 2', rentalFee: '10,000', cpu: 'Ryzen 5700', ram: '32GB', ssd: '250GB', memo: '-' },
  { pcId: 'PC-003', location: 'A열 3', rentalFee: '10,000', cpu: 'Ryzen 5700', ram: '32GB', ssd: '250GB', memo: '-' },
])

function addRow() {
  rows.value.push({ pcId: '', location: '', rentalFee: '', cpu: '', ram: '', ssd: '', memo: '' })
}

function onCancel() {
  emit('close')
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style src="../../style/seller_css/bulk-pc-register.css" scoped></style>