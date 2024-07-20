import { BoardComment } from './boardComment.type';

export type Board = {
  boardId: string; // 보드 primary key
  title: string; // 제목
  content: string; // 내용
  boardComments?: BoardComment[]; // 보드에 달린 댓글
};
