// src/api/apiService.ts
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import { BOARD_ID } from '~/src/entities/board.domain';
import { SearchBoardListReqDto } from '~/src/entities/dto/req/searchBoardListReqDto';
import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import { targetApiDomain } from '~/src/lib/apiDomainUtil';
import axiosInstance from '~/src/lib/axiosUtil';

const apiDomain = targetApiDomain();

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
    `${apiDomain}/api/searchBoardList`,
    {
      searchTitle: boardListReqDto.searchTitle,
    }
  );
  return response;
};
