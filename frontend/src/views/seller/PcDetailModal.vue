<!-- components/PcDetailModal.vue -->
<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn pc_status" @click="$emit('close')">닫기</button>

      <div class="pc-info-block">
        <p><strong>PC ID:</strong> {{ pc.pcName }}</p>
        <p><strong>상태:</strong> {{ stateMap[pc.state] || '-' }}</p>
        <p><strong>위치:</strong> {{ pc.location }}</p>
        <p><strong>등록일:</strong> {{ new Date(pc.reg_date).toLocaleDateString() }}</p>
        <p><strong>메모:</strong> {{ pc.memo || '-' }}</p>
        <hr />
        <p><strong>[CPU]</strong> {{ pc.cpu }} | <strong>[RAM]</strong> {{ pc.ram }}</p>
        <p><strong>[GPU]</strong> {{ pc.graphic }} | <strong>[임대료]</strong> {{ Number(pc.price).toLocaleString() }}원</p>
        <hr />
        <template v-if="pc.renter">
          <p><strong>[현재 대여자 정보]</strong></p>
          <p>이름: {{ pc.renter.name }}</p>
          <p>이메일: {{ pc.renter.email }}</p>
          <p>대여기간: {{ new Date(pc.rental[0].start_date).toLocaleDateString() }} ~ {{ new Date(pc.rental[0].end_date).toLocaleDateString() }}</p>
          <p>자동 연장: {{ pc.renter.auto_extend ? 'Y' : 'N' }}</p>
        </template>
        <template v-else>
          <p><strong>[현재 대여자 정보]</strong> 없음</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  pc: Object
});

const stateMap: Record<string, string> = {
  AVAILABLE: '대여 가능',
  IN_USE: '대여 중',
  MAINTENANCE: '수리 중',
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '-';
  return new Date(dateStr).toISOString().split('T')[0];
};
</script>

<style scoped>
.modal-content {
  background: #fff;
  padding: 2rem;
  width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  position: relative;
}
.close-btn.pc_status{
  position: absolute;
  padding: 10px 20px;
  right: 20px;
  bottom: 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: #1d77ff;
  color: #fff;
  border: none;
}
.pc-info-block p {
  margin: 0.5rem 0;
}
</style>
