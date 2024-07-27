import { BoardListReqDto } from '../../../entities/dto/req/boardListReqDto';
import { useBoardRepository } from '../../repositories/impl/boardRepositoryImpl';
import { BoardListService } from '../boardListService.types';

const useBoardListService = (): BoardListService => {
  const boardRepository = useBoardRepository();

  const searchBoardList = async (boardListReqDto: BoardListReqDto) => {
    return await boardRepository.searchBoardList(boardListReqDto);
  };
  return { searchBoardList };
};

export default useBoardListService;
