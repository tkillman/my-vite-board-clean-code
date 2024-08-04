import { Board, BOARD_ID } from '../../entities/board.domain';
import { BoardUpdateReqDto } from '../../entities/dto/req/boardUpdateReqDto';

/**
 * 게시판 상세조회 서비스
 */
export interface BoardDetailService {
  /**
   * 게시판 상세조회
   * @param {BOARD_ID} boardId - 게시판 ID
   * @returns {Promise<Board>} - 게시판 상세정보
   * @throws {Error} - 게시판가 존재하지 않을 경우
   */
  detail: (boardId?: BOARD_ID) => Promise<Board>;

  /**
   * 게시판 수정
   * @param {BoardUpdateReqDto}  boardUpdateReqDto - 수정할 게시판 정보
   * @returns {Promise<Board>} - 수정된 게시판 정보
   * @throws {Error} - 게시판가 존재하지 않을 경우
   */
  update: (boardUpdateReqDto: BoardUpdateReqDto) => Promise<Board>;
}
