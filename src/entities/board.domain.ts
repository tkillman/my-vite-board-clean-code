import { BoardResDto } from './dto/res/boardResDto';

export type Board = BoardResDto;

export const defaultBoard: Board = {
  boardId: '',
  title: '',
  content: '',
};
