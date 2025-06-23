<template>
  <Layout headerTitle="공지사항 관리">
    <div class="notice-container">
      <h2 class="title">공지사항 관리</h2>

      <!-- 탭 버튼 -->
      <div class="tab-buttons">
        <button :class="{ active: activeTab === 'ALL' }" @click="activeTab = 'ALL'">전체 공지</button>
        <button :class="{ active: activeTab === 'SELLER' }" @click="activeTab = 'SELLER'">판매자 공지</button>
        <button :class="{ active: activeTab === 'CUSTOMER' }" @click="activeTab = 'CUSTOMER'">고객 공지</button>
      </div>

      <!-- 공지 목록 및 작성 폼 -->
      <div class="notice-table-form-wrapper">
        <!-- 공지 목록 -->
        <div class="notice-list">
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th>작성일</th>
                <th>고정</th>
                <th>대상</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="notice in notices" :key="notice.id">
                <td>{{ notice.title }}</td>
                <td>{{ formatDate(notice.created_at) }}</td>
                <td>{{ notice.pinned ? '📌' : '-' }}</td>
                <td>{{ notice.role }}</td>
                <td>
                  <button class="btn-edit" @click="editNotice(notice)">수정</button>
                  <button class="btn-delete" @click="deleteNotice(notice.id)">삭제</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 작성 폼 -->
        <div class="notice-form">
          <h3>새 공지 작성</h3>
          <input v-model="newNotice.title" placeholder="제목" class="title-in"/>
          <textarea v-model="newNotice.content" placeholder="내용 작성…" />

          <div class="form-control">
            <label>
              <input type="checkbox" v-model="newNotice.pinned" />
              상단 고정
            </label>
          </div>

          <select v-model="newNotice.role">
            <option value="CUSTOMER">고객 공지</option>
            <option value="SELLER">판매자 공지</option>
            <option value="ADMIN">관리자 전용</option>
          </select>

          <select v-model="newNotice.type">
            <option value="GENERAL">일반 공지</option>
            <option value="MAINTENANCE">점검</option>
            <option value="UPDATE">업데이트</option>
            <option value="FAQ">FAQ</option>
          </select>

          <div class="btn-group">
            <button class="btn-submit" @click="submitNotice">공지 등록</button>
            <button class="btn-cancel" @click="resetForm">취소</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import Layout from '../../layouts/Layout.vue'


const activeTab = ref('ALL')
const notices = ref([])

const newNotice = ref({
  title: '',
  content: '',
  pinned: false,
  type: 'GENERAL',
  role: 'CUSTOMER',
})

// 공지 목록 조회
const fetchNotices = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin-notice/list`, {
      params: activeTab.value !== 'ALL' ? { type: activeTab.value } : {}
    });
    notices.value = res.data;
  } catch (err) {
    console.error('공지 불러오기 실패:', err);
  }
}
onMounted(fetchNotices)

// 탭 바뀌면 새로 불러오기
watch(activeTab, () => {
  fetchNotices()
})

// 날짜 포맷
function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('ko-KR')
}

// 공지 삭제
async function deleteNotice(noticeId: number) {
  if (!confirm('정말 삭제하시겠습니까?')) return
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/admin-notice/delete/${noticeId}`)
    await fetchNotices()
  } catch (err) {
    console.error('공지 삭제 실패:', err)
  }
}

// 공지 수정
function editNotice(notice) {
  newNotice.value = { ...notice }
}


// 폼 초기화
function resetForm() {
  newNotice.value = {
    title: '',
    content: '',
    pinned: false,
    type: 'GENERAL',
    role: 'CUSTOMER'
  }
}

async function submitNotice() {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/admin-notice/createnotice`, {
      ...newNotice.value,
      admin_id: 1  // 🟡 실제 관리자의 ID로 설정
    });
    resetForm();
    await fetchNotices();
  } catch (err) {
    console.error('공지 등록 실패:', err);
  }
}
</script>

<style src="../../style/admin_css/admin-notice.css" scoped></style>
