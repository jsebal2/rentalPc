<template>
  <AdminLayout headerTitle="매출 관리">
    <div class="sales-container">
      <h1 class="page-title">매출 관리</h1>

      <div class="alert-box">
        만료 예정 고객 3명 / 오늘 기준 2명 만료됨 → 전체 목록 보기 / 문자 일괄 발송
      </div>

      <div class="month-selector">
        <button @click="prevMonth">&lt;</button>
        <span>{{ currentYear }}년 {{ currentMonth }}월</span>
        <button @click="nextMonth">&gt;</button>
      </div>

      <div class="summary-cards">
        <div class="card">
          <div class="card-title">금일 매출</div>
          <div class="card-value">₩{{ todaySales.toLocaleString() }}</div>
        </div>
        <div class="card">
          <div class="card-title">이번 달 누적 매출</div>
          <div class="card-value">₩{{ totalSales.toLocaleString() }}</div>
        </div>
      </div>

      <div class="search-section">
        <div class="search-title">사용자 검색</div>
        <input type="text" placeholder="날짜" />
        <input type="text" placeholder="결제방식" />
        <button class="csv-button">csv파일 다운로드</button>
      </div>

      <div class="sales-table">
        <table>
          <thead>
            <tr>
              <th v-for="day in weekDays" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(week, wIndex) in calendarGrid" :key="wIndex">
              <td v-for="(cell, dIndex) in week" :key="dIndex">
                <div class="cell" v-if="cell.date">
                  <div class="day">{{ cell.date }}일</div>
                  <div class="amount" v-if="cell.amount !== null">
                    ₩{{ cell.amount.toLocaleString() }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="expiration-table">
  <table>
    <thead>
      <tr>
        <th>PC ID</th>
        <th>이름</th>
        <th>사용시작일</th>
        <th>만료일(Dday)</th>
        <th>결제방식</th>
        <th>만료알림</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in expirationData" :key="index">
        <td>{{ row.pcId }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.startDate }}</td>
        <td>{{ row.endDate }}</td>
        <td>{{ row.payment }}</td>
        <td>
          <button class="sms-btn">문자발송</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>

    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '../../layouts/AdminLayout.vue';
import { ref, computed } from 'vue'
import axios from 'axios'

const daysInMonth = 31
const startDay = 3 // 수요일 시작 (0:일 ~ 6:토)
const pcList = ref([])

// 누적 및 금일 매출 계산
const todaySales = sales[new Date().getDate() - 1] || 0
const totalSales = sales.reduce((sum, n) => sum + n, 0)
const currentYear = ref(new Date().getFullYear())
const currentMonth = ref(new Date().getMonth() + 1)

const getDaysInMonth = (year : number, month : number) => {
  return new Date(year, month, 0).getDate()
}
const getStartDay = (year : number, month : number) => {
  return new Date(year, month - 1, 1).getDay()
}


// 요일 헤더
const weekDays = ['일', '월', '화', '수', '목', '금', '토']

// 달력 생성
const calendarGrid = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value

  const days = getDaysInMonth(year, month)
  const startDay = getStartDay(year, month)

  const grid = []
  let currentDay = 1
  
  for (let row = 0; row < 6; row++) {
    const week = []
    for (let col = 0; col < 7; col++) {
      const cellIndex = row * 7 + col
      if (cellIndex < startDay || currentDay > days) {
        week.push({ date: null, amount: null })
      } else {
        week.push({
          date: currentDay,
          amount: sales[currentDay - 1] || 0
        })
        currentDay++
      }
    }
    grid.push(week)
  }
  return grid
})

// 월 이동 (임시용, 실제 달력과 연동하려면 Date API 사용 필요)
const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12
    currentYear.value -=1
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1
    currentYear.value += 1
  } else {
    currentMonth.value ++
  }
}

const fetchPcList = async () => {
  try {
    const userInfo = localStorage.getitem('user')
    if (!userInfo) {

    }
  }}


</script>

<style src="../../style/buyer_css/sales-management.css"></style> 