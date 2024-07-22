import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';

/**
 * 보드 등록, 수정 서비스
 */
export interface BoardService {
  /**
   * 보드 등록
   * @param {BoardCreateReqDto} 신규 보드 정보
   * @returns void
   * @throws {CustomError} 보드 등록 실패 시 발생
   */
  createBoard: (boardCreateReqDto: BoardCreateReqDto) => Promise<void>;
}

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}
