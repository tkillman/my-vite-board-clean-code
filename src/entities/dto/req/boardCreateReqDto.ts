import { BoardResDto } from '../res/boardResDto';

export type BoardCreateReqDto = Pick<BoardResDto, 'title' | 'content'>;

export const defaultBoardCreateReqDto: BoardCreateReqDto = {
  title: '',
  content: '',
};
