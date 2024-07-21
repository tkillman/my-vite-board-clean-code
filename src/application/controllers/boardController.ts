import { BoardService, CustomError } from '../services/boardService.types';
import useBoardService from '../services/impl/boardServiceImpl';

import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';
import { NotifyService } from '../services/notifyService.types';
import useNotifyService from '../services/impl/notifyServiceImpl';
import { RESULT } from '../../entities/result.domain';

/**
 * 보드 컨트롤러를 나타내는 인터페이스입니다.
 * @interface BoardController
 * @function createBoard 보드 생성
 */
export interface BoardController {
  /**
   * 보드 생성
   * @param {BoardCreateDto} newBoard 신규 보드 정보
   * @returns void
   */
  createBoard: (newBoard: BoardCreateReqDto) => Promise<RESULT>;
}

const useBoardController = (): BoardController => {
  const boardService: BoardService = useBoardService(); // 보드 서비스 DI 주입
  const notifyService: NotifyService = useNotifyService(); // 알림 서비스 DI 주입

  const createBoard = async (newBoard: BoardCreateReqDto) => {
    let rtnResult: RESULT = RESULT.FAIL;

    try {
      await boardService.saveBoard(newBoard);
      rtnResult = RESULT.SUCCESS;
    } catch (error) {
      rtnResult = RESULT.FAIL;
      if (error instanceof CustomError) {
        console.error('CustomError error:', error.message);
        notifyService.notify(error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }

    return rtnResult;
  };

  return { createBoard };
};

export default useBoardController;
