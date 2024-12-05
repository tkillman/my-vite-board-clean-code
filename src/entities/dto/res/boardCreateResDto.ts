import { CommonApiType } from '~/entities/common/commonApi.type';

export type BoardCreateResDto = {
  boardId: string; // 게시판 primary key
  title: string; // 제목
  content: string; // 내용
};

export type CreateBoardApiResponse = CommonApiType<BoardCreateResDto>;
