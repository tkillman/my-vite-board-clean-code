// src/api/apiService.ts
import { targetApiDomain } from '../apiDoaminUtil';

import { BoardListReqDto } from '~/src/entities/dto/req/boardListReqDto';
import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import axiosInstance from '~/src/lib/axiosUtil';

const apiDomain = targetApiDomain();

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
