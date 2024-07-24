import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { BoardListReqDto } from '../dto/req/boardListReqDto';

export const queryKeys = createQueryKeyStore({
  board: {
    list: [undefined],
    detail: null,
  },
});
