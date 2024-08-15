import { useRecoilValue } from 'recoil';

import { Board, BOARD_ID } from '../../../entities/board.domain';
import { BoardUpdateReqDto } from '../../../entities/dto/req/boardUpdateReqDto';
import { useBoardRepository } from '../../repositories/impl/boardRepositoryImpl';
import { systemAtom } from '../../repositories/recoil/system.recoil';
import { BoardDetailService } from '../boardDetailService.types';

import { convertBoardResDtoToBoard } from '~/src/entities/dto/res/boardResDto';
import { CustomError } from '~/src/entities/error/customError';
import { isIncludeFuck } from '~/src/entities/system.domain';

const useBoardDetailService = (): BoardDetailService => {
  const boardRepository = useBoardRepository();
  const systemAtomValue = useRecoilValue(systemAtom);

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

    // 비지니스 로직
    if (
      systemAtomValue.isFilterFuck &&
      isIncludeFuck(boardUpdateReqDto.content)
    ) {
      throw new CustomError('욕설포함');
    }

    return await boardRepository.updateBoard(boardUpdateReqDto);
  };

  return { detail, update };
};

export default useBoardDetailService;
