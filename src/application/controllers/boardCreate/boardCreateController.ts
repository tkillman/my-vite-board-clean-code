import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useState } from 'react';

import { Board, defaultBoard } from '../../../entities/board.domain';
import { BoardCreateReqDto } from '../../../entities/dto/req/boardCreateReqDto';
import { BoardCreateResDto } from '../../../entities/dto/res/boardCreateResDto';
import { BoardResDto } from '../../../entities/dto/res/boardResDto';
import { CustomError } from '../../../entities/error/customError';
import useBoardCreateService from '../../services/impl/boardCreateServiceImpl';
import useNotifyService from '../../services/impl/notifyServiceImpl';
import { NotifyService } from '../../services/notifyService.types';

/**
 * 게시판 등록 컨트롤러를 나타내는 인터페이스입니다.
 * @interface BoardCreateController
 */
export interface BoardCreateController {
  /**
   * 게시판 제목
   */
  title: string;

  /**
   * 게시판 제목 설정
   */
  setBoard: React.Dispatch<React.SetStateAction<BoardResDto>>;

  /**
   * 게시판 내용
   */
  content: string;

  /**
   * 게시판 저장 Mutation
   */
  createBoardMutation: UseMutationResult<
    BoardCreateResDto,
    Error,
    BoardCreateReqDto,
    unknown
  >;
}

const useBoardCreateController = ({
  onSuccess,
}: {
  onSuccess?: (data: BoardCreateResDto) => void;
}): BoardCreateController => {
  const [{ title, content }, setBoard] = useState<Board>(defaultBoard);

  const boardCreateService = useBoardCreateService(); // 게시판 서비스 DI 주입
  const notifyService: NotifyService = useNotifyService(); // 알림 서비스 DI 주입

  const createBoardMutation = useMutation({
    mutationFn: (boardCreateReqDto: BoardCreateReqDto) =>
      boardCreateService.createBoard(boardCreateReqDto),
    onSuccess: (data) => {
      notifyService.notify('저장 성공');
      onSuccess?.(data);
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

  return { createBoardMutation, title, content, setBoard: setBoard };
};

export default useBoardCreateController;
