<template>
  <div class="add-phrase-modal">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">제목</label>
        <input id="title" v-model="title" type="text" required />
      </div>

      <div class="form-group">
        <label for="message">상세 메시지</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>

      <div class="button-group">
        <button type="submit" class="submit-btn">저장</button>
        <button type="button" class="close-btn" @click="emit('close')">닫기</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['close']);

const title = ref('');
const message = ref('');

const handleSubmit = () => {
  if (!title.value || !message.value) return;
  // 저장 이벤트 발생
  alert(`제목: ${title.value}\n메시지: ${message.value}`);
  emit('close');
  // 예: emit 또는 axios 저장 처리
};
</script>

<style src="../style/add-phrase-modal.css" scoped></style>

export default {} 