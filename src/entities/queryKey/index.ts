import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import { BOARD_ID } from '../board.domain';
import { BoardListReqDto } from '../dto/req/boardListReqDto';

export const queryKeys = createQueryKeyStore({
  board: {
    list: null,
    detail: (boardId: BOARD_ID) => [boardId],
  },
});
