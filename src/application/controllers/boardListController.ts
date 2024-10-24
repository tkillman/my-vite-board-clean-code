import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRef } from 'react';

import {
  BoardListReqDto,
  defaultBoardListReqDto,
} from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import { queryKeys } from '../../entities/queryKey';
import useBoardListService from '../services/impl/boardListServiceImpl';

import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';

/**
 * 게시판 목록 컨트롤러 요청타입
 */
interface BoardListControllerReq {
  listQueryOptions?: {
    enabled: boolean;
  };
}

export const useBoardListController = (req: BoardListControllerReq) => {
  const boardListService = useBoardListService();

  const refSearchValue = useRef<BoardListReqDto>(defaultBoardListReqDto);

  const boardListQueryResult = useQuery<BoardResDto[]>({
    queryKey: queryKeys.board.list.queryKey,
    queryFn: async () =>
      await boardListService.searchBoardList(refSearchValue.current),
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
