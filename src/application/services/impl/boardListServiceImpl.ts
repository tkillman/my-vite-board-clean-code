import { BoardListReqDto } from '../../../entities/dto/req/boardListReqDto';
import { useBoardListRepository } from '../../repositories/impl/boardListRepositoryImpl';
import { BoardListService } from '../boardListService.types';

const useBoardListService = (): BoardListService => {
  const boardListRepository = useBoardListRepository();

  const searchBoardList = async (boardListReqDto: BoardListReqDto) => {
    return await boardListRepository.searchBoardList(boardListReqDto);
  };
  return { searchBoardList };
};

export default useBoardListService;
