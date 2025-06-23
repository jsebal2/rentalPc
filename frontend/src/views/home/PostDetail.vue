<template>
    <div class="post-detail">
      <Header />
  
      <div class="post-header">
        <h1 class="post-title">{{ post?.introduction_title }}</h1>
        <div class="post-meta">
          <span class="writer">{{ post?.business_name }}</span>
          <span class="views">조회 {{ post?.views }}회</span>
          <span class="date">{{ post?.created_at }}</span>
        </div>
      </div>
  
      <div class="post-content" v-html="post?.introduction_content"></div>
      <div>
        <button class="follow-btn" @click="handleFollow">팔로우 요청</button>
      </div>
  
      <div class="post-footer">
        <button>이전글 : {{ previousPost?.introduction_title ?? '이전글이 없습니다' }}</button>
        <div class="back-button" @click="goBack">목록</div>
        <button>다음글 : {{ nextPost?.introduction_title ?? '다음글이 없습니다' }}</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  import Header from '../../components/Header.vue';
  
  const route = useRoute();
  const router = useRouter();
  const post = ref<any>(null);
  const allPosts = ref<any>(null);

  const loginUserId = Number(localStorage.getItem('user_id'));
  const sellerUserId = Number(route.params.user_id);
  

  const handleFollow = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/post-detail/follow`, {
        loginUserId,
        sellerUserId,
      });
      alert('팔로우 요청이 전송되었습니다.');
    } catch (error) {
      if (error.response?.status === 409) {
        alert('이미 팔로우 요청이 존재합니다.');
      } else {
        alert('팔로우 요청 오류가 발생했습니다.');
      }
    }
  };
  
  onMounted(async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/post-detail/list`);
    allPosts.value = data;
    const current = data.find((p: any) => p.user_id === sellerUserId);
    post.value = current;
  } catch (e) {
    console.error('상세 페이지 데이터 조회 오류:', e);
  }
});

  const formattedContent = computed(() => {
    if (!post.value?.content) return '';
    return post.value.content.replace(/\n/g, '<br>');
  });
  
  const goBack = () => {
    router.back();
  };
  
  const previousPost = ref(null); // 필요시 API 연결
  const nextPost = ref(null);     // 필요시 API 연결
  </script>
  
  <style scoped src="../../style/home_css/post-detail.css"></style>