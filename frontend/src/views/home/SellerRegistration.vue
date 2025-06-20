<template>
  <div>
    <Header />
    <div class="registration-container">
      <h2 class="title">판매자 등록 ({{ step }} / 5)</h2>

    <form @submit.prevent="handleNext">
      <!-- Step 1: 기업명 -->
      <div v-if="step === 1">
        <input v-model="form.businessName" type="text" class="input-box" placeholder="기업명을 입력해주세요" required />
      </div>

      <!-- Step 2: 소개글 -->
      <div v-else-if="step === 2">
        <input v-model="form.introductionTitle" type="text" class="input-box" placeholder="소개 제목을 입력해주세요" required />
        <textarea v-model="form.introductionContent" class="input-box textarea" placeholder="소개 내용을 입력해주세요" required />
      </div>

      <!-- Step 3: 연락처 -->
      <div v-else-if="step === 3">
        <input v-model="form.phone" type="text" class="input-box" placeholder="연락처 (전화번호)" required />
        <input v-model="form.email" type="email" class="input-box" placeholder="이메일 주소" required />
      </div>

      <!-- Step 4: 계좌 정보 -->
      <div v-else-if="step === 4">
        <input v-model="form.bank" type="text" class="input-box" placeholder="은행명" required />
        <input v-model="form.accountNumber" type="text" class="input-box" placeholder="계좌번호" required />
        <input v-model="form.accountHolder" type="text" class="input-box" placeholder="예금주" required />
      </div>

      <!-- Step 5: 안내 -->
      <div v-else-if="step === 5" class="final-step">
        <p class="info-text">
          판매자 등록이 완료되었습니다.<br />
          관리자 승인 후 서비스 이용이 가능합니다.
        </p>
        <button type="button" class="btn" @click="goToHome">메인으로 가기</button>
        <button type="button" class="btn secondary" @click="resetForm">처음부터</button>
        <div class="summary">
          <h4>입력 정보 요약</h4>
          <pre>{{ form }}</pre>
        </div>
      </div>

      <!-- 이전 / 다음 버튼 -->
      <div v-if="step < 5" class="button-group">
        <button type="button" class="btn secondary" v-if="step > 1" @click="step--">이전</button>
        <button type="submit" class="btn">다음</button>
      </div>
    </form>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import Header from '../../components/Header.vue';

const step = ref(1);
const router = useRouter();

const isValidPhone = (phone) => /^01[0-9]-?\d{3,4}-?\d{4}$/.test(phone);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidAccountNumber = (num) => /^[0-9\-]{6,20}$/.test(num);

const form = ref({
  businessName: '',
  introductionTitle: '',
  introductionContent: '',
  phone: '',
  email: '',
  bank_name: '',
  account_number: '',
  account_holder: '',
});

const handleNext = async () => {
  const { businessName, introductionTitle, introductionContent, phone, email, bank, accountNumber, accountHolder } = form.value;

  if (step.value === 1) {
    if (!businessName.trim()) return alert('기업명을 입력해주세요.');
    if (businessName.length > 100) return alert('기업명은 100자 이내로 입력해주세요.');
  }

  if (step.value === 2) {
    if (!introductionTitle.trim()) return alert('소개 제목을 입력해주세요.');
    if (!introductionContent.trim()) return alert('소개 내용을 입력해주세요.');
    if (introductionTitle.length > 100) return alert('제목은 100자 이내로 입력해주세요.');
    if (introductionContent.length > 500) return alert('내용은 500자 이내로 입력해주세요.');
  }

  if (step.value === 3) {
    if (!phone.trim()) return alert('전화번호를 입력해주세요.');
    if (!isValidPhone(phone)) return alert('전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)');
    if (!email.trim()) return alert('이메일을 입력해주세요.');
    if (!isValidEmail(email)) return alert('유효한 이메일 형식이 아닙니다.');
  }

  if (step.value === 4) {
    if (!bank.trim()) return alert('은행명을 입력해주세요.');
    if (bank.length > 50) return alert('은행명은 50자 이내로 입력해주세요.');
    if (!accountNumber.trim()) return alert('계좌번호를 입력해주세요.');
    if (!isValidAccountNumber(accountNumber)) return alert('계좌번호는 숫자와 하이픈(-)만 사용하여 6~20자로 입력해주세요.');
    if (!accountHolder.trim()) return alert('예금주명을 입력해주세요.');
    if (accountHolder.length > 50) return alert('예금주명은 50자 이내로 입력해주세요.');
  }

  // 마지막 단계: 백엔드로 전송
  if (step.value === 4) {
    const user_id = Number(localStorage.getItem('user_id'));

    try {
      await axios.post(import.meta.env.VITE_API_URL + '/seller-registration/register', {
        user_id,
        business_name: businessName,
        introduction_title: introductionTitle,
        introduction_content: introductionContent,
        contact_phone: phone,
        contact_email: email,
        bank_name: bank,
        bank_account_number: accountNumber,
        account_holder: accountHolder,
      });

      step.value++; // 완료 페이지로 이동
    } catch (err) {
      console.error('등록 실패:', err);
      alert('판매자 등록에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
    return;
  }

  // 다음 단계로 이동
  step.value++;
};

const resetForm = () => {
  step.value = 1;
  form.value = {
    businessName: '',
    introductionTitle: '',
    introductionContent: '',
    phone: '',
    email: '',
    bank: '',
    accountNumber: '',
    accountHolder: '',
  };
};

const goToHome = () => {
  router.push('/');
};
</script>

<style scoped src="../../style/home_css/seller-registration.css"></style>
