<template>
  <div class="modal-backdrop" @click.self="emit('close')">
    <div class="modal">
      <h3>사용자 수정</h3>
      <label>이름 <input v-model="edited.name" /></label>
      <label>이메일 <input v-model="edited.email" /></label>
      <label>역할
        <select v-model="edited.role">
          <option value="Admin">관리자</option>
          <option value="Seller">판매자</option>
          <option value="Customer">일반 고객</option>
        </select>
      </label>
      <label>상태
        <select v-model="edited.status">
          <option value="ACTIVE">활성화</option>
          <option value="INACTIVE">비활성화</option>
        </select>
      </label>
      <div class="modal-actions">
        <button @click="save">저장</button>
        <button @click="$emit('close')">취소</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue'

const props = defineProps<{ user: any }>()
const emit = defineEmits(['save', 'close'])

const edited = ref({ ...props.user })

watch(() => props.user, (newUser) => {
  edited.value = { ...newUser }
})

function save() {
  emit('save', edited.value)
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 24px 28px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  width: 360px;
  max-width: 90%;
  font-family: 'Noto Sans KR', sans-serif;
  animation: fadeIn 0.25s ease;
}

.modal h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
}

.modal label {
  display: block;
  margin-bottom: 12px;
  color: #444;
  font-size: 14px;
}

.modal input,
.modal select {
  width: 100%;
  padding: 8px 10px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.modal input:focus,
.modal select:focus {
  border-color: #4a90e2;
  outline: none;
}

.modal-actions {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.modal-actions button {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.modal-actions button:first-child {
  background-color: #4a90e2;
  color: white;
}

.modal-actions button:first-child:hover {
  background-color: #357bd8;
}

.modal-actions button:last-child {
  background-color: #e0e0e0;
  color: #333;
}

.modal-actions button:last-child:hover {
  background-color: #d5d5d5;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

</style>
