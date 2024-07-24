import { searchBoardListApi } from '../../../framework/api/board.api';
import { BoardListRepository } from '../boardListRepository.types';
import { BoardListReqDto } from '../../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../../entities/dto/res/boardResDto';

export const useBoardListRepository = (): BoardListRepository => {
  const searchBoardList = async (
    boardListReqDto: BoardListReqDto
  ): Promise<BoardResDto[]> => {
    const response = await searchBoardListApi(boardListReqDto);
    return response?.data ?? [];
  };
  return { searchBoardList };
};
