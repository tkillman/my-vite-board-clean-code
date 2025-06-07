// src/api/apiService.ts
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import { ApiPath } from './enumApi';

import { BOARD_ID } from '~/src/entities/board.domain';
import { BoardCreateReqDto, CreateBoardApiResponse } from '~/src/entities/dto';
import { SearchBoardListReqDto } from '~/src/entities/dto/req/searchBoardListReqDto';
import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import axiosInstance from '~/src/lib/axiosUtil';
import { viteApiDomain } from '~/src/lib/envVars';

export const queryKeys = createQueryKeyStore({
  board: {
    list: (boardListReqDto: SearchBoardListReqDto) => [boardListReqDto],
    detail: (boardId: BOARD_ID) => [boardId],
  },
});

export const searchBoardListAxiosApi = async (
  boardListReqDto: SearchBoardListReqDto
) => {
  const response = await axiosInstance.post<SearchBoardListApiResponse>(
    `/${ApiPath['POST_api/searchBoardList']}`,
    {
      searchTitle: boardListReqDto.searchTitle,
    },
    {
      baseURL: viteApiDomain,
    }
  );
  return response;
};

export const createBoardAxiosApi = async (
  boardCreateDto: BoardCreateReqDto
) => {
  const response = await axiosInstance.post<CreateBoardApiResponse>(
    `${viteApiDomain}/api/createBoard`,
    boardCreateDto
  );
  return response;
};
