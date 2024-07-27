import { BoardCommentResDto } from './boardCommentResDto';

export type BoardResDto = {
  boardId: string; // 게시판 primary key
  title: string; // 제목
  content: string; // 내용
  boardComments?: BoardCommentResDto[]; // 게시판에 달린 댓글
};

export const convertBoardResDtoToBoard = (boardResDto: BoardResDto) => {
  return {
    boardId: boardResDto?.boardId,
    title: boardResDto?.title || '',
    content: boardResDto?.content || '',
  };
};
