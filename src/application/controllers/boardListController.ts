import {
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';
import {
  BoardListReqDto,
  defaultBoardListReqDto,
} from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import useBoardListService from '../services/impl/boardListServiceImpl';
import { queryKeys } from '../../entities/queryKey';
import { useState } from 'react';

/**
 * 보드 목록 컨트롤러
 */
export interface BoardListController {
  /**
   * 보드 목록 요청 DTO
   */
  boardListReqDto: BoardListReqDto;

  /**
   * 보드 목록 요청 DTO 설정
   */
  setBoardListReqDto: React.Dispatch<React.SetStateAction<BoardListReqDto>>;

  /**
   * 보드 목록 쿼리 결과
   */
  boardListQueryResult: UseQueryResult<BoardResDto[], Error>;
}

export const useBoardListController = (queryOption?: {
  enabled?: boolean;
}): BoardListController => {
  const [boardListReqDto, setBoardListReqDto] = useState<BoardListReqDto>(
    defaultBoardListReqDto
  );

  const boardListService = useBoardListService();

  const boardListQueryResult = useQuery({
    queryKey: queryKeys.board.list.queryKey,
    queryFn: async () =>
      await boardListService.searchBoardList(boardListReqDto),
    enabled: queryOption?.enabled,
  });

  return { boardListQueryResult, boardListReqDto, setBoardListReqDto };
};
