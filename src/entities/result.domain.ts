export enum RESULT {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export const isSuccess = (result: RESULT): boolean => result === RESULT.SUCCESS;
