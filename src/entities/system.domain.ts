export const fuckWords = ['시발', '개새끼']; // 욕설대상

export interface System {
  isFilterFuck: boolean; // 욕설 필터 true : 검출, false : 미검출
}

/**
 * 욕설포함여부
 * @param boardCreateReqDto
 * @returns boolean
 */
export const isIncludeFuck = (cotent: string) => {
  // 정규 표현식 생성
  const regex = new RegExp(fuckWords.join('|'), 'i');
  // 문자열에 특정 단어가 포함되어 있는지 검사
  return regex.test(cotent);
};
