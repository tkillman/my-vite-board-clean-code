import { describe, it, expect } from 'vitest';

import { RESULT, isSuccess } from '~/src/entities/result.domain';

describe('RESULT Enum', () => {
  it('should have SUCCESS and FAIL values', () => {
    expect(RESULT.SUCCESS).toBe('SUCCESS');
    expect(RESULT.FAIL).toBe('FAIL');
  });
});

describe('isSuccess Function', () => {
  it('should return true for RESULT.SUCCESS', () => {
    expect(isSuccess(RESULT.SUCCESS)).toBe(true);
  });

  it('should return false for RESULT.FAIL', () => {
    expect(isSuccess(RESULT.FAIL)).toBe(false);
  });
});
