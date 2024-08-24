import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRef } from 'react';

import {
  BoardListReqDto,
  defaultBoardListReqDto,
} from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import { queryKeys } from '../../entities/queryKey';
import useBoardListService from '../services/impl/boardListServiceImpl';

export type BoardListController = (
  req?: BoardListControllerReq
) => BoardListControllerRes;

/**
 * 게시판 목록 컨트롤러 요청타입
 */
interface BoardListControllerReq {
  listQueryOptions?: {
    enabled: boolean;
  };
}

/**
 * 게시판 목록 컨트롤러 리턴타입
 */
interface BoardListControllerRes {
  /**
   * 게시판 목록 쿼리 결과
   */
  boardListQueryResult: UseQueryResult<BoardResDto[], Error>;

  /**
   * 게시판 검색조건 변경
   * @param boardListReqDto
   * @returns
   */
  changeSearchValue: (boardListReqDto: BoardListReqDto) => void;
}

export const useBoardListController: BoardListController = (req) => {
  const boardListService = useBoardListService();

  const refSearchValue = useRef<BoardListReqDto>(defaultBoardListReqDto);

  const boardListQueryResult = useQuery({
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
