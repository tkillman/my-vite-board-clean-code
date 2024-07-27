import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Board, BOARD_ID } from '../../../entities/board.domain';
import { queryKeys } from '../../../entities/queryKey';
import useBoardDetailService from '../../services/impl/boardDetailServiceImpl';

/**
 * 게시판 상세 컨트롤러
 */
export type BoardDetailController = (
  req: BoardDetailControllerReq
) => BoardDetailControllerRes;

/**
 * 게시판 상세 컨트롤러 요청타입
 */
interface BoardDetailControllerReq {
  boardId: BOARD_ID;
}

/**
 * 게시판 상세 컨트롤러 리턴타입
 */
interface BoardDetailControllerRes {
  boardId: BOARD_ID;
  boardDetailQueryResult: UseQueryResult<Board, Error>;
}

export const useBoardDetailController: BoardDetailController = (req) => {
  console.log('useBoardDetailController', req.boardId);
  const boardDetailService = useBoardDetailService();

  const boardDetailQueryResult = useQuery({
    queryKey: queryKeys.board.detail(req.boardId).queryKey,
    queryFn: async () => await boardDetailService.detail(req.boardId),
    enabled: !!req.boardId,
  });

  return {
    boardId: req.boardId,
    boardDetailQueryResult,
  };
};
