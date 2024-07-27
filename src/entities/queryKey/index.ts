import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { BoardListReqDto } from '../dto/req/boardListReqDto';
import { BOARD_ID } from '../board.domain';

export const queryKeys = createQueryKeyStore({
  board: {
    list: null,
    detail: (boardId?: BOARD_ID) => [boardId],
  },
});
