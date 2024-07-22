import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';

/**
 * 보드 목록 서비스
 */
export interface BoardListService {
  /**
   * 보드 목록 조회
   * @param {BoardListReqDto} boardListReqDto - 보드 목록 조회 DTO
   * @reurns {BoardResDto[]} - 보드 목록
   */
  searchBoardList: (boardListReqDto: BoardListReqDto) => Promise<BoardResDto[]>;
}
