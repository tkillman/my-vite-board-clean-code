import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';

import {
  BoardListReqDto,
  defaultBoardListReqDto,
} from '../../entities/dto/req/boardListReqDto';

import { BoardResDto } from '~/entities/dto/res/boardResDto';
import { queryKeys } from '~/entities/queryKey';
import { SearchBoardListAxiosResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import { searchBoardListAxiosApi } from '~/src/framework/api/boardAxios.api';

/**
 * 게시판 목록 컨트롤러 요청타입
 */
interface BoardListControllerReq {
  listQueryOptions?: {
    enabled: boolean;
  };
}

export const useBoardListController = (req: BoardListControllerReq) => {
  const refSearchValue = useRef<BoardListReqDto>(defaultBoardListReqDto);

  const boardListQueryResult = useQuery<
    SearchBoardListAxiosResponse,
    Error,
    BoardResDto[]
  >({
    queryKey: queryKeys.board.list.queryKey,
    queryFn: async () => await searchBoardListAxiosApi(refSearchValue.current),
    select: (response) => {
      return response?.data.data ?? [];
    },
    enabled: req?.listQueryOptions?.enabled,
  });

  const changeSearchValue = (boardListReqDto: BoardListReqDto) => {
    refSearchValue.current = boardListReqDto;
  };

  return {
    boardListQueryResult,
    changeSearchValue,
  };
};
