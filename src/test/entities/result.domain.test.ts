import { describe, it, expect } from 'vitest';

import { RESULT, isSuccess } from '~/src/entities/result.domain';

describe('API 결과 코드', () => {
  it('성공은 SUCCESS, 실패는 FAIL', () => {
    expect(RESULT.SUCCESS).toBe('SUCCESS');
    expect(RESULT.FAIL).toBe('FAIL');
  });
});

describe('isSuccess 함수 테스트', () => {
  it('성공인 경우 true 반환', () => {
    expect(isSuccess(RESULT.SUCCESS)).toBe(true);
  });

  it('실패인 경우 false 반환', () => {
    expect(isSuccess(RESULT.FAIL)).toBe(false);
  });
});
