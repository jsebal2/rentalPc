<template>
  <Layout headerTitle="고객 공지사항">
    <div class="notice-question-container">
      <!-- 탭 메뉴 -->
        <div class="notice-box">
          <h2 class="section-title">공지사항</h2>
        </div>
      <div class="tab-buttons">
        <div class="tab-buttons-left">
            <button :class="{ active: currentTab === 'notice' }" @click="currentTab = 'notice'">공지사항</button>
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
        <button v-if="currentTab === 'question'" class="write-btn" @click="showForm = !showForm">+ 작성하기</button>
      </div>

      <!-- 공지사항 -->
      <div v-if="currentTab === 'notice'" class="notice-list">
        <!-- <div class="card">
          <h3>서버 점검 안내 (6/20)</h3>
          <p>6/20(목) 오전 2시~5시 서버 점검이 예정되어 있습니다.</p>
        </div>
        <div class="card">
          <h3>신규 PC 입고 안내</h3>
          <p>신규 고성능 원격 PC 10대 입고되었습니다.</p>
        </div> -->
        <div class="notice-content">
          <ul>
            <li
              v-for="(item, index) in filteredNotices"
              :key="index"
              class="card"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ truncate(item.content) }}</p>
            </li>
          </ul>
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
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const currentTab = ref<'notice' | 'question'>('notice')
const showForm = ref(false)
const notice = ref([])
const userId = Number(localStorage.getItem('user_id'))
const seller_id = ref<number[]>([])

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
      seller_id.value = [...sellerSet]
      selectedAdmin.value = seller_id.value[0] ?? null
      
    } catch (error) {
        console.error('대여 수 조회 실패:', error)
    }
})
const uniqueAdmins = computed(() => [...new Set(seller_id.value)])
const selectedAdmin = ref(uniqueAdmins.value[0] ?? null)

const filteredNotices = computed(() => {
  return notice.value.filter(n =>
    seller_id.value.includes(n.admin_id) && n.admin_id === selectedAdmin.value
  )
})
console.log("te",filteredNotices)

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

// 글자 수 제한
const truncate = (text: string, limit: number = 40) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text
}

</script>


<style src="../../style/buyer_css/custom-notice.css" scoped></style>