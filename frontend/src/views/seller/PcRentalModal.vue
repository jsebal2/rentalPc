<template>
    <div class="modal-overlay" @click.self="emit('close')">
      <div class="modal-box">
        <h2 class="modal-title">
            {{ props.selectedPcIds.length > 1 ? '여러 PC 대여하기' : 'PC 대여하기' }}
        </h2>

        <p class="modal-description" v-if="props.selectedPcIds.length > 1">
            선택된 {{ props.selectedPcIds.length }}개의 PC를 한 번에 대여합니다.
        </p>

  
        <div class="form-group">
          <label for="userKeyword">이메일 또는 이름</label>
          <input type="text" id="userKeyword" v-model="userKeyword" />
        </div>
  
        <div class="form-group">
          <label for="startDate">시작 날짜</label>
          <input type="date" id="startDate" v-model="startDate" :min="startDate" />
        </div>
  
        <div class="form-group">
          <label for="endDate">끝 날짜</label>
          <input type="date" id="endDate" v-model="endDate" :min="startDate" />
        </div>
  
        <div class="modal-buttons">
          <button class="btn cancel" @click="emit('close')">취소</button>
          <button class="btn confirm" @click="handleRent">대여하기</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  const emit = defineEmits(['close', 'rent'])

  const today = new Date()
  const startDate = ref(today.toISOString().slice(0, 10))

  const end = new Date(today)
  end.setDate(end.getDate() + 30)
  end.setHours(23, 59, 59, 999)
  const endDate = ref(end.toISOString().slice(0, 10))
  const userKeyword = ref('')

  watch(startDate, (newStart) => {
    const base = new Date(newStart)
    base.setDate(base.getDate() + 30)
    endDate.value = base.toISOString().slice(0, 10)
  })
  
  const handleRent = async () => {
  if (!userKeyword.value || !startDate.value || !endDate.value) {
    alert('모든 값을 입력해주세요.')
    return
  }

  try {
    // 백엔드에 유저 정보 요청 (예: `/pcs/find?keyword=${userKeyword}`)
    const res = await fetch(`${import.meta.env.VITE_API_URL}/pcs/find?keyword=${encodeURIComponent(userKeyword.value)}`)
    const user = await res.json()

    if (!user || !user.user_id) {
      alert('해당 유저를 찾을 수 없습니다.')
      return
    }

    emit('rent', {
      userId: user.user_id,
      startDate: startDate.value,
      endDate: endDate.value,
    })
  } catch (err) {
    console.error('유저 검색 실패:', err)
    alert('유저 검색 중 오류 발생')
  }
}


  const props = defineProps({
    selectedPcIds: {
      type: Array,
      default: () => [],
    },
  });
  
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
  }
  
  .modal-box {
    background: white;
    padding: 28px;
    border-radius: 12px;
    width: 360px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .modal-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .modal-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  .form-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 6px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #aaa;
    border-radius: 6px;
    box-sizing: border-box;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 20px;
  }
  
  .btn {
    padding: 8px 18px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    border: none;
  }
  
  .btn.cancel {
    background: #ddd;
    color: #333;
  }
  
  .btn.confirm {
    background: #1976f2;
    color: white;
  }


  </style>
  