<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal-box">
      <h2>팔로우 요청 목록</h2>

      <div v-if="requests.length === 0" class="empty-message">요청이 없습니다.</div>

      <div v-for="req in requests" :key="req.id" class="follow-card">
        <!-- 내가 요청자일 때 -->
        <div v-if="req.requesterId === loginUserId">
          <div class="info">
            <span><strong>To:</strong> {{ req.receiver.name }} ({{ req.receiver.email }})</span>
            <span class="status">
              {{ req.approved === true ? '승인 완료' : '승인 대기중' }}
            </span>
          </div>
        </div>

        <!-- 내가 수신자일 때 -->
        <div v-else-if="req.receiverId === loginUserId">
          <div class="info">
            <span><strong>From:</strong> {{ req.requester.name }} ({{ req.requester.email }})</span>
            <span class="status">
              <template v-if="req.approved === true">
                <button disabled style="cursor: default;">승인 완료</button>
              </template>
              <template v-else>
                <button
                  @click="approve(req.id)"
                  :disabled="approvingId === req.id"
                >
                  승인
                </button>
              </template>
            </span>
          </div>
        </div>
      </div>

      <button class="close-btn" @click="close">닫기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const emit = defineEmits(['close'])
const close = () => emit('close')

const loginUserId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId
const requests = ref([])
const approvingId = ref(null)

const fetchRequests = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/follow/${loginUserId}`)
    requests.value = res.data
  } catch (err) {
    console.error('팔로우 요청 목록 불러오기 실패:', err)
  }
}

const approve = async (id) => {
  try {
    approvingId.value = id
    await axios.patch(`${import.meta.env.VITE_API_URL}/follow/approve/${id}`)
    alert('승인 완료되었습니다.')
    await fetchRequests()
  } catch (err) {
    console.error('승인 처리 실패:', err)
    alert('승인 중 오류가 발생했습니다.')
  } finally {
    approvingId.value = null
  }
}

onMounted(fetchRequests)
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-box {
  background: #fff;
  padding: 25px 30px;
  border-radius: 10px;
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

h2 {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

.follow-card {
  background: #f9f9f9;
  padding: 12px 15px;
  margin-bottom: 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
}

.status {
  font-weight: bold;
  color: #333;
}

button {
  padding: 6px 12px;
  font-size: 13px;
  border: none;
  background-color: #1976f2;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #145bcc;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.close-btn {
  margin-top: 15px;
  width: 100%;
  background-color: #888;
}

.empty-message {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
