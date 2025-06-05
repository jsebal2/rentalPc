<template>
  <div class="pc-add-popup">
    <h2>PC 추가</h2>
    <div class="pc-form">
      <input type="text" class="input-field" placeholder="PC ID" v-model="pcName" />

      <label>가격</label>
      <input type="text" class="input-field" placeholder="가격" v-model="price" />

      <label>사양</label>
      <div class="spec-field">
        <label>cpu</label>
        <input type="text" v-model="cpu" />
        <label>ram</label>
        <div class="ram-input-wrap">
          <input type="number" v-model="ram" class="ram-input" placeholder="RAM (숫자)" min="1" />
          <span class="unit-label">GB</span>
        </div>
        <label>graphic</label>
        <input type="text" v-model="graphic" />
      </div>

      <!-- ✅ 체크박스 추가 영역 -->
      <div class="options-checkbox">
        <label><input type="checkbox" v-model="vpnUsage" /> VPN 사용여부</label>
        <label><input type="checkbox" v-model="ipAssigned" /> IP 할당여부</label>
        <label><input type="checkbox" v-model="wolEnabled" /> WOL 사용가능</label>
      </div>

      <label>자세한 설명</label>
      <textarea placeholder="자세한 설명" v-model="memo"></textarea>
    </div>

    <div class="btn-group">
      <button class="cancel-btn" @click="onCancel">닫기</button>
      <button class="submit-btn" @click="handleSubmit">상품 등록</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const emit = defineEmits(['close', 'registered']);

const pcName = ref('');
const price = ref('');
const cpu = ref('');
const ram = ref<number | null>(null);
const graphic = ref('');
const memo = ref('');
const vpnUsage = ref(false);
const ipAssigned = ref(false);
const wolEnabled = ref(false);

const onCancel = () => {
  emit('close');
};
const onSubmit = () => {
  alert(`등록 정보:\nVPN 사용: ${vpnUsage.value}\nIP 할당: ${ipAssigned.value}\nWOL 사용: ${wolEnabled.value}`);
};

const handleSubmit = async () => {

  const token = localStorage.getItem('token');
  if (!token) {
    console.log('토큰이 없습니다.');
    return;
  }

  let user_id = null;
  try {
    const decoded = jwtDecode(token);
    user_id = decoded.userId;
    console.log(user_id);
  } catch (error) {
    console.error('토큰 디코딩 오류:', error);
    return;
  }
  
  
  const payload = {
    pcName : pcName.value,
    price : price.value,
    cpu : cpu.value,
    ram : ram.value? `${ram.value}GB` : '',
    graphic : graphic.value,
    memo : memo.value,
    user_id : user_id,
    // vpnUsage : vpnUsage.value,
    // ipAssigned : ipAssigned.value,
    // wolEnabled : wolEnabled.value,
  }

  try {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/pcs/register', payload);
    console.log(response.data);
    emit('registered');
    emit('close');
  } catch (error) {
    console.error('PC 등록 오류:', error);
  }
};

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close');
  }
}
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style src="../../style/buyer_css/pc-add-popup.css"></style>
