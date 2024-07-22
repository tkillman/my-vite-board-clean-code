import { useRecoilValue } from 'recoil';
import {
  BoardCreateReqDto,
  isIncludeFuck,
} from '../../../entities/dto/req/boardCreateReqDto';
import { useBoardRepository } from '../../repositories/impl/boardRepositoryImpl';

import { BoardService, CustomError } from '../boardService.types';
import { systemAtom } from '../../repositories/recoil/system.recoil';

const useBoardService = (): BoardService => {
  const boardRepository = useBoardRepository();
  const systemAtomValue = useRecoilValue(systemAtom);

  const createBoard = async (newBoard: BoardCreateReqDto) => {
    // 비지니스 로직
    if (systemAtomValue.isFilterFuck && isIncludeFuck(newBoard)) {
      throw new CustomError('욕설포함');
    }

    await boardRepository.createBoard(newBoard);
  };

  return { createBoard };
};

export default useBoardService;
