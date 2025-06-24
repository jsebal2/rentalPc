<template>
  <Layout>
    <div class="message-container">
      <!-- 좌측 사용자 목록 -->
      <div class="user-list">
        <div class="tabs">
          <button class="tab active">전체</button>
          <button class="tab">안 읽음</button>
          <button class="tab">즐겨찾기</button>
        </div>
        <input class="search-box" placeholder="사용자 검색" />
        <div class="user-item" v-for="user in users" :key="user.id" @click="selectUser(user)">
          <div class="avatar"></div>
          <div class="user-info">
            <div class="name">{{ user.name }}</div>
            <div class="date">03.27</div>
          </div>
        </div>
      </div>

      <!-- 중앙 메세지 뷰 -->
      <div class="chat-view" v-if="selectedUser">
        <div class="chat-header">
          <div class="chat-title">{{ selectedUser.name }}</div>
        </div>
        <div class="chat-body" ref="chatBodyRef">
          <div
            class="message"
            v-for="msg in messages"
            :key="msg.id"
            :class="{ sent: msg.senderId === Number(loginUserId), received: msg.senderId !== Number(loginUserId) }"
          >
            <div class="meta">
              <span class="sender-name">
                {{ msg.senderId === Number(loginUserId) ? '나' : getUserNameById(msg.senderId) }}
              </span>
              <span class="timestamp">{{ formatTime(msg.createdAt) }}</span>
            </div>
            <div class="message-box">{{ msg.text }}</div>
          </div>
        </div>
        <div class="chat-input">
          <textarea
            placeholder="메세지 입력 창"
            v-model="newMessage"
            @keydown.enter="handleEnter"
          ></textarea>
          <div class="chat-actions">
            <button>첨부파일</button>
            <button @click="showPhrasesModal = true">자주 쓰는 문구</button>
            <button class="send-btn" @click="sendMessage">전송</button>
          </div>
        </div>
      </div>

      <!-- 우측 고객 정보 및 메모 -->
      <div class="side-panel" v-if="selectedUser">
        <div class="profile">
          <div class="avatar"></div>
          <div class="name">{{ selectedUser.name }}</div>
          <div class="date">03.27</div>
        </div>
        <div class="customer-info">고객정보<br />ex. 업체횟수</div>
        <div class="memo-box">상담 메모</div>
      </div>

      <div v-if="showPhrasesModal" class="modal-overlay">
        <CommonPhrasesModal
          v-if="showPhrasesModal"
          @close="showPhrasesModal = false"
          @select="handlePhraseSelect"
        />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import axios from 'axios'
import Layout from '../layouts/Layout.vue'
import CommonPhrasesModal from './CommonPhrasesModal.vue'
import { io } from 'socket.io-client'

const users = ref([])
const selectedUser = ref(null)
const messages = ref([])
const newMessage = ref('')
const showPhrasesModal = ref(false)
const chatBodyRef = ref(null)

const loginUserId = Number(localStorage.getItem('user_id'))

const socket = io(import.meta.env.VITE_API_URL)
socket.emit('join', loginUserId)

socket.on('receive_message', (msg) => {
  if (selectedUser.value && (
    msg.senderId === selectedUser.value.id || msg.receiverId === selectedUser.value.id
  )) {
    messages.value.push(msg)
    scrollToBottom()
  }
})

const fetchChatUsers = async () => {
  if (!loginUserId) return

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/chat/users/${loginUserId}`)
    users.value = res.data
    if (users.value.length > 0) {
      selectedUser.value = users.value[0]
    }
  } catch (err) {
    console.error('채팅 유저 목록 가져오기 실패:', err)
  }
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return

  const msg = {
    senderId: Number(loginUserId),
    receiverId: selectedUser.value.id,
    text: newMessage.value
  }

  socket.emit('send_message', msg)
  newMessage.value = ''
}

const selectUser = async (user) => {
  selectedUser.value = user

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/chat/messages?user1=${loginUserId}&user2=${user.id}`)
  messages.value = res.data

  scrollToBottom()
}

function handleKeydown(e) {
  if (showPhrasesModal.value && e.key === 'Escape') {
    showPhrasesModal.value = false
  }
}

// setup 내부에 추가
function handlePhraseSelect(phrase) {
  newMessage.value = phrase
  showPhrasesModal.value = false

  // 실제로 채팅 전송
  const msg = {
    senderId: Number(loginUserId),
    receiverId: selectedUser.value.id,
    text: phrase
  }

  socket.emit('send_message', msg)
  newMessage.value = ''
}

// 시간 포맷 (HH:mm)
function formatTime(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
}

// 사용자 이름 찾기
function getUserNameById(userId) {
  const user = users.value.find(u => u.id === userId)
  return user ? user.name : '알 수 없음'
}

function handleEnter(e) {
  if (e.shiftKey) return // Shift+Enter는 줄바꿈
  e.preventDefault()
  sendMessage()
}

function scrollToBottom() {
  nextTick(() => {
    if (chatBodyRef.value) {
      chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight
    }
  })
}

onMounted(() => {
  fetchChatUsers()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style src="../style/message-chat.css" scoped></style>
