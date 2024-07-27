import { BOARD_ID } from '../../entities/board.domain';
import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';
import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardCreateResDto } from '../../entities/dto/res/boardCreateResDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';

export interface BoardRepository {
  /**
   * 게시판 등록
   * @param {BoardCreateReqDto} - 신규 게시판 정보
   * @returns {BoardCreateResDto | undefined} - 게시판 등록 결과
   */
  createBoard: (
    boardCreateReqDto: BoardCreateReqDto
  ) => Promise<BoardCreateResDto | undefined>;

  /**
   * 게시판 목록 조회
   * @param {BoardListReqDto} boardListReqDto - 게시판 목록 조회 DTO
   * @reurns {BoardResDto[]} - 게시판 목록
   */
  searchBoardList: (boardListReqDto: BoardListReqDto) => Promise<BoardResDto[]>;

  /**
   * 게시판 상세 조회
   * @param {BOARD_ID} boardId - 게시판판 ID
   * @returns {BoardResDto} - 게시판 상세정보
   */
  searchBoardDetail: (boardId: BOARD_ID) => Promise<BoardResDto>;
}
