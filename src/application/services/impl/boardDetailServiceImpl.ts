import { Board, BOARD_ID } from '../../../entities/board.domain';
import { useBoardRepository } from '../../repositories/impl/boardRepositoryImpl';
import { BoardDetailService } from '../boardDetailService.types';

const useBoardDetailService = (): BoardDetailService => {
  const boardRepository = useBoardRepository();

  const detail = async (boardId?: BOARD_ID): Promise<Board> => {
    if (!boardId) {
      throw new Error('게시판 ID가 존재하지 않습니다.');
    }
    return await boardRepository.searchBoardDetail(boardId);
  };

  return { detail };
};

export default useBoardDetailService;
