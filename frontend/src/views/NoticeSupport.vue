<template>
  <AdminLayout headerTitle="공지/FAQ/QnA">
    <div class="notice-support-container">
      <!-- 왼쪽 패널 -->
      <div class="left-panel">
        <!-- 공지사항 -->
        <div class="section">
          <h3>공지사항</h3>
          <ul>
            <li v-for="(item, index) in notices" :key="index">
              <span>{{ item.title }}</span>
              <span class="btn-group">
                <button>수정</button>
                <button>삭제</button>
                <span>{{ item.date }}</span>
              </span>
            </li>
          </ul>
          <div class="pagination">
            <button>&lt;</button><button>1</button><button>2</button><button>&gt;</button>
          </div>
        </div>

        <!-- FAQ -->
        <div class="section">
          <h3>자주 묻는 질문 (FAQ)</h3>
          <ul>
            <li v-for="(faq, index) in faqs" :key="index">
              <span>Q {{ faq }}</span>
              <span class="btn-group">
                <button>수정</button>
                <button>삭제</button>
              </span>
            </li>
          </ul>
          <div class="pagination">
            <button>&lt;</button><button>1</button><button>2</button><button>&gt;</button>
          </div>
        </div>

        <!-- QnA -->
        <div class="section">
          <h3>질문과 답변 (QnA)</h3>
          <ul>
            <li v-for="(qna, index) in qnas" :key="index">
              {{ index + 1 }}. {{ qna }}
            </li>
          </ul>
          <div class="pagination">
            <button>&lt;</button><button>1</button><button>2</button><button>&gt;</button>
          </div>
        </div>
      </div>

      <!-- 오른쪽 패널 -->
      <div class="right-panel">
        <div class="write-box">
          <h3>글쓰기</h3>
          <div class="options">
            <label><input type="checkbox" /> [공지]</label>
            <label><input type="checkbox" /> FAQ</label>
          </div>

          <input type="text" placeholder="제목을 입력하세요" />
          <textarea placeholder="내용을 입력하세요">공지드립니다..</textarea>

          <div class="file-upload" v-for="n in 2" :key="n">
            첨부파일{{ n }}:
            <input type="file" />
            <button>파일첨부</button>
            <button>보기</button>
          </div>

          <div class="alert-send">
            <label><input type="checkbox" /> 사용자에게 알림 발송</label>
          </div>

          <button class="btn-register">등록</button>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '../layouts/AdminLayout.vue';
const notices = [
  { title: '[공지] 서버 점검 안내', date: '2025.04.20' },
  { title: '[안내] 행사기간 시작', date: '2025.04.20' },
  { title: '[공지] 사용시 유의 사항', date: '2025.04.20' }
]

const faqs = [
  '접속이 자주 끊겨요',
  '추가 결제는 어떻게..',
  '상담 시간은 어떻게..'
]

const qnas = ['연장 문의', '문의', '결제가 안됐나요']
</script>

<style src="../style/notice-support.css"></style>
