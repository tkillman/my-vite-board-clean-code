// src/api/axiosInstance.ts
import * as Sentry from '@sentry/react';
import axios, { AxiosInstance } from 'axios';

import { sentryLogger } from './sentryLogger';

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
    // 센트리 로깅
    //sentryLogger(error);

    return Promise.reject(error);
  }
);

export default axiosInstance;
