import { AxiosResponse } from 'axios';

import { BoardCommentResDto } from './boardCommentResDto';

import { CommonApiType } from '~/entities/common/commonApi.type';

export type SearchBoardListResDto = {
  boardId: string; // 게시판 primary key
  title: string; // 제목
  content: string; // 내용
  boardComments?: BoardCommentResDto[]; // 게시판에 달린 댓글
};

export type SearchBoardListApiResponse = CommonApiType<SearchBoardListResDto[]>;

export type SearchBoardListAxiosResponse =
  AxiosResponse<SearchBoardListApiResponse>;
