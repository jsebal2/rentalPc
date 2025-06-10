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
            <label for = 'noticeType'>유형 선택</label>
            <select id="noticeType" v-model="noticeType">
              <option value="GENERAL">공지</option>
              <option value="FAQ">FAQ</option>
            </select>
            <label for="">
              <input type="checkbox" v-model="isPinned" />
              고정 공지로 등록
            </label>
          </div>

          <input type="text" v-model="title" placeholder="제목을 입력하세요" />
          <textarea v-model="content" placeholder="내용을 입력하세요">공지드립니다..</textarea>

          <div class="file-upload" v-for="n in 2" :key="n">
            첨부파일{{ n }}:
            <input type="file" />
            <button>파일첨부</button>
            <button>보기</button>
          </div>

          <div class="alert-send">
            <label><input type="checkbox" /> 사용자에게 알림 발송</label>
          </div>

          <button class="btn-register" @click="submitNotice">등록</button>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '../../layouts/AdminLayout.vue';
import { ref } from 'vue';
import axios from 'axios';

const noticeType = ref('GENERAL');
const title = ref('');
const content = ref('');
const token = localStorage.getItem('token');
const isPinned = ref(false);

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

const submitNotice = async () => {
  if (!title.value || !content.value) {
    alert('제목과 내용을 입력해주세요.');
    return;
  }

  try {
    const payload = {
      title: title.value,
      content: content.value,
      type: noticeType.value,
      pinned: isPinned.value,
    };
    
    const response = await axios.post(import.meta.env.VITE_API_URL + '/notice', payload, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200 || response.status === 201) {
      alert('공지가 등록되었습니다.');
      title.value = '';
      content.value = '';
    } else {
      alert('공지 등록에 실패했습니다.');
    }
  } catch (error) {
    console.error('공지 등록 오류:', error);
    alert('공지 등록 중 오류가 발생했습니다.');
  }
}
</script>

<style src="../../style/seller_css/notice-support.css"></style>
