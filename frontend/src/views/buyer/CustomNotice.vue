<template>
  <Layout headerTitle="고객 공지사항">
    <div class="notice-question-container">
      <!-- 탭 메뉴 -->
      <div class="tab-buttons">
        <div class="tab-buttons-left">
            <button :class="{ active: currentTab === 'notice' }" @click="currentTab = 'notice'">공지사항</button>
            <button :class="{ active: currentTab === 'question' }" @click="currentTab = 'question'">질문</button>
        </div>
        <button v-if="currentTab === 'question'" class="write-btn" @click="showForm = !showForm">+ 작성하기</button>
      </div>

      <!-- 공지사항 -->
      <div v-if="currentTab === 'notice'" class="notice-list">
        <div class="card">
          <h3>서버 점검 안내 (6/20)</h3>
          <p>6/20(목) 오전 2시~5시 서버 점검이 예정되어 있습니다.</p>
        </div>
        <div class="card">
          <h3>신규 PC 입고 안내</h3>
          <p>신규 고성능 원격 PC 10대 입고되었습니다.</p>
        </div>
      </div>

      <!-- 질문 -->
      <div v-if="currentTab === 'question'" class="question-section">
        <div v-if="showForm" class="question-bm"></div>
        <div v-if="showForm" class="question-form">
          <div class="title-box">
            <input type="text" placeholder="제목을 입력하세요" v-model="newQuestion.title" />
            <select name="notice-seller" id="notice-seller" required>
              <option value="" disabled selected>판매자 선택</option>
              <option value="test">test</option>
              <option value="remote">remote</option>
            </select>
          </div>
          <textarea placeholder="질문 내용을 입력하세요" v-model="newQuestion.content"></textarea>
          <div class="submit-btn-box">
              <button class="submit-btn" @click="submitQuestion">작성 완료</button>
              <button class="submit-btn" @click="showForm = !showForm">취소</button>
          </div>
        </div>

        <div class="card" v-for="(q, index) in questions" :key="index">
          <h3>{{ q.title }}</h3>
          <p>{{ q.content }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue'
import { ref } from 'vue'

const currentTab = ref<'notice' | 'question'>('notice')
const showForm = ref(false)

const questions = ref([
  { title: '원격 접속 중 화면 멈춤현상', content: '화면이 갑자기 멈춰서 다시 접속했더니 해결됨...' }
])

const newQuestion = ref({ title: '', content: '' })

const submitQuestion = () => {
  if (newQuestion.value.title && newQuestion.value.content) {
    questions.value.unshift({ ...newQuestion.value })
    newQuestion.value.title = ''
    newQuestion.value.content = ''
    showForm.value = false
  }
}
</script>


<style src="../../style/buyer_css/custom-notice.css" scoped></style>