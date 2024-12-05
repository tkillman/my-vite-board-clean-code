export type CommonApiType<T> = {
  status: number;
  message: string;
  data: T;
};

export type CommonErrorType = {
  errorCode: string;
  errorMessage: string;
};
