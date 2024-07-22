import { searchBoardListApi } from '../../../framework/api/board.api';
import { BoardListRepository } from '../boardListRepository.types';
import { BoardListReqDto } from '../../../entities/dto/req/boardListReqDto';

export const useBoardListRepository = (): BoardListRepository => {
  const searchBoardList = async (boardListReqDto: BoardListReqDto) => {
    const response = await searchBoardListApi(boardListReqDto);
    return response?.data;
  };
  return { searchBoardList };
};
