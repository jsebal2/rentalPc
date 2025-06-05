<template>
    <div class="modal-overlay" @click.self="emit('cancel')">
      <div class="modal-box">
        <h2 class="modal-title">삭제 확인</h2>
        <p class="modal-message">{{ count > 1 ? `${count}개의 항목을 삭제하시겠습니까?` : `정말로 이 항목을 삭제하시겠습니까?` }}</p>
        <div class="modal-buttons">
          <button class="btn cancel" @click="emit('cancel')">취소</button>
          <button class="btn confirm" @click="emit('confirm')">삭제</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits(['confirm', 'cancel']);
  defineProps<{
    count: number
  }>();
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-box {
    background: white;
    border-radius: 10px;
    padding: 24px 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-align: center;
    width: 320px;
  }
  
  .modal-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  
  .modal-message {
    font-size: 14px;
    color: #444;
    margin-bottom: 24px;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  
  .btn {
    padding: 8px 18px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
  
  .btn.cancel {
    background: #ddd;
    color: #333;
  }
  
  .btn.confirm {
    background: #d32f2f;
    color: #fff;
  }
  </style>
  