<template>
  <Layout headerTitle="고객 공지사항">
    <div class="notice-question-container">
      <!-- 탭 메뉴 -->
        <div class="notice-box">
          <h3 class="section-title">공지사항</h3>
        </div>
      <div class="tab-buttons">
        <div class="tab-buttons-left">
          <button :class="{ active: currentTab === 'notice' }" @click="currentTab = 'notice'">공지사항</button>
          <button :class="{ active: currentTab === 'faq' }" @click="currentTab = 'faq'">FAQ</button>
          <button :class="{ active: currentTab === 'question' }" @click="currentTab = 'question'">질문</button>
          <div class="notice-admins">
            <select v-model="selectedAdmin">
              <option 
                v-for="(admin, index) in uniqueAdmins"
                :key="index" 
                :value="admin"
              >
                {{ sellerIdNameMap.get(admin) }}
              </option>
            </select>
          </div>
        </div>
        <button v-if="currentTab === 'question'" class="write-btn" @click="showForm = !showForm" >+ 작성하기</button>
      </div>

      <!-- 공지사항 -->
      <div v-if="currentTab === 'notice'" class="notice-list">
        <ul>
          <li v-for="(item, index) in generalNotices" :key="index" class="card" @click="openDetailModal(item)">
            <h3>{{ item.title }}</h3>
            <p>{{ trimmedContent(item.content) }}</p>
          </li>
        </ul>
      </div>

      <!-- FAQ -->
      <div v-if="currentTab === 'faq'" class="notice-list">
        <ul>
          <li v-for="(item, index) in faqNotices" :key="index" class="card" @click="openDetailModal(item)">
            <h3>{{ item.title }}</h3>
            <p>{{ trimmedContent(item.content) }}</p>
          </li>
        </ul>
      </div>

      <!-- 질문 -->
      <div v-if="currentTab === 'question'" class="question-section">
        <div v-if="showForm" class="question-bm"></div>
        <div v-if="showForm" class="question-form">
          <div class="title-box">
            <input type="text" placeholder="제목을 입력하세요" v-model="newTitle" />
            <select v-model="selectedAdmin" name="notice-seller" id="notice-seller" required>
              <option value="" disabled>판매자 선택</option>
              <option 
                v-for="(admin, index) in uniqueAdmins"
                :key="index" 
                :value="admin"
              >
                {{ sellerIdNameMap.get(admin) }}
              </option>
            </select>
          </div>
          <textarea placeholder="질문 내용을 입력하세요" v-model="newContent"></textarea>
          <div class="submit-btn-box">
              <button type="button" class="submit-btn" @click="submitQuestion">작성 완료</button>
              <button class="submit-btn" @click="showForm = !showForm">취소</button>
          </div>
        </div>

        <div class="card" v-for="(q, index) in questions" :key="index" @click="openDetailModal(q)">
          <h3>{{ q.title}}</h3>
          <p>{{ q.question }}</p>
        </div>
      </div>
    </div>

    <!-- 자세히 보기 모달창 -->
     <div v-if="showDetailModal" class="modal-overlay" @click.self="showDetailModal = false">
      <div class="modal-content">
        <button class="close-btn" @click="showDetailModal = false">X</button>
        <h2>{{ selectedItem?.title }}</h2>
        <p>내용: {{ selectedItem?.content || selectedItem?.question }}</p>
        <p v-if="selectedItem?.answer">질문 답변: {{ selectedItem?.answer }}</p>
        <p v-if="selectedItem?.user?.name">작성자: {{ selectedItem.user.name }}</p>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue'
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios'

const currentTab = ref<'notice' | 'faq' | 'question'>('notice');
const showForm = ref(false)
const notice = ref([])
const userId = Number(localStorage.getItem('user_id'))
const seller_id = ref<number[]>([])

const newTitle = ref('');
const newContent = ref('');

const questions = ref<any[]>([])

const showDetailModal = ref(false)
const selectedItem = ref<any | null>(null)



const submitQuestion = async () => {
  if (!newContent.value || !selectedAdmin.value) {
    alert('모든 항목을 입력해주세요.');
    return;
  }
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/buyer-notice/qnaWrite`, {
      title: newTitle.value,
      content: newContent.value,
      seller_id: selectedAdmin.value,
      user_id: userId
    });
    await fetchQuestions();
    newTitle.value = '';
    newContent.value = '';
    showForm.value = false;  
  } catch (error) {
    console.error('질문 등록 실패:', error);
    alert('질문 등록 중 오류가 발생했습니다.');
  }
};

const fetchFollowedSellers = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/buyer-notice/followed-sellers`, {
      params: { user_id: userId }
    });
    const sellers = res.data.sellers || [];
    seller_id.value = sellers.map((s: any) => s.admin_id);
    selectedAdmin.value = seller_id.value[0] ?? null;
    
  } catch (err) {
    console.error('팔로우한 판매자 조회 실패:', err);
  }
};

onMounted(async () => {
  try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/buyer-dashboard/notice`)
      notice.value = res.data.notice
      console.log(notice);

      const sellerSet = new Set<number>()
      for (const n of notice.value) {
        for (const follow of n.user?.followsAsSeller ?? []) {
          if (follow.buyer_id === userId) {
            sellerSet.add(n.admin_id)  // 중복 방지
          }
        }
      }
      if (sellerSet.size === 0) {
      // 공지 기반 seller가 없다면 fallback
      await fetchFollowedSellers();
    } else {
      seller_id.value = [...sellerSet];
      selectedAdmin.value = seller_id.value[0] ?? null;
    }
      
      await fetchQuestions();
    } catch (error) {
        console.error('대여 수 조회 실패:', error)
    }
})

const uniqueAdmins = computed(() => [...new Set(seller_id.value)])
const selectedAdmin = ref<number | null>(null)

const filteredNotices = computed(() => {
  return notice.value.filter(n =>
    seller_id.value.includes(n.admin_id) && n.admin_id === selectedAdmin.value
  )
})

const generalNotices = computed(() => {
  return notice.value.filter(n =>
    n.type === 'GENERAL' &&
    seller_id.value.includes(n.admin_id) &&
    n.admin_id === selectedAdmin.value
  );
});

const faqNotices = computed(() => {
  return notice.value.filter(n =>
    n.type === 'FAQ' &&
    seller_id.value.includes(n.admin_id) &&
    n.admin_id === selectedAdmin.value
  );
});

const sellerIdNameMap = computed(() => {
  const map = new Map<number, string>()
  for (const n of notice.value) {
    const adminId = n.admin_id
    const name = n.user?.name
    if (seller_id.value.includes(adminId) && name) {
      map.set(adminId, name)
    }
  }
  return map
})

const fetchQuestions = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/buyer-notice/qnaList`, {
      params: {
        seller_id: selectedAdmin.value,
        user_id: userId,
      },
    });
    questions.value = res.data.qnaList || [];
    console.log(questions)
  } catch (err) {
    console.error("질문 목록 조회 실패", err);
  }
};

const filteredQuestions = computed(() => {
  return questions.value.filter(
    q => q.seller_id === selectedAdmin.value && q.user_id === userId
  );
});

watch(selectedAdmin, async (newVal) => {
  if (newVal) {
    await fetchQuestions(); // 선택된 판매자 바뀌면 질문 목록 다시 불러오기
  }
});

const trimmedContent = (text: string) => {
  return text.length > 40 ? text.slice(0, 40) + '...' : text;
};

const openDetailModal = (item: any) => {
  selectedItem.value = item
  showDetailModal.value = true
}

</script>


<style src="../../style/buyer_css/custom-notice.css" scoped></style>