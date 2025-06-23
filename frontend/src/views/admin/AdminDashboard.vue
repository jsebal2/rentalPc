<template>
  <Layout headerTitle="admin Dashboard">
    <div class="adminDashboard">
      <h2>관리자 대시보드</h2>

      <div class="dashboard">
        <div class="top-card">
          <div class="card"><span>전체 사용자 수</span><div class="value">{{ users.length }}명</div></div>
          <div class="card"><span>판매자 수</span><div class="value">{{ sellerCount }}명</div></div>
          <div class="card"><span>고객 수</span><div class="value">{{ customerCount }}명</div></div>
        </div>
        <div class="bottom-card">
          <div class="card"><span>전체 등록 pc 수</span><div class="value">{{ pcCount }}대</div></div>
          <div class="card"><span>대여된 pc 수</span><div class="value">{{ rentedPcCount }}대</div></div>
        </div>
      </div>

      <h2>사용자 목록</h2>

      <div class="user-filter">
        <button :class="{ active: selectedRole === 'Admin' }" @click="selectRole('Admin')">관리자</button>
        <button :class="{ active: selectedRole === 'Seller' }" @click="selectRole('Seller')">판매자</button>
        <button :class="{ active: selectedRole === 'Customer' }" @click="selectRole('Customer')">일반 고객</button>
        <div class="user-search">
          <input type="text" v-model="searchQuery" @input="filterUsers" placeholder="이름 또는 이메일 검색" />
        </div>  
      </div>

      <table>
        <thead>
          <tr>
            <th>가입일</th>
            <th>이메일</th>
            <th>이름</th>
            <th>역할</th>
            <th>활성화</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.user_id">
            <td>{{ formatDate(user.join_date) }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.role === 'Admin' ? '관리자' : user.role === 'Seller' ? '판매자' : '일반 고객' }}</td>
            <td>
              <div class="toggle" :class="{ active: user.status === 'ACTIVE' }"></div>
            </td>
            <td>
              <button class="edit-btn" @click="openEdit(user)">수정</button>
            </td>
          </tr>
        </tbody>
      </table>
      <EditUserModal
        v-if="showEditModal"
        :user="selectedUser"
        @close="showEditModal = false"
        @save="saveEdit"
      />
    </div>

  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import Layout from '../../layouts/Layout.vue'
import EditUserModal from './EditUserModal.vue'

interface User {
  user_id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Seller' | 'Customer';
  join_date: string;
  status: 'ACTIVE' | 'INACTIVE';
}

const users = ref<User[]>([])
const searchQuery = ref('')
const selectedRole = ref<'All' | 'Admin' | 'Seller' | 'Customer'>('All')
const filteredUsers = ref<User[]>([])
const pcs = ref([])

//모달 창
const selectedUser = ref<User | null>(null)
const showEditModal = ref(false)

function openEdit(user: User) {
  selectedUser.value = { ...user }
  showEditModal.value = true
}

async function saveEdit(user: User) {
  try {
    await axios.put(`${import.meta.env.VITE_API_URL}/admin-dashboard/user/${user.user_id}`, user)
    await fetchUsers()
    showEditModal.value = false
  } catch (e) {
    console.error('수정 오류:', e)
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

async function fetchUsers() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/customers/alllist`)
    users.value = response.data
    filteredUsers.value = response.data
  } catch (error) {
    console.error('사용자 목록 조회 오류:', error)
  }
}

function selectRole(role: 'Admin' | 'Seller' | 'Customer') {
  selectedRole.value = role
  filterUsers()
}

function filterUsers() {
  const keyword = searchQuery.value.toLowerCase()

  filteredUsers.value = users.value.filter(user => {
    const matchesKeyword =
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      formatDate(user.join_date).includes(keyword)  // 날짜 검색 추가

    const matchesRole =
      selectedRole.value === 'All' || user.role === selectedRole.value

    return matchesKeyword && matchesRole
  })
}

async function fetchPcs() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin-dashboard/getallpcs`)
    pcs.value = response.data
    console.log(pcs.value.length);
    
  } catch (error) {
    console.error('PC 목록 불러오기 실패:', error)
  }
}

const sellerCount = computed(() =>
  users.value.filter(user => user.role === 'Seller').length
)

const customerCount = computed(() =>
  users.value.filter(user => user.role === 'Customer').length
)

const pcCount = computed(() => pcs.value.length);

const rentedPcCount = computed(() =>
  pcs.value.filter(pc => pc.renter_id !== null).length
);

onMounted(() => {
  fetchUsers()
  fetchPcs()
})
</script>

<style src="../../style/admin_css/admin-dashboard.css" scoped></style>