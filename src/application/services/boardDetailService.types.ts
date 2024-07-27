import { Board, BOARD_ID } from '../../entities/board.domain';

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
}
