import { useMutation } from '@tanstack/react-query';
import { BoardCreateReqDto } from '../../../entities/dto/req/boardCreateReqDto';
import { saveBoardApi } from '../../../framework/api/board.api';
import { BoardRepository } from '../boardRepository.types';

export const useBoardRepository = (): BoardRepository => {
  const saveBoard = useMutation({
    mutationFn: (param: BoardCreateReqDto) => saveBoardApi(param),
  });

  return { saveBoard };
};
