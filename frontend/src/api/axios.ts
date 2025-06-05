// src/api/axios.ts
import axios,{AxiosError, AxiosRequestConfig} from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials : true,
});

// 요청 인터셉터: 토큰 삽입
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 에러 처리
api.interceptors.response.use(
  (res) => res,
  async (err : AxiosError) => {
    const originalRequest = err.config as AxiosRequestConfig & { _retry? : Boolean};

    if (
      err.response?.status === 401 &&
      !originalRequest?._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshRes = await axios.post(
          import.meta.env.VITE_API_URL + 'users/refresh',
          {},
          { withCredentials : true }
        );

        const newToken = (refreshRes.data as any).accessToken;
        localStorage.setItem('token', newToken);

        // 새 토큰으로 원래 요청 다시 시도
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }

        return api(originalRequest);

      } catch (refreshError: any) {
        console.warn('토큰 갱신 실패', refreshError.response?.status);
        if (refreshError.response?.status === 401) {
          alert('다시 로그인 해주세요.');
        } else {
          alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }

        localStorage.removeItem('token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    console.error('[API ERROR]', err);
    return Promise.reject(err);
  }
);

export default api;
