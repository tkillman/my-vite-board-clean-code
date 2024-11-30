import { atom } from 'recoil';

import { SearchBoardListReqDto } from '~/entities/dto/req/searchBoardListReqDto';

export const defaultBoardListReqDto: SearchBoardListReqDto = {
  searchTitle: '',
};

export const boardListReq = atom<SearchBoardListReqDto>({
  key: 'boardListReq',
  default: defaultBoardListReqDto,
});
