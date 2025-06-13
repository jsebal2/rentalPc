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
        <div class="user-item" v-for="user in users" :key="user.id">
          <div class="avatar"></div>
          <div class="user-info">
            <div class="name">{{ user.name }}</div>
            <div class="date">03.27</div>
          </div>
        </div>
      </div>

      <!-- 중앙 메세지 뷰 -->
      <div class="chat-view">
        <div class="chat-header">
          <div class="chat-title">{{ selectedUser.name }}</div>
        </div>
        <div class="chat-body">
          <!-- 여기에 메세지 대화내용이 출력될 부분 -->
          <div class="message" v-for="msg in messages" :key="msg.id">
            <div class="message-box">{{ msg.text }}</div>
          </div>
        </div>
        <div class="chat-input">
          <textarea placeholder="메세지 입력 창" v-model="newMessage"></textarea>
          <div class="chat-actions">
            <button>첨부파일</button>
            <button @click="showPhrasesModal = true">자주 쓰는 문구</button>
            <button class="send-btn" @click="sendMessage">전송</button>
          </div>
        </div>
      </div>

      <!-- 우측 고객 정보 및 메모 -->
      <div class="side-panel">
        <div class="profile">
          <div class="avatar"></div>
          <div class="name">{{ selectedUser.name }}</div>
          <div class="date">03.27</div>
        </div>
        <div class="customer-info">고객정보<br/>ex. 업체횟수</div>
        <div class="memo-box">상담 메모</div>
      </div>
      <div v-if="showPhrasesModal" class="modal-overlay">
        <CommonPhrasesModal @close="showPhrasesModal = false" />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Layout from '../layouts/Layout.vue';
import CommonPhrasesModal from './CommonPhrasesModal.vue';

const users = ref([
  { id: 1, name: '이름' },
  { id: 2, name: '홍길동' },
]);
const selectedUser = ref(users.value[0]);
const messages = ref([
  { id: 1, text: '안녕하세요' },
  { id: 2, text: '무엇을 도와드릴까요?' },
]);
const newMessage = ref('');
const showPhrasesModal = ref(false);

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ id: Date.now(), text: newMessage.value });
    newMessage.value = '';
  }
};

function handleKeydown(e) {
  if (showPhrasesModal.value && e.key === 'Escape') {
    showPhrasesModal.value = false;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style src="../style/message-chat.css" scoped></style> 