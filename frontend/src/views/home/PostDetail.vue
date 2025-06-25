<template>
  <div class="con">
    <div class="post-detail">
      <Header :class="{ scrolled: isScrolled }" />
  
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
        <button 
          :disabled="!prevSellerId"
          :class="{ 'disabled': !prevSellerId }"
          @click="router.push(`/post-detail/${prevSellerId}?all=${allSellerIds.join(',')}, title : ${rawTitle}`)"
        >
          이전글
        </button>
        <div class="back-button" @click="goBack">목록</div>
        <button 
          :disabled="!nextSellerId"
          :class="{ 'disabled': !nextSellerId }"
          @click="router.push(`/post-detail/${nextSellerId}?all=${allSellerIds.join(',')}, title : ${rawTitle}`)"
        >
          다음글
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { onMounted, ref, computed, watch, onUnmounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  import Header from '../../components/Header.vue';
  
  const route = useRoute();
  const router = useRouter();
  const post = ref<any>(null);
  const rawTitle = route.query.title as string;

  const loginUserId = Number(localStorage.getItem('user_id'));
  const sellerUserId = computed(() => Number(route.params.user_id));
  const allSellerIds = ref<number[]>([]);
  

  const handleFollow = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/post-detail/follow`, {
        loginUserId,
        sellerUserId: sellerUserId.value,
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
    const raw = route.query.all as string;
    if (raw) {
      allSellerIds.value = raw.split(',').map(Number);
    }
    const { user_id } = route.params;
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/post-detail/${user_id}`);
    post.value = data;
  });

  const formattedContent = computed(() => {
    if (!post.value?.content) return '';
    return post.value.content.replace(/\n/g, '<br>');
  });
  
  const goBack = () => {
    router.push(`/product-detail/${rawTitle}`);
  };

  
  const prevSellerId = computed(() => {
    const idx = allSellerIds.value.indexOf(sellerUserId.value);
    return idx > 0 ? allSellerIds.value[idx - 1] : null;
  });

  const nextSellerId = computed(() => {
    const idx = allSellerIds.value.indexOf(sellerUserId.value);
    return idx >= 0 && idx < allSellerIds.value.length - 1
      ? allSellerIds.value[idx + 1]
      : null;
  });


watch(() => route.params.user_id, async (newId) => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/post-detail/${Number(newId)}`);
  post.value = data;
});

const isScrolled = ref(false);

const handleScroll = () => {
  console.log('scrollY:', window.scrollY);
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>
  
  <style scoped src="../../style/home_css/post-detail.css"></style>