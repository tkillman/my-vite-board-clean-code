import { Board } from '../../board.domain';

export type BoardUpdateResDto = {
  boardId: string; // 게시판 primary key
  title: string; // 제목
  content: string; // 내용
};

export const convertBoardUpdateResDtoToBoard = (
  boardUpdateResDto: BoardUpdateResDto
): Board => {
  return {
    boardId: boardUpdateResDto.boardId,
    title: boardUpdateResDto.title || '',
    content: boardUpdateResDto.content || '',
  };
};
