import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';

/**
 * 게시판 목록 서비스
 */
export interface BoardListService {
  /**
   * 게시판 목록 조회
   * @param {BoardListReqDto} boardListReqDto - 게시판 목록 조회 DTO
   * @reurns {BoardResDto[]} - 게시판 목록
   */
  searchBoardList: (boardListReqDto: BoardListReqDto) => Promise<BoardResDto[]>;
}
