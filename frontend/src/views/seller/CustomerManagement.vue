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
            <input type="text" placeholder="이름 또는 이메일" v-model="searchQuery" @input="filterCustomers" />
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
            <td>{{ customer.paymentStatus }}</td>
            <td>{{ customer.autoExtend ? 'O' : 'X' }}</td>
            <td>
              <a href="#" @click.prevent="openDetailModal(customer)">[상세보기]</a>
            </td>
          </tr>
        </tbody>
      </table>
      <UserDetailModal v-if="showDetailModal" :user="selectedCustomer" @close="showDetailModal = false" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import UserDetailModal from './UserDetailModal.vue';
import AdminLayout from '../../layouts/AdminLayout.vue';
import '../../style/seller_css/customer-management.css';

const showDetailModal = ref(false);
const customers = ref([]);
const filteredCustomers = ref([]);
const searchQuery = ref('');
const selectedCustomer = ref(null);

function getCustomers() {
  axios.get(import.meta.env.VITE_API_URL + '/customers/list')
    .then(response => {
      customers.value = response.data;
      filteredCustomers.value = customers.value;
    })
    .catch(error => console.error('Error fetching customers:', error));
}

function filterCustomers() {
  const keyword = searchQuery.value.trim().toLowerCase();
  if (!keyword) {
    filteredCustomers.value = customers.value;
  } else {
    filteredCustomers.value = customers.value.filter((customer) => {
      return (
        customer.name.toLowerCase().includes(keyword) ||
        customer.email.toLowerCase().includes(keyword)
      );
    });
  }
}

async function fetchCustomers() {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + '/customers/list');
    customers.value = response.data;
    filteredCustomers.value = customers.value;
  } catch (error) {
    console.error('Error fetching customers:', error);
  }
}

function openDetailModal(user) {
  selectedCustomer.value = user;
  showDetailModal.value = true;
}


onMounted(() => {
  getCustomers();
  window.addEventListener('keydown', handleKeydown);
});

function handleKeydown(e: KeyboardEvent) {
  if (showDetailModal.value && e.key === 'Escape') {
    showDetailModal.value = false;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
// 추후 데이터/이벤트 바인딩을 위해 setup 영역을 비워둡니다.
</script> 
<style src="../../style/seller_css/customer-management.css"></style>