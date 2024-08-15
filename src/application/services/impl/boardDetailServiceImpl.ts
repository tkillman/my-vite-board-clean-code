import { Board, BOARD_ID } from '../../../entities/board.domain';
import { BoardUpdateReqDto } from '../../../entities/dto/req/boardUpdateReqDto';
import { useBoardRepository } from '../../repositories/impl/boardRepositoryImpl';
import { BoardDetailService } from '../boardDetailService.types';

import { convertBoardResDtoToBoard } from '~/src/entities/dto/res/boardResDto';

const useBoardDetailService = (): BoardDetailService => {
  const boardRepository = useBoardRepository();

  const detail = async (boardId?: BOARD_ID): Promise<Board> => {
    if (!boardId) {
      throw new Error('게시판 ID가 존재하지 않습니다.');
    }

    const response = await boardRepository.searchBoardDetail(boardId);

    if (!response?.data?.boardId) {
      throw Error('Board not found');
    }

    const board = convertBoardResDtoToBoard(response.data);

    return board;
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
