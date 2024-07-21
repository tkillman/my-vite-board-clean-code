import { BoardCommentResDto } from './boardCommentResDto';

export type BoardResDto = {
  boardId: string; // 보드 primary key
  title: string; // 제목
  content: string; // 내용
  boardComments?: BoardCommentResDto[]; // 보드에 달린 댓글
};
