import { Board, BOARD_ID } from '../../../entities/board.domain';
import { BoardUpdateReqDto } from '../../../entities/dto/req/boardUpdateReqDto';
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

  const update = async (
    boardUpdateReqDto: BoardUpdateReqDto
  ): Promise<Board> => {
    if (!boardUpdateReqDto.boardId) {
      throw new Error('게시판 ID가 존재하지 않습니다.');
    }
    return await boardRepository.updateBoard(boardUpdateReqDto);
  };

  return { detail, update };
};

export default useBoardDetailService;
