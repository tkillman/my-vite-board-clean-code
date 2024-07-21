import { UseMutationResult } from '@tanstack/react-query';
import { CommonApiType } from '../../framework/api/commonApi.type';
import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';

export interface BoardRepository {
  saveBoard: UseMutationResult<
    CommonApiType<BoardCreateReqDto>,
    Error,
    BoardCreateReqDto,
    unknown
  >;
}
