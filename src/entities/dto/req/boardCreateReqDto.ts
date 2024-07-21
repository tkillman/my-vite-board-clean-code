import { BoardResDto } from '../res/boardResDto';

export type BoardCreateReqDto = Pick<BoardResDto, 'title' | 'content'>;

export const defaultBoardCreateReqDto: BoardCreateReqDto = {
  title: '',
  content: '',
};

export const fuckWords = ['시발', '개새끼']; // 욕설대상

/**
 * 욕설포함여부
 * @param boardCreateReqDto
 * @returns boolean
 */
export const isIncludeFuck = (boardCreateReqDto: BoardCreateReqDto) => {
  // 정규 표현식 생성
  const regex = new RegExp(fuckWords.join('|'), 'i');
  // 문자열에 특정 단어가 포함되어 있는지 검사
  return regex.test(boardCreateReqDto.content);
};
