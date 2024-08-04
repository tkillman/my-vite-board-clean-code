import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import { BOARD_ID } from '../board.domain';
import { BoardListReqDto } from '../dto/req/boardListReqDto';

export const queryKeys = createQueryKeyStore({
  board: {
    list: (boardListReqDto: BoardListReqDto) => [boardListReqDto.searchTitle],
    detail: (boardId: BOARD_ID) => [boardId],
  },
});
