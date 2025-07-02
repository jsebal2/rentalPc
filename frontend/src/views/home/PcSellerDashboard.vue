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
          <textarea
            v-model="companyIntroduction"
            class="form-textarea"
            placeholder="업체 소개를 추가해주세요"
          />
        </div>

        <div class="form-row button-row">
          <button type="button" class="submit-button" @click="infoSave">
            저장
          </button>
        </div>
      </div>

      <div v-for="(pc, index) in pcList" :key="pc.pc_id">
        <!-- 인덱스가 0일 때 'PC판매' 출력 -->
        <h2 v-if="index === 0" class="section-title">PC판매</h2>

        <!-- 인덱스가 4일 때 '중고PC판매' 출력 (5번째부터 시작) -->
        <h2 v-if="index === 5" class="section-title">중고PC판매</h2>

        <!-- 제품 카드 -->
        <div class="product-info-section">
          <div class="top_box">
            <div class="product-image" />
            <div class="price_box">
              <div class="product-field">
                <label class="product-label">제품명</label>
                <input type="text" class="product-input" v-model="pc.pc_name" />
              </div>
    
              <div class="product-field">
                <label class="product-label">가격</label>
                <input type="text" class="product-input" v-model="pc.price" @input="pc.price = formatWithComma($event.target.value)" />
              </div>
            </div>
          </div>


          <div class="product-field">
            <label class="product-label">설명</label>
            <textarea
              v-model="pc.memo"
              class="product-input-memo"
              placeholder="제품 설명을 추가해주세요"
            />
          </div>

          <div class="button-row">
            <button
              type="button"
              class="submit-button"
              @click="updatePcInfo(pc)"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "../../layouts/Layout.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const userId = localStorage.getItem("user_id");
const companyName = ref("");
const phone = ref("");
const email = ref("");
const kakaoId = ref("");
const companyIntroduction = ref("");
const startTime = ref("");
const endTime = ref("");


const formatWithComma = (val) => {
  const onlyNums = val.replace(/[^\d]/g, '')
  return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}


const pcList = ref([]);

const fetchSellerProfile = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API_URL + `/pc-seller-dashboard/profile/${userId}`
    );
    companyName.value = response.data.business_name;
    phone.value = response.data.contact_phone;
    email.value = response.data.contact_email;
    kakaoId.value = response.data.kakao_id;
    companyIntroduction.value = response.data.company_introduction;
    startTime.value = response.data.start_time;
    endTime.value = response.data.end_time;
  } catch (error) {
    console.error("판매자 프로필 조회 오류:", error);
  }
};

const infoSave = async () => {
  try {
    await axios.post(
      import.meta.env.VITE_API_URL + `/pc-seller-dashboard/profile/${userId}`,
      {
        business_name: companyName.value,
        contact_phone: phone.value,
        contact_email: email.value,
        introduction_title: kakaoId.value,
        introduction_content: companyIntroduction.value,
        start_time: startTime.value,
        end_time: endTime.value,
      }
    );
    alert("프로필 저장 완료");
  } catch (error) {
    console.error("판매자 프로필 저장 오류:", error);
    alert("프로필 저장 실패");
  }
};

const fetchPcList = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API_URL + `/pc-seller-dashboard/pc-list/${userId}`
    );
    pcList.value = response.data.map((pc) => ({
      pc_id: pc.pc_id,
      pc_name: pc.cpu || "",
      price: pc.price?.toLocaleString() || "",
      memo: pc.memo || "",
    }));
    console.log(pcList.value);
  } catch (error) {
    console.error("PC 목록 조회 오류:", error);
  }
};

const updatePcInfo = async (pc) => {
  try {
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/pc-seller-dashboard/pc/${pc.pc_id}`,
      {
        cpu: pc.pc_name || "",
        price: parseInt(pc.price.replace(/,/g, ''), 10) || "",
        memo: pc.memo || "",
      }
    );
    alert("제품 정보 수정 완료");
    console.log(pc);
    fetchPcList();
  } catch (error) {
    console.error("제품 정보 수정 오류:", error);
    alert("제품 정보 수정 실패");
  }
};

onMounted(() => {
  fetchSellerProfile();
  fetchPcList();
});
</script>

<style scoped src="../../style/home_css/pc-seller-dashboard.css"></style>
