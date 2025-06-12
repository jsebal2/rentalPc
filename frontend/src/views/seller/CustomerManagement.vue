<template>
  <AdminLayout headerTitle="고객 관리">
    <div class="customer-container">
      <h1>고객 관리</h1>

      <div class="toolbar">
        <div class="toolbar-bottom">
          <div class="toolbar-left">
            <label><input type="checkbox" class="filter-checkbox" />전체</label>
            <label><input type="checkbox" class="filter-checkbox" />미납</label>
            <label><input type="checkbox" class="filter-checkbox" />자동 연장</label>
          </div>
          <div class="toolbar-right">
            <input
              type="text"
              placeholder="이름 또는 이메일"
              v-model="searchQuery"
              @input="filterCustomers"
            />
          </div>
        </div>
      </div>

      <table class="customer-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>대여 PC 수</th>
            <th>납부 상태</th>
            <th>자동 연장</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in filteredCustomers" :key="index">
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.pcCount }}대</td>
            <td>{{ customer.paymentStatus || '-' }}</td>
            <td>{{ customer.autoExtend ? 'O' : 'X' }}</td>
            <td>
              <a href="#" @click.prevent="openDetailModal(customer)">[상세보기]</a>
            </td>
          </tr>
        </tbody>
      </table>

      <UserDetailModal
        v-if="showDetailModal"
        :user="selectedCustomer"
        @close="showDetailModal = false"
      />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import UserDetailModal from './UserDetailModal.vue';
import AdminLayout from '../../layouts/AdminLayout.vue';
import '../../style/seller_css/customer-management.css';

interface Customer {
  user_id: number;
  name: string;
  email: string;
  phone?: string;
  join_date?: string;
  pcCount: number;
  paymentStatus?: string;
  autoExtend?: boolean;
}

const showDetailModal = ref(false);
const customers = ref<Customer[]>([]);
const filteredCustomers = ref<Customer[]>([]);
const searchQuery = ref('');
const selectedCustomer = ref<Customer | null>(null);

async function fetchCustomers() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/customers/list`);
    customers.value = response.data;
    filteredCustomers.value = response.data;
  } catch (error) {
    console.error('고객 목록 조회 오류:', error);
  }
}

function filterCustomers() {
  const keyword = searchQuery.value.trim().toLowerCase();
  if (!keyword) {
    filteredCustomers.value = customers.value;
  } else {
    filteredCustomers.value = customers.value.filter((customer) =>
      customer.name.toLowerCase().includes(keyword) ||
      customer.email.toLowerCase().includes(keyword)
    );
  }
}

function openDetailModal(user: Customer) {
  selectedCustomer.value = user;
  showDetailModal.value = true;
}

function handleKeydown(e: KeyboardEvent) {
  if (showDetailModal.value && e.key === 'Escape') {
    showDetailModal.value = false;
  }
}

onMounted(() => {
  fetchCustomers();
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style src="../../style/seller_css/customer-management.css"></style>