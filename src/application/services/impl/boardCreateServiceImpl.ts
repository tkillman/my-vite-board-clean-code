import { useRecoilValue } from 'recoil';

import { BoardCreateReqDto } from '../../../entities/dto/req/boardCreateReqDto';
import { CustomError } from '../../../entities/error/customError';
import { useBoardRepository } from '../../repositories/impl/boardRepositoryImpl';
import { systemAtom } from '../../repositories/recoil/system.recoil';
import { BoardCreateService } from '../boardCreateService.types';

import { isIncludeFuck } from '~/src/entities/system.domain';

const useBoardCreateService = (): BoardCreateService => {
  const boardRepository = useBoardRepository();
  const systemAtomValue = useRecoilValue(systemAtom);

  const createBoard = async (newBoard: BoardCreateReqDto) => {
    // 비지니스 로직
    if (systemAtomValue.isFilterFuck && isIncludeFuck(newBoard.content)) {
      throw new CustomError('욕설포함');
    }

    const board = await boardRepository.createBoard(newBoard);

    if (!board) {
      throw Error('등록 중 에러가 발생하였습니다.');
    }

    return board;
  };

  return { createBoard };
};

export default useBoardCreateService;
