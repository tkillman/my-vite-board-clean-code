export type CommonApiType<T> = {
  status: number;
  message: string;
  data: T;
};
