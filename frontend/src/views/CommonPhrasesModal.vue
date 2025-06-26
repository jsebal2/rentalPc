<template>
  <div class="common-phrases-modal">
    <h2>자주 쓰는 문구</h2>

    <div class="phrase-container">
      <div class="phrase-header">
        <span>인사말</span>
      </div>

      <div class="phrase-list">
        <div
          v-for="(phrase, index) in phrases"
          :key="index"
          class="phrase-item"
        >
          <!-- 편집 상태일 때 -->
          <div v-if="editId === phrase.id">
            <input v-model="editTitle" placeholder="제목 수정" />
            <input v-model="editText" placeholder="문구 수정" />
            <button @click="saveEdit">저장</button>
            <button @click="cancelEdit">취소</button>
          </div>

          <!-- 일반 보기 상태일 때 -->
          <div class="phrase-box" v-else>
            <strong>{{ phrase.title }}</strong>
            <div class="phrase-buttons">
              <button class="insert-btn" @click="$emit('select', phrase.text)">채팅에 삽입</button>
              <button class="edit-btn" @click="startEdit(phrase)">수정</button>
              <button class="delete-btn" @click="deletePhrase(phrase.id)">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="button-group">
      <button class="cancel-btn" @click="$emit('close')">닫기</button>
      <button class="submit-btn" @click="toggleAddInput = !toggleAddInput">문구 추가</button>
    </div>

    <div v-if="toggleAddInput" class="add-phrase-form">
      <div>
        <input v-model="newtitle" placeholder="제목 입력" />
        <input v-model="newPhrase" placeholder="새 문구 입력" />
      </div>
      <button class="save-btn" @click="addPhrase">저장</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const emit = defineEmits(['close', 'select'])

const phrases = ref<{ id: number; text: string; title: string }[]>([])
const toggleAddInput = ref(false)
const newPhrase = ref('')
const newtitle = ref('')

const editId = ref<number | null>(null)
const editTitle = ref('')
const editText = ref('')

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
  const trtitle = newtitle.value.trim()
  if (!trimmed || !trtitle || !userId) return

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/chat/phrases`, {
      userId,
      content: trimmed,
      title: trtitle,
    })
    phrases.value.unshift(res.data)
    newPhrase.value = ''
    newtitle.value = ''
    toggleAddInput.value = false
  } catch (err) {
    console.error('문구 추가 실패:', err)
  }
}

const startEdit = (phrase: { id: number; text: string; title: string }) => {
  editId.value = phrase.id
  editText.value = phrase.text
  editTitle.value = phrase.title
}

const cancelEdit = () => {
  editId.value = null
  editText.value = ''
  editTitle.value = ''
}

const saveEdit = async () => {
  if (!editId.value) return
  try {
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/chat/phrases/${editId.value}`, {
      text: editText.value,
      title: editTitle.value
    })
    const index = phrases.value.findIndex(p => p.id === editId.value)
    if (index !== -1) phrases.value[index] = res.data
    cancelEdit()
  } catch (err) {
    console.error('문구 수정 실패:', err)
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (toggleAddInput.value) toggleAddInput.value = false
    else emit('close')
  }
}

const deletePhrase = async (id: number) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/chat/phrases/${id}`)
    phrases.value = phrases.value.filter(p => p.id !== id)
  } catch (err) {
    console.error('문구 삭제 실패:', err)
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
