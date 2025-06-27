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
        <div class="phone-input-group">
          <input type="text" v-model="form.phone1" maxlength="3" class="phone-input" @input="autoMove(form.phone1, 3, $refs.phone2)" ref="phone1" placeholder="010" required />-
          <input type="text" v-model="form.phone2" maxlength="4" class="phone-input" @input="autoMove(form.phone2, 4, $refs.phone3)" ref="phone2" placeholder="1234" required />-
          <input type="text" v-model="form.phone3" maxlength="4" class="phone-input" @input="autoMove(form.phone3, 4, $refs.email)" ref="phone3" placeholder="5678" required />
        </div>
        <div class="email-input-group">
          <input v-model="emailId" type="text" class="email-input" placeholder="이메일 주소" required />@
          <input v-model="emailDomain" type="text" class="email-input" placeholder="example.com" required :disabled="selectedEmailOption !== 'custom'" />
          <select v-model="selectedEmailOption" @change="handleEmailOptionChange">
            <option value="custom">직접 입력</option>
            <option value="gmail.com">gmail.com</option>
            <option value="naver.com">naver.com</option>
            <option value="kakao.com">kakao.com</option>
          </select>
        </div>
      </div>

      <!-- Step 4: 계좌 정보 -->
      <div v-else-if="step === 4">
        <input v-model="form.account_holder" type="text" class="input-box" placeholder="예금주" readonly />
        <select v-model="form.bank_name" class="input-box" required>
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
        <input v-model="form.account_number" type="text" class="input-box" placeholder="계좌번호(숫자만 입력 해주세요)" 
        @input="form.account_number = form.account_number.replace(/[^0-9]/g, '')" required/>
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
          <p>기업명: {{ form.businessName }}</p>
          <p>소개 제목: {{ form.introductionTitle }}</p>
          <p>소개 내용: {{ form.introductionContent }}</p>
          <p>전화번호: {{ form.phone1 }}-{{ form.phone2 }}-{{ form.phone3 }}</p>
          <p>이메일: {{ form.email }}</p>
          <p>은행명: {{ form.bank_name }}</p>
          <p>계좌번호: {{ form.account_number }}</p>
          <p>예금주명: {{ form.account_holder }}</p>
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import Header from '../../components/Header.vue';

const step = ref(1);
const router = useRouter();

const emailId = ref('');
const emailDomain = ref('');
const selectedEmailOption = ref('custom');
const fullEmail = computed(() => `${emailId.value}@${emailDomain.value}`);


const isValidPhone = (phone) => /^01[0-9]-?\d{3,4}-?\d{4}$/.test(phone);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidAccountNumber = (num) => /^[0-9\-]{6,20}$/.test(num);

const form = ref({
  businessName: '',
  introductionTitle: '',
  introductionContent: '',
  phone1: '',
  phone2: '',
  phone3: '',
  email: '',
  bank_name: '',
  account_number: '',
  account_holder: '',
});

const handleNext = async () => {
  const { businessName, introductionTitle, introductionContent, phone1, phone2, phone3, email, bank_name, account_number, account_holder } = form.value;
  const fullPhone = `${phone1}-${phone2}-${phone3}`;
  const fullEmail = `${emailId.value}@${emailDomain.value}`;

  if (step.value === 1) {
    if (!businessName.trim()) return alert('기업명을 입력해주세요.');
    if (businessName.length > 100) return alert('기업명은 100자 이내로 입력해주세요.');
  }

  if (step.value === 2) {
    if (!introductionTitle.trim()) return alert('소개 제목을 입력해주세요.');
    if (!introductionContent.trim()) return alert('소개 내용을 입력해주세요.');
    if (introductionTitle.length > 100) return alert('제목은 100자 이내로 입력해주세요.');
  }

  if (step.value === 3) {
    if (!phone1 || !phone2 || !phone3) return alert('전화번호를 모두 입력해주세요.');
    if (!isValidPhone(fullPhone)) return alert('전화번호 형식이 올바르지 않습니다.');
    if (!emailId.value.trim() || !emailDomain.value.trim()) {return alert('이메일을 모두 입력해주세요.');}
    if (!isValidEmail(fullEmail)) {return alert('올바른 이메일 형식이 아닙니다.');}
  }

  if (step.value === 4) {
    if (!bank_name.trim()) return alert('은행명을 입력해주세요.');
    if (bank_name.length > 50) return alert('은행명은 50자 이내로 입력해주세요.');
    if (!account_number.trim()) return alert('계좌번호를 입력해주세요.');
    if (!isValidAccountNumber(account_number)) return alert('계좌번호는 숫자와 하이픈(-)만 사용하여 6~20자로 입력해주세요.');
    if (!account_holder.trim()) return alert('예금주명을 입력해주세요.');
    if (account_holder.length > 50) return alert('예금주명은 50자 이내로 입력해주세요.');
  }

  // 마지막 단계: 백엔드로 전송
  if (step.value === 4) {
    const user_id = Number(localStorage.getItem('user_id'));
    const fullPhone = `${phone1}-${phone2}-${phone3}`;
    const fullEmail = `${emailId.value}@${emailDomain.value}`;

    form.value.email = fullEmail.value;


    try {
      await axios.post(import.meta.env.VITE_API_URL + '/seller-registration/register', {
        user_id,
        business_name: businessName,
        introduction_title: introductionTitle,
        introduction_content: introductionContent,
        contact_phone: fullPhone,
        contact_email: fullEmail.value,
        bank_name: bank_name,
        bank_account_number: account_number,
        bank_account_holder: account_holder,
      });

      step.value++; // 완료 페이지로 이동
      console.log(form.value);
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
    phone1: '',
    phone2: '',
    phone3: '',
    email: '',
    bank_name: '',
    account_number: '',
    account_holder: '',
  };
  emailId.value = '';
  emailDomain.value = '';
  selectedEmailOption.value = 'custom';
};

const autoMove = (value, maxLength, nextRef) => {
  if (value.length >= maxLength && nextRef) {
    nextRef.focus();
  }
};

const handleEmailOptionChange = () => {
  if (selectedEmailOption.value === 'custom') {
    emailDomain.value = '';
  } else {
    emailDomain.value = selectedEmailOption.value;
  }
};

const goToHome = () => {
  router.push('/');
};

onMounted(async () => {
  const user_id = Number(localStorage.getItem('user_id'));

  try {
    const res = await axios.get(import.meta.env.VITE_API_URL + `/seller-registration/account-number/${user_id}`);
    const userName = res.data?.name;
    if (userName) {
      form.value.account_holder = userName;
    }
  } catch (err) {
    console.error('등록 확인 실패:', err);
  }
});
</script>

<style scoped src="../../style/home_css/seller-registration.css"></style>
