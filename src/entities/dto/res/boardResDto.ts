import { AxiosResponse } from 'axios';

import { BoardCommentResDto } from './boardCommentResDto';
import { Board } from '../../board.domain';

import { CommonApiType } from '~/entities/common/commonApi.type';

export type BoardResDto = {
  boardId: string; // 게시판 primary key
  title: string; // 제목
  content: string; // 내용
  boardComments?: BoardCommentResDto[]; // 게시판에 달린 댓글
};

export type SearchBoardDetailApiResponse = CommonApiType<BoardResDto>;

export const convertBoardResDtoToBoard = (boardResDto: BoardResDto): Board => {
  return {
    boardId: boardResDto.boardId,
    title: boardResDto.title || '',
    content: boardResDto.content || '',
  };
};
