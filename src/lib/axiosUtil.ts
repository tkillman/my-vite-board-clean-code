// src/api/axiosInstance.ts
//import * as Sentry from '@sentry/react';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { CommonErrorType } from '../entities/common/commonApi.type';

//import { sentryLogger } from './sentryLogger';

const axiosInstance: AxiosInstance = axios.create({
  timeout: 5000, // 요청 타임아웃 시간 (밀리초 단위)
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //console.log('🚀 ~ interceptors error:', error);
    // 센트리 로깅
    //sentryLogger(error);

    return Promise.reject(error);
  }
);

export default axiosInstance;

export const axiosErrorDataParser = <T = CommonErrorType>(
  error: Error
): T | undefined => {
  if (axios.isAxiosError<T>(error)) {
    if (error.response) {
      const data = error.response.data;
      return data;
    }
  }
};

export const errorMessageParser = <T>(
  error: Error,
  errorMessageKey: keyof T
): string => {
  const defaultErrorMessage = '알 수 없는 오류입니다.';
  let errorMessage = '';
  console.log('aaa', JSON.stringify(error));
  if (axios.isAxiosError<T>(error)) {
    if (error.response) {
      const data = error.response.data;
      errorMessage = String(data[errorMessageKey] ?? '');
    } else if (error.request) {
      errorMessage = error.message;
    } else {
      errorMessage = error.message;
    }
  } else {
    errorMessage = error.message;
  }

  return errorMessage || defaultErrorMessage;
};
