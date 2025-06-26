<template>
  <Layout>
  <div class="container">
    <h2 class="section-title">내 정보</h2>

    <!-- 닉네임 -->
    <div class="form-group">
      <label>닉네임</label>
      <div class="inline-group">
        <input type="text" :value="nickname" disabled />
        <button class="text-button">수정</button>
      </div>
      <p class="info-text">* 닉네임은 30일마다 한 번만 수정할 수 있습니다.</p>
    </div>

    <!-- 이메일 -->
    <div class="form-group">
      <label>이메일</label>
      <div class="inline-group">
        <input type="email" :value="email" disabled />
      </div>
    </div>

    <!-- 연동된 계정 -->
    <div class="form-group">
      <label>연동된 계정</label>
      <!-- <div class="sns-icons">
        <img src="/sns/google.png" alt="Google" />
        <img src="/sns/kakao.png" alt="Kakao" />
        <img src="/sns/facebook.png" alt="Facebook" />
      </div> -->
    </div>

    <!-- 휴대폰 본인인증 -->
    <div class="form-group">
      <label>휴대폰 본인인증</label>
      <div class="inline-group">
        <input type="text" :value="phone" />
        <button class="gray-button">재인증</button>
      </div>
    </div>

    <!-- 계좌 정보 -->
    <div class="form-group">
      <label>환불 계좌 정보</label>
      <div class="radio-group">
        <label><input type="radio" value="개인" v-model="form.accountType" /> 개인 계좌</label>
        <label><input type="radio" value="사업자" v-model="form.accountType" /> 사업자 계좌</label>
      </div>
      <input type="text" :value="name" placeholder="예금주를 입력하세요" class="account-holder-input" />
      <div class="inline-group">
        <select v-model="form.bank">
          <option disabled value="">은행 선택</option>
          <option value="국민은행">국민은행</option>
          <option value="기업은행">기업은행</option>
          <option value="농협은행">농협은행</option>
          <option value="신한은행">신한은행</option>
          <option value="산업은행">산업은행</option>
          <option value="씨티은행">씨티은행</option>
          <option value="우리은행">우리은행</option>
          <option value="하나은행">하나은행</option>
          <option value="sc은행">sc은행</option>
          <option value="카카오뱅크">카카오뱅크</option>
          <option value="케이뱅크">케이뱅크</option>
          <option value="토스뱅크">토스뱅크</option>
          <option value="경남은행">경남은행</option>
          <option value="광주은행">광주은행</option>
          <option value="대구은행">대구은행</option>
          <option value="미래에셋">미래에셋</option>
          <option value="부산은행">부산은행</option>
          <option value="산림조합">산림조합</option>
          <option value="새마을금고">새마을금고</option>
          <option value="수협중앙회">수협중앙회</option>
          <option value="신협은행">신협은행</option>
          <option value="우체국은행">우체국은행</option>
          <option value="저축은행">저축은행</option>
          <option value="전북은행">전북은행</option>
          <option value="제주은행">제주은행</option>

        </select>
        <input type="text" v-model="form.accountNumber" placeholder="계좌번호" />
        <button class="gray-button">등록</button>
      </div>
      <p class="info-text">* 본인 명의 계좌만 등록 가능하며, 잘못 입력 시 환불이 불가능할 수 있습니다.</p>
    </div>

    <!-- 비밀번호 변경 -->
    <div class="password-box">
      <h2>비밀번호 변경</h2>
      <p class="info-text">비밀번호를 변경하면, 로그인에 사용되는 비밀번호가 교체됩니다.</p>
      <input type="password" v-model="form.currentPassword" placeholder="현재 비밀번호" />
      <input type="password" v-model="form.newPassword" placeholder="새 비밀번호" />
      <input type="password" v-model="form.confirmPassword" placeholder="새 비밀번호 확인" />
      <button class="yellow-button">변경하기</button>
    </div>

    <!-- 회원 탈퇴 -->
    <div class="form-group">
      <h3>회원 탈퇴</h3>
      <p class="info-text">* 탈퇴를 원하시면 이메일을 입력 후 확인해주세요.</p>
      <div class="inline-group">
        <input type="email" v-model="form.withdrawEmail" placeholder="이메일 확인" />
        <button class="red-button">회원 탈퇴</button>
      </div>
    </div>
  </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Layout from '../../layouts/Layout.vue'

const name = ref('')
const email = ref('')
const phone = ref('')

const getUserdata = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(import.meta.env.VITE_API_URL + '/account-setting/getUserdata', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = response.data;
  console.log(data);
  name.value = data.name;
  email.value = data.email;
  phone.value = data.phone;
}


const form = ref({
  phone: '010****9435',
  accountType: '개인',
  bank: '',
  accountNumber: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  withdrawEmail: '',
})

onMounted(() => {
  getUserdata();
})
</script>

<style scoped src="../../style/home_css/account-setting.css"></style>
