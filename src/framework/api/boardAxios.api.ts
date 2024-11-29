// src/api/apiService.ts
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import { targetApiDomain } from '../apiDoaminUtil';

import { BOARD_ID } from '~/src/entities/board.domain';
import { BoardListReqDto } from '~/src/entities/dto/req/boardListReqDto';
import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import axiosInstance from '~/src/lib/axiosUtil';

const apiDomain = targetApiDomain();

export const queryKeys = createQueryKeyStore({
  board: {
    list: null,
    detail: (boardId: BOARD_ID) => [boardId],
  },
});

export const searchBoardListAxiosApi = async (
  boardListReqDto: BoardListReqDto
) => {
  const response = await axiosInstance.post<SearchBoardListApiResponse>(
    `${apiDomain}/api/searchBoardList`,
    {
      searchTitle: boardListReqDto.searchTitle,
    },
    {
      headers: {
        aaa: 'bbb',
      },
    }
  );
  return response;
};
