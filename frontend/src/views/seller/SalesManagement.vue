<template>
  <Layout headerTitle="매출 관리">
    <div class="sales-container">
      <h1 class="page-title">매출 관리</h1>

      <div class="alert-box">
        만료 예정 고객 {{ upcomingCount }}명 / 오늘 기준 {{ todayCount }}명 만료됨 → 전체 목록 보기 / 문자 일괄 발송
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
                <div class="cell" v-if="cell.date" :class="{ selected: isDateSelected(cell.date) }" @click="handleDateClick(cell.date)">
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
        <th>사용시작일</th>
        <th>만료일(Dday)</th>
        <th>결제방식</th>
        <th>만료알림</th>
        <th>문자발송</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in expirationData" :key="index">
        <td>{{ row.pcName }}</td>
        <td>{{ row.startDate }}</td>
        <td>{{ row.endDate }}</td>
        <td>{{ row.autoRenew }}</td>
        <td :style="{ color: row.ddayColor }">{{ row.dday }}</td>
        <td>
          <button class="sms-btn">문자발송</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>

    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../layouts/Layout.vue';
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const sales = [
  100000, 0, 50000, 120000, 130000, 150000, 80000,
  70000, 90000, 110000, 0, 50000, 50000, 40000,
  75000, 87000, 65000, 90000, 100000, 120000,
  30000, 40000, 55000, 72000, 61000, 33000,
  20000, 19000, 18000, 0, 0
]

const expirationData = ref([])
const selectedDates = ref<Date[]>([])
const upcomingCount = ref(0)
const todayCount = ref(0)

const todaySales = sales[new Date().getDate() - 1] || 0
const totalSales = sales.reduce((sum, n) => sum + n, 0)
const currentYear = ref(new Date().getFullYear())
const currentMonth = ref(new Date().getMonth() + 1)

const getDaysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate()
const getStartDay = (year: number, month: number) => new Date(year, month - 1, 1).getDay()

const weekDays = ['일', '월', '화', '수', '목', '금', '토']

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

const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12
    currentYear.value -= 1
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1
    currentYear.value += 1
  } else {
    currentMonth.value++
  }
}

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

function handleDateClick(day: number | null) {
  if (!day) return
  const clicked = new Date(currentYear.value, currentMonth.value - 1, day)
  const index = selectedDates.value.findIndex((d) => isSameDate(d, clicked))
  if (index !== -1) {
    selectedDates.value.splice(index, 1)
  } else {
    selectedDates.value.push(clicked)
  }
}

function isDateSelected(day: number): boolean {
  return selectedDates.value.some(
    (d) =>
      d.getFullYear() === currentYear.value &&
      d.getMonth() === currentMonth.value - 1 &&
      d.getDate() === day
  )
}

onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    console.error('토큰이 없습니다.')
    return
  }

  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/sales/pc-list`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    expirationData.value = response.data.map((item: any) => {
      const endDateObj = item.endDate ? toStartOfDay(new Date(item.endDate)) : null
      const dday = endDateObj ? calculateDday(endDateObj) : ''
      const ddayColorInfo = endDateObj ? calculateDdayColor(endDateObj) : { text: '', color: '' }
      const ddayValue = endDateObj ? calculateDdayValue(endDateObj) : null
      const autoRenewText = item.autoRenew === true ? '자동갱신' : item.autoRenew === false ? '수동갱신' : ''

      return {
        pcName: item.pcName,
        startDate: item.startDate ? new Date(item.startDate).toLocaleDateString('ko-KR') : '',
        endDate: endDateObj ? endDateObj.toLocaleDateString('ko-KR') : '',
        autoRenew: autoRenewText,
        dday: dday,
        ddayColor: ddayColorInfo.color,
        ddayValue: ddayValue
      }
    })

    upcomingCount.value = expirationData.value.filter((row: any) => row.ddayValue > 0 && row.ddayValue <= 7).length
    todayCount.value = expirationData.value.filter((row: any) => row.ddayValue === 0).length

  } catch (error) {
    console.error('PC 목록 가져오기 실패:', error)
  }
})

function toStartOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function calculateDday(endDate: Date): string {
  const today = toStartOfDay(new Date())
  const diffTime = endDate.getTime() - today.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  if (isNaN(diffDays)) return ''
  return diffDays === 0 ? 'D-Day' : `D${diffDays > 0 ? '-' : '+'}${Math.abs(diffDays)}`
}

function calculateDdayColor(endDate: Date): { text: string, color: string } {
  const today = toStartOfDay(new Date())
  const diffTime = endDate.getTime() - today.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays > 7 || isNaN(diffDays)) return { text: '', color: '' }

  const label = diffDays === 0 ? 'D-Day' : `D-${diffDays}`
  if (diffDays === 0) return { text: label, color: 'red' }
  if (diffDays >= 4 && diffDays <= 7) return { text: label, color: 'orange' }
  if (diffDays >= 1 && diffDays <= 3) return { text: label, color: 'red' }

  return { text: '', color: '' }
}

function calculateDdayValue(endDate: Date): number | null {
  const today = toStartOfDay(new Date())
  const diffTime = endDate.getTime() - today.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return isNaN(diffDays) ? null : diffDays
}
</script>


<style src="../../style/seller_css/sales-management.css"></style> 