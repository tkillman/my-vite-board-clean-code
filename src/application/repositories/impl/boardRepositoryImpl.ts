import { useMutation } from '@tanstack/react-query';
import { BoardCreateReqDto } from '../../../entities/dto/req/boardCreateReqDto';
import { createBoardApi } from '../../../framework/api/board.api';
import { BoardRepository } from '../boardRepository.types';

export const useBoardRepository = (): BoardRepository => {
  const createBoard = async (newBoard: BoardCreateReqDto) => {
    await createBoardApi(newBoard);
  };

  return { createBoard };
};
