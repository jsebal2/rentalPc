<template>
  <div class="common-phrases-modal">
    <h2>자주 쓰는 문구</h2>

    <div class="phrase-container">
      <div class="phrase-header">
        <span>인사말</span>
        <div class="phrase-actions">
          <button class="edit-btn" @click="editPhrase">수정</button>
          <button class="delete-btn" @click="deletePhrase">삭제</button>
        </div>
      </div>

      <div class="phrase-list">
        <div
          v-for="(phrase, index) in phrases"
          :key="index"
          class="phrase-item"
        >
          <span>{{ phrase.text }}</span>
          <button class="insert-btn" @click="$emit('select', phrase.text)">채팅에 삽입</button>
        </div>
      </div>
    </div>

    <div class="button-group">
      <button class="cancel-btn" @click="$emit('close')">닫기</button>
      <button class="submit-btn" @click="toggleAddInput = !toggleAddInput">문구 추가</button>
    </div>

    <div v-if="toggleAddInput" class="add-phrase-form">
      <input v-model="newPhrase" placeholder="새 문구 입력" />
      <button class="save-btn" @click="addPhrase">저장</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const emit = defineEmits(['close', 'select'])

const phrases = ref<{ id: number; text: string }[]>([])
const toggleAddInput = ref(false)
const newPhrase = ref('')
const userId = localStorage.getItem('user_id')

const fetchPhrases = async () => {
  if (!userId) return
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/chat/phrases/${userId}`)
    phrases.value = res.data
  } catch (err) {
    console.error('문구 불러오기 실패:', err)
  }
}

const addPhrase = async () => {
  const trimmed = newPhrase.value.trim()
  if (!trimmed || !userId) return

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/chat/phrases`, {
      userId,
      content: trimmed,
    })
    phrases.value.unshift(res.data)
    newPhrase.value = ''
    toggleAddInput.value = false
  } catch (err) {
    console.error('문구 추가 실패:', err)
  }
}

const editPhrase = () => {
  alert('편집 기능은 추후 구현 예정입니다.')
}

const deletePhrase = () => {
  alert('삭제 기능은 추후 구현 예정입니다.')
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (toggleAddInput.value) {
      toggleAddInput.value = false
    } else {
      emit('close')
    }
  }
}

onMounted(() => {
  fetchPhrases()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style src="../style/common-phrases-modal.css" scoped></style>
