<template>
  <div>
    <Layout headerTitle="공지/FAQ/QnA">
      <div class="notice-support-container">
        <!-- 왼쪽 패널 -->
      <div class="left-panel">
        <!-- 공지사항 -->
        <div class="section">
          <h3>공지사항</h3>
          <ul>
            <li v-for="(item, index) in [...notices, ...Array(Math.max(0, 5 - notices.length)).fill(null)]" :key="index">
              <template v-if="item">
                <span class="title-clickable" @click="openModal(item)">{{ item.title }}</span>
                <span class="btn-group">
                  <button @click="startEditNotice(item)">수정</button>
                <button @click="deleteNotice(item.notice_id)">삭제</button>
                <span>{{ item.created_at.slice(0, 10) }}</span>
              </span>
              </template>
              <template v-else>
                <span class="empty-placeholder">&nbsp;</span>
              </template>
            </li>





          </ul>
          <div class="pagination">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"> &lt;</button>
            <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{'active': currentPage === page}">{{ page }}</button>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"> &gt;</button>
          </div>
        </div>

        <!-- FAQ -->
        <div class="section">
          <h3>자주 묻는 질문 (FAQ)</h3>
          <ul>
            <li v-for="(faq, index) in [...faqs, ...Array(Math.max(0, 5 - faqs.length)).fill(null)]" :key="index">
              <template v-if="faq">
                <span class="title-clickable" @click="openModal(faq)">Q. {{ faq.title }}</span>
                <span class="btn-group">
                  <button @click="startEditNotice(faq)">수정</button>
                  <button @click="deleteNotice(faq.notice_id)">삭제</button>
                </span>
              </template>
              <template v-else>
                <span class="empty-placeholder">&nbsp;</span>
              </template>
            </li>
          </ul>
          <div class="pagination">
            <button @click="goToFaqPage(faqCurrentPage - 1)" :disabled="faqCurrentPage === 1"> &lt;</button>
            <button v-for="page in visibleFaqPages" :key="page" @click="goToFaqPage(page)" :class="{'active': faqCurrentPage === page}">{{ page }}</button>
            <button @click="goToFaqPage(faqCurrentPage + 1)" :disabled="faqCurrentPage === faqTotalPages"> &gt;</button>
          </div>
        </div>

        <!-- QnA -->
        <div class="section">
          <h3>질문과 답변 (QnA)</h3>
          <ul>
            <li v-for="(qna, index) in [...qnas, ...Array(Math.max(0, 5 - qnas.length)).fill(null)]" :key="index">
              <template v-if="qna">
                <span class="title-clickable" @click="openQnaModal(qna)">Q. {{ qna.title }}
                  <span v-if="qna.answer" class="answer-icon">✅</span>
                </span>
              </template>
            </li>
          </ul>
          <div class="pagination">
            <button @click="goToQnaPage(qnaCurrentPage - 1)" :disabled="qnaCurrentPage === 1"> &lt;</button>
            <button v-for="page in visibleQnaPages" :key="page" @click="goToQnaPage(page)" :class="{'active': qnaCurrentPage === page}">{{ page }}</button>
            <button @click="goToQnaPage(qnaCurrentPage + 1)" :disabled="qnaCurrentPage === qnaTotalPages"> &gt;</button>
          </div>
        </div>
      </div>

      <!-- 오른쪽 패널 -->
      <div class="right-panel">
        <div class="write-box">
          <h3>글쓰기</h3>
          <div class="options">
            <label for = 'noticeType'>유형 선택</label>
            <div class="Announ_box">
              <select id="noticeType" v-model="noticeType">
                <option value="GENERAL">공지</option>
                <option value="FAQ">FAQ</option>
              </select>
              <label for="Announ_Regi">
                <input type="checkbox" v-model="isPinned" id="Announ_Regi"/>
                고정 공지로 등록
              </label>
            </div>
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
            <button class="btn-register" @click="submitNotice">등록</button>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
  <div v-if="selectedNotice" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h3>{{ selectedNotice.title }}</h3>
      <p>{{ selectedNotice.content }}</p>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
  <div v-if="selectedQna" class="modal-overlay" @click.self="closeQnaModal">
    <div class="modal-content">
      <h3>{{ selectedQna.title }}</h3>
      <p>{{ selectedQna.question }}</p>
      <hr>
      <textarea v-model="answerQna" placeholder="답변을 입력하세요"></textarea>

      <div class="btn-group">
        <button @click="submitAnswer">답변 등록</button>
        <button @click="closeQnaModal">닫기</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const noticeType = ref('GENERAL');
const title = ref('');
const content = ref('');
const token = localStorage.getItem('token');
const isPinned = ref(false);
const notices = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const faqs = ref([]);
const faqTotalPages = ref(1);
const faqCurrentPage = ref(1);
const isEditMode = ref(false);
const editNoticeId = ref(null);
const selectedNotice = ref(null);
const maxButtons = 5;

const qnas = ref([]);
const qnaCurrentPage = ref(1);
const qnaTotalPages = ref(1);
const selectedQna = ref(null);
const answerQna = ref(null);
const isAnswerEditMode = ref(false);

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

    const token = localStorage.getItem('token');

    let response;
    if (isEditMode.value) {
      // ✅ 수정 요청 (PUT)
      response = await axios.put(
        `${import.meta.env.VITE_API_URL}/notice/${editNoticeId.value}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      // ✅ 등록 요청 (POST)
      response = await axios.post(
        `${import.meta.env.VITE_API_URL}/notice`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    if (response.status === 200 || response.status === 201) {
      alert(isEditMode.value ? '공지가 수정되었습니다.' : '공지가 등록되었습니다.');

      // ✅ 초기화
      title.value = '';
      content.value = '';
      isPinned.value = false;
      isEditMode.value = false;
      editNoticeId.value = null;

      // ✅ 목록 갱신
      if (noticeType.value === 'GENERAL') {
        await fetchNotices();
      } else if (noticeType.value === 'FAQ') {
        await fetchFaqs();
      }
    } else {
      alert('공지 처리에 실패했습니다.');
    }
  } catch (error) {
    console.error('공지 등록/수정 오류:', error);
    alert('공지 처리 중 오류가 발생했습니다.');
  }
};


const fetchNotices = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/notice?type=GENERAL&page=${currentPage.value}&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    notices.value = response.data.notices;
    totalPages.value = response.data.totalPages;
  } catch (error) {
    console.error('공지 조회 오류:', error);
  }
};

const fetchFaqs = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/notice?type=FAQ&page=${faqCurrentPage.value}&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    faqs.value = response.data.notices;
    faqTotalPages.value = response.data.totalPages;
  } catch (error) {
    console.error('FAQ 조회 오류:', error);
  }
};

const fetchQnA = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/notice/qna`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    qnas.value = response.data.qnas;
    qnaTotalPages.value = response.data.totalPages;
  } catch (error) {
    console.error('QnA 조회 오류:', error);
  }
}

const submitAnswer = async () => {
  if (!answerQna.value) {
    alert('답변을 입력해주세요.');
    return;
  }

  try {
    const token = localStorage.getItem('token');
    const qnaId = selectedQna.value.qna_id;
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/notice/qna/${selectedQna.value.qna_id}/answer`, 
    { answer: answerQna.value, }, 
      {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(response);
    if (response.status === 200 || response.status === 201) {
      alert('답변이 등록되었습니다.');
      closeQnaModal();
      await fetchQnA();
    } else {
      alert('답변 처리에 실패했습니다.');
    }

  } catch (error) {
    console.error('답변 등록 오류:', error);
  }
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchNotices();
  }
};

const goToFaqPage = (page) => {
  if (page >= 1 && page <= faqTotalPages.value) {
    faqCurrentPage.value = page;
    fetchFaqs();
  }
};

const goToQnaPage = (page) => {
  if (page >= 1 && page <= qnaTotalPages.value) {
    qnaCurrentPage.value = page;
    fetchQnA();
  }
}

const deleteNotice = async (noticeId) => {
  const confirmDelete = confirm('정말 삭제하시겠습니까?');
  if (!confirmDelete) return;

  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/notice/${noticeId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    alert('삭제되었습니다.');

    // 타입에 따라 목록 새로고침
    if (noticeType.value === 'GENERAL') {
      fetchNotices();
    } else if (noticeType.value === 'FAQ') {
      fetchFaqs();
    }
  } catch (error) {
    console.error('삭제 실패:', error);
    alert('삭제 중 오류가 발생했습니다.');
  }
};

const startEditNotice = (notice) => {
  title.value = notice.title;
  content.value = notice.content;
  noticeType.value = notice.type;
  isPinned.value = notice.pinned;
  editNoticeId.value = notice.notice_id; // 또는 item.id
  isEditMode.value = true;
};

const openModal = (notice) => {
  selectedNotice.value = notice;
};

const closeModal = () => {
  selectedNotice.value = null;
};

const openQnaModal = (qna) => {
  selectedQna.value = qna;
  answerQna.value = qna.answer;
  isAnswerEditMode.value = true;
};

const closeQnaModal = () => {
  selectedQna.value = null;
  answerQna.value = null;
  isAnswerEditMode.value = false;
};

const visiblePages = computed(() => {
  const pages = [];
  let start = Math.max(currentPage.value - Math.floor(maxButtons / 2), 1);
  let end = Math.min(start + maxButtons - 1, totalPages.value);

  if (end > totalPages.value) {
    end = totalPages.value;
    start = Math.max(end - maxButtons + 1, 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

const visibleFaqPages = computed(() => {
  const pages = [];
  let start = Math.max(faqCurrentPage.value - Math.floor(maxButtons / 2), 1);
  let end = Math.min(start + maxButtons - 1, faqTotalPages.value);

  if (end > faqTotalPages.value) {
    end = faqTotalPages.value;
    start = Math.max(end - maxButtons + 1, 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

const visibleQnaPages = computed(() => {
  const pages = [];
  let start = Math.max(qnaCurrentPage.value - Math.floor(maxButtons / 2), 1);
  let end = Math.min(start + maxButtons - 1, qnaTotalPages.value);

  if (end > qnaTotalPages.value) {
    end = qnaTotalPages.value;
    start = Math.max(end - maxButtons + 1, 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});








onMounted(async () => {
  await fetchNotices();
  await fetchFaqs();
  await fetchQnA();
});

</script>

<style src="../../style/seller_css/notice-support.css" scoped></style>
