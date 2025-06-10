<template>
  <AdminLayout headerTitle="관리자 DashBoard">
    <div class="content-row">
      <div class="content-left">
        <div class="stat-cards">
          <div class="stat-card">
            <div class="stat-title">총 PC 수</div>
            <div class="stat-value">120 대</div>
          </div>
          <div class="stat-card">
            <div class="stat-title">현재 사용 중</div>
            <div class="stat-value">80 대</div>
          </div>
          <div class="stat-card">
            <div class="stat-title">미사용</div>
            <div class="stat-value">40 대</div>
          </div>
          <div class="stat-card">
            <div class="stat-title">만료 예정 pc</div>
            <div class="stat-value">10 명</div>
          </div>
        </div>
        <div class="chart-section">
          <div class="chart-title">접속 추이</div>
          <div class="chart-box"></div>
        </div>
        <div class="log-section">
          <div class="log-title">최근접속로그</div>
          <div class="log-box"></div>
        </div>
      </div>
      <div class="content-right">
        <div class="status-section">
          <div class="status-title">PC상태(사용중, 미사용, 고장)</div>
          <div class="status-box"></div>
        </div>
        <div class="warning-section">
          <div class="warning-title">경고</div>
          <div class="warning-box"></div>
        </div>
        <div class="button-section">
          <div class="blue-button">고객 상담 바로가기</div>
          <div class="blue-button">PC 상태 관리</div>
          <div class="blue-button">요금제 설정</div>
          <div class="blue-button">접속 로그 확인</div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '../../layouts/AdminLayout.vue';
</script>

<style src="../../style/seller_css/admin-dashboard.css"></style>

<!-- 스타일은 style 폴더의 admin-dashboard.css에서 import 하세요. --> 