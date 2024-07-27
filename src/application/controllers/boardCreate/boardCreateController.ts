import { BoardService, CustomError } from '../../services/boardService.types';
import useBoardService from '../../services/impl/boardServiceImpl';

import { BoardCreateReqDto } from '../../../entities/dto/req/boardCreateReqDto';
import { NotifyService } from '../../services/notifyService.types';
import useNotifyService from '../../services/impl/notifyServiceImpl';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useState } from 'react';
import { Board, defaultBoard } from '../../../entities/board.domain';
import { BoardResDto } from '../../../entities/dto/res/boardResDto';

/**
 * 보드 등록 컨트롤러를 나타내는 인터페이스입니다.
 * @interface BoardCreateController
 */
export interface BoardCreateController {
  /**
   * 보드 제목
   */
  title: string;

  /**
   * 보드 제목 설정
   */
  setBoard: React.Dispatch<React.SetStateAction<BoardResDto>>;

  /**
   * 보드 내용
   */
  content: string;

  /**
   * 보드 저장 Mutation
   */
  saveBoardMutation: UseMutationResult<void, Error, BoardCreateReqDto, unknown>;
}

const useBoardCreateController = ({
  onSuccess,
}: {
  onSuccess?: VoidFunction;
}): BoardCreateController => {
  const [{ title, content }, setBoard] = useState<Board>(defaultBoard);

  const boardService: BoardService = useBoardService(); // 보드 서비스 DI 주입
  const notifyService: NotifyService = useNotifyService(); // 알림 서비스 DI 주입

  const saveBoardMutation = useMutation({
    mutationFn: (boardCreateReqDto: BoardCreateReqDto) =>
      boardService.createBoard(boardCreateReqDto),
    onSuccess: () => {
      notifyService.notify('저장 성공');
      onSuccess?.();
    },
    onError: (error: Error) => {
      if (error instanceof CustomError) {
        notifyService.notify(error.message);
      } else {
        console.error(error);
        notifyService.notify('알수없는 에러가 발생하였습니다.');
      }
    },
  });

  return { saveBoardMutation, title, content, setBoard: setBoard };
};

export default useBoardCreateController;
