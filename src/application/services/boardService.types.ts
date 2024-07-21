import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';

/**
 * 보드 서비스
 */
export interface BoardService {
  saveBoard: (newBoard: BoardCreateReqDto) => Promise<void>;
}

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}
