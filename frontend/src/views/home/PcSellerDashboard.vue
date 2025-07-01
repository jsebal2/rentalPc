<template>
  <Layout>
    <div class="form-section">
      <!-- 업체 정보 입력 -->
      <div class="form-container">
        <div class="form-row">
          <label class="form-label">업체명</label>
          <input type="text" class="form-input" v-model="companyName" />

          <label class="form-label">핸드폰번호</label>
          <input type="text" class="form-input" v-model="phone" />
        </div>

        <div class="form-row">
          <label class="form-label">E-mail</label>
          <input type="email" class="form-input" v-model="email" />

          <label class="form-label">카톡아이디</label>
          <input type="text" class="form-input" v-model="kakaoId" />
        </div>

        <div class="form-row">
          <label class="form-label">상담 가능 시간</label>
          <input type="text" class="form-input" v-model="startTime" />
          <label class="form-label">~</label>
          <input type="text" class="form-input" v-model="endTime" />
        </div>

        <div class="form-row memo-row">
          <label class="form-label">업체 소개</label>
          <textarea v-model="companyIntroduction" class="form-textarea" placeholder="업체 소개를 추가해주세요" />
        </div>

        <div class="form-row button-row">
          <button type="button" class="submit-button" @click="infoSave">저장</button>
        </div>
      </div>

      <!-- 아래: 제품 이미지 및 입력 -->
      <div class="product-info-section">
        <div class="product-image" />

        <div class="product-field">
          <label class="product-label">제품명</label>
          <input type="text" class="product-input" v-model="productName" />
        </div>

        <div class="product-field">
          <label class="product-label">가격</label>
          <input type="text" class="product-input" v-model="productPrice" />
        </div>

        <div class="product-field">
          <label class="product-label">설명</label>
          <input type="text" class="product-input" v-model="productDescription" />
        </div>
      </div>

      <div class="product-info-section">
        <div class="product-image" />

        <div class="product-field">
          <label class="product-label">제품명</label>
          <input type="text" class="product-input" v-model="productName" />
        </div>

        <div class="product-field">
          <label class="product-label">가격</label>
          <input type="text" class="product-input" v-model="productPrice" />
        </div>

        <div class="product-field">
          <label class="product-label">설명</label>
          <input type="text" class="product-input" v-model="productDescription" />
        </div>
      </div>

      <div class="product-info-section">
        <div class="product-image" />

        <div class="product-field">
          <label class="product-label">제품명</label>
          <input type="text" class="product-input" v-model="productName" />
        </div>

        <div class="product-field">
          <label class="product-label">가격</label>
          <input type="text" class="product-input" v-model="productPrice" />
        </div>

        <div class="product-field">
          <label class="product-label">설명</label>
          <input type="text" class="product-input" v-model="productDescription" />
        </div>
      </div>

      <div class="product-info-section">
        <div class="product-image" />

        <div class="product-field">
          <label class="product-label">제품명</label>
          <input type="text" class="product-input" v-model="productName" />
        </div>

        <div class="product-field">
          <label class="product-label">가격</label>
          <input type="text" class="product-input" v-model="productPrice" />
        </div>

        <div class="product-field">
          <label class="product-label">설명</label>
          <input type="text" class="product-input" v-model="productDescription" />
        </div>
      </div>
    </div>
  </Layout>
</template>

  
  <script setup>
  import Layout from '../../layouts/Layout.vue'
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const userId = localStorage.getItem('user_id')
  const companyName = ref('')
  const phone = ref('')
  const email = ref('')
  const kakaoId = ref('')
  const companyIntroduction = ref('')
  const startTime = ref('')
  const endTime = ref('')

  const productName = ref('')
  const productPrice = ref('')
  const productDescription = ref('')


  const fetchSellerProfile = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + `/pc-seller-dashboard/profile/${userId}`)
      companyName.value = response.data.business_name
      phone.value = response.data.contact_phone
      email.value = response.data.contact_email
      kakaoId.value = response.data.kakao_id
      companyIntroduction.value = response.data.company_introduction
      startTime.value = response.data.start_time
      endTime.value = response.data.end_time
    } catch (error) {
      console.error('판매자 프로필 조회 오류:', error)
    }
  }

  const infoSave = async () => {
    try {
      await axios.post(import.meta.env.VITE_API_URL + `/pc-seller-dashboard/profile/${userId}`, {
        business_name: companyName.value,
        contact_phone: phone.value,
        contact_email: email.value,
        introduction_title: kakaoId.value,
        introduction_content: companyIntroduction.value,
        start_time: startTime.value,
        end_time: endTime.value
      })
      alert('프로필 저장 완료')
    } catch (error) {
      console.error('판매자 프로필 저장 오류:', error)
      alert('프로필 저장 실패')
    }
  }

  onMounted(() => {
    fetchSellerProfile()
  })
  </script>
  
  <style scoped src="../../style/home_css/pc-seller-dashboard.css"></style>
  