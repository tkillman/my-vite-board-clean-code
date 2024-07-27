import { Board, BOARD_ID } from '../../../entities/board.domain';
import { BoardCreateReqDto } from '../../../entities/dto/req/boardCreateReqDto';
import { BoardListReqDto } from '../../../entities/dto/req/boardListReqDto';
import {
  BoardResDto,
  convertBoardResDtoToBoard,
} from '../../../entities/dto/res/boardResDto';
import {
  createBoardApi,
  searchBoardDetailApi,
  searchBoardListApi,
} from '../../../framework/api/board.api';
import { BoardRepository } from '../boardRepository.types';

export const useBoardRepository = (): BoardRepository => {
  const searchBoardList = async (
    boardListReqDto: BoardListReqDto
  ): Promise<BoardResDto[]> => {
    const response = await searchBoardListApi(boardListReqDto);
    return response?.data ?? [];
  };

  const createBoard = async (boardCreateDto: BoardCreateReqDto) => {
    const response = await createBoardApi(boardCreateDto);
    return response?.data;
  };

  const searchBoardDetail = async (boardId: BOARD_ID): Promise<Board> => {
    const response = await searchBoardDetailApi(boardId);

    if (!response?.data?.boardId) {
      throw Error('Board not found');
    }
    const board = convertBoardResDtoToBoard(response.data);
    return board;
  };

  return { createBoard, searchBoardList, searchBoardDetail };
};
