import { UseMutationResult } from '@tanstack/react-query';
import { CommonApiType } from '../../framework/api/commonApi.type';
import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';

export interface BoardRepository {
  /**
   * 보드 등록
   * @param {BoardCreateReqDto} 신규 보드 정보
   * @returns void
   */
  createBoard: (boardCreateReqDto: BoardCreateReqDto) => Promise<void>;
}
