import { atom } from 'recoil';

import { SearchBoardListReqDto } from '~/entities/dto/req/searchBoardListReqDto';

type BoardListReqState = SearchBoardListReqDto;

export const defaultBoardListReqDto: BoardListReqState = {
  searchTitle: '',
};

export const boardListReqState = atom<BoardListReqState>({
  key: 'boardListReqState',
  default: defaultBoardListReqDto,
});
