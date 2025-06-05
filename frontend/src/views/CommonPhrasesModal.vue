<template>
  <div class="common-phrases-modal">
    <h2>자주 쓰는 문구</h2>
    <div class="phrase-container">
      <div class="phrase-header">
        <span>인사말</span>
        <div class="phrase-actions">
          <button class="edit-btn" @click="editPhrase">✏️</button>
          <button class="delete-btn" @click="deletePhrase">🗑️</button>
        </div>
      </div>
      <div class="phrase-list">
        <div v-for="(phrase, index) in phrases" :key="index" class="phrase-item">
          {{ phrase }}
        </div>
      </div>
    </div>

    <div class="button-group">
      <button class="cancel-btn" @click="$emit('close')">닫기</button>
      <button class="submit-btn" @click="showAddPhraseModal = true">문구 추가</button>
    </div>
    <div v-if="showAddPhraseModal" class="modal-overlay">
      <AddPhraseModal @close="showAddPhraseModal = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AddPhraseModal from './AddPhraseModal.vue';

const phrases = ref([
  '안녕하세요, 무엇을 도와드릴까요?',
  '감사합니다. 좋은 하루 되세요!',
]);

const editPhrase = () => {
  alert('편집 기능은 추후 구현 예정입니다.');
};

const addPhrase = () => {
  const newPhrase = prompt('새 문구를 입력하세요');
  if (newPhrase) phrases.value.push(newPhrase);
};

const deletePhrase = () => {
  if (phrases.value.length > 0) {
    phrases.value.pop();
  }
};

const showAddPhraseModal = ref(false);
const emit = defineEmits(['close']);

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (showAddPhraseModal.value) {
      showAddPhraseModal.value = false;
      return;
    }
    emit('close');
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style src="../style/common-phrases-modal.css"></style> 