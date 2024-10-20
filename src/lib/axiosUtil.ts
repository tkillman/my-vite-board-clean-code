// src/api/axiosInstance.ts
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  timeout: 5000, // 요청 타임아웃 시간 (밀리초 단위)
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 인증 에러 처리 (예: 로그인 페이지로 리다이렉트)
      alert('Unauthorized! Redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
