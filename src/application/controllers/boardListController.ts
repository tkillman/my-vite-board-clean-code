import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import useBoardListService from '../services/impl/boardListServiceImpl';
import { queryKeys } from '../../entities/queryKey';

/**
 * 보드 목록 컨트롤러
 */
export interface BoardListController {
  /**
   * 보드 목록 쿼리 결과
   */
  boardListQueryResult: UseQueryResult<BoardResDto[], Error>;
}

export const useBoardListController = (
  boardListReqDto: BoardListReqDto,
  queryOption?: {
    enabled?: boolean;
  }
): BoardListController => {
  const boardListService = useBoardListService();

  const boardListQueryResult = useQuery({
    queryKey: queryKeys.board.list(boardListReqDto).queryKey,
    queryFn: () => boardListService.searchBoardList(boardListReqDto),
    enabled: queryOption?.enabled,
  });

  return { boardListQueryResult };
};
