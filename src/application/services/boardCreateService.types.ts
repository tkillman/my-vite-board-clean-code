import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';

/**
 * 게시판 등록 서비스
 */
export interface BoardCreateService {
  /**
   * 게시판 등록
   * @param {BoardCreateReqDto} 신규 게시판 정보
   * @returns void
   * @throws {CustomError} 게시판 등록 실패 시 발생
   */
  createBoard: (boardCreateReqDto: BoardCreateReqDto) => Promise<void>;
}
