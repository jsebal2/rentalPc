<template>
  <div class="bulk-pc-register">
    <h2>대량 PC 등록</h2>

    <div class="tab-buttons">
      <button :class="{ active: tab === 'excel' }" @click="tab = 'excel'">엑셀 업로드</button>
      <button :class="{ active: tab === 'manual' }" @click="tab = 'manual'">직접 입력</button>
    </div>

    <!-- 엑셀 업로드 영역 -->
    <div v-if="tab === 'excel'" class="drop-area" @dragover.prevent @drop="onDropFile">
      <p v-if="!uploadedFileName">파일을 이곳에 드래그 해주세요</p>
      <p v-else>업로드된 파일 : <strong>{{ uploadedFileName }}</strong></p>
      <label class="upload-text">찾아보기
        <input type="file" accept=".xlsx" @change="onFileChange" hidden />
      </label>
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
          <th>제조사</th>
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
          <td><input v-model="row.manufacturer" /></td>
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
      <button class="submit-btn" @click="submitExcelData">등록</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as XLSX from 'xlsx'
import axios from 'axios'

const emit = defineEmits(['close'])
const uploadedFileName = ref('')

const tab = ref<'excel' | 'manual'>('excel')

const rows = ref([
  { pcId: 'PC-001', location: 'A열 1', rentalFee: '10,000', manufacturer: 'AMD', cpu: 'Ryzen 5700', ram: '32GB', ssd: '250GB', memo: '-' },
  { pcId: 'PC-002', location: 'A열 2', rentalFee: '10,000', manufacturer: 'AMD', cpu: 'Ryzen 5700', ram: '32GB', ssd: '250GB', memo: '-' },
  { pcId: 'PC-003', location: 'A열 3', rentalFee: '10,000', manufacturer: 'AMD', cpu: 'Ryzen 5700', ram: '32GB', ssd: '250GB', memo: '-' },
])

function addRow() {
  rows.value.push({ pcId: '', location: '', rentalFee: '', manufacturer: '',cpu: '', ram: '', ssd: '', memo: ''})
}

function onCancel() {
  emit('close')
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  uploadedFileName.value = file.name
  parseExcel(file)
}

function onDropFile(e: DragEvent) {
  const file = e.dataTransfer?.files?.[0]
  if (!file) return
  uploadedFileName.value = file.name
  parseExcel(file)
}

function parseExcel(file: File) {
  const reader = new FileReader()
  reader.onload = (e) => {
    const data = new Uint8Array(e.target?.result as ArrayBuffer)
    const workbook = XLSX.read(data, { type: 'array' })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const json = XLSX.utils.sheet_to_json(sheet, {defval: ''})

    rows.value = json.map((row: any) => ({
      pcId: row['PC ID'] || '',
      location: row['PC 위치'] || '',
      rentalFee: row['임대료'] || '',
      manufacturer: row['제조사'] || '',
      cpu: row['CPU'] || '',
      ram: row['RAM'] || '',
      ssd: row['SSD'] || '',
      memo: row['메모'] || '',
    }))
  }
  reader.readAsArrayBuffer(file)
}

async function submitExcelData() {
  try {
    const token = localStorage.getItem('token')

    const payload = {
  rows: rows.value.map((row) => ({
    pc_id: row.pcId,
    location: row.location,
    rental_fee: row.rentalFee,
    manufacturer: row.manufacturer,
    cpu: row.cpu,
    ram: row.ram,
    ssd: row.ssd,
    memo: row.memo,
  })),
};

    console.log(payload)

    await axios.post(import.meta.env.VITE_API_URL + '/pcs/bulk', payload, {
      headers: {
        Authorization: `Bearer ${token}`,},
    })

    alert('등록 완료')
    emit('close')
  } catch (error) {
    console.error('등록 오류:', error)
    alert('등록 중 오류가 발생했습니다.')
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