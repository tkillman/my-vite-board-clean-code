import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useState } from 'react';

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
   * 게시판 목록 요청 DTO
   */
  boardListReqDto: BoardListReqDto;

  /**
   * 게시판 목록 요청 DTO 설정
   */
  setBoardListReqDto: React.Dispatch<React.SetStateAction<BoardListReqDto>>;

  /**
   * 게시판 목록 쿼리 결과
   */
  boardListQueryResult: UseQueryResult<BoardResDto[], Error>;
}

export const useBoardListController: BoardListController = (req) => {
  const [boardListReqDto, setBoardListReqDto] = useState<BoardListReqDto>(
    defaultBoardListReqDto
  );

  const boardListService = useBoardListService();

  const boardListQueryResult = useQuery({
    queryKey: queryKeys.board.list.queryKey,
    queryFn: async () =>
      await boardListService.searchBoardList(boardListReqDto),
    enabled: req?.listQueryOptions?.enabled,
  });

  return {
    boardListQueryResult,
    boardListReqDto,
    setBoardListReqDto,
  };
};
