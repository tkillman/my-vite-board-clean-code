import { Board, BOARD_ID } from '../../../entities/board.domain';
import { BoardCreateReqDto } from '../../../entities/dto/req/boardCreateReqDto';
import { BoardListReqDto } from '../../../entities/dto/req/boardListReqDto';
import { BoardUpdateReqDto } from '../../../entities/dto/req/boardUpdateReqDto';
import {
  BoardResDto,
  convertBoardResDtoToBoard,
  SearchBoardDetailApiResponse,
} from '../../../entities/dto/res/boardResDto';
import { convertBoardUpdateResDtoToBoard } from '../../../entities/dto/res/boardUpdateResDto';
import {
  createBoardApi,
  searchBoardDetailApi,
  searchBoardListApi,
  updateBoardApi,
} from '../../../framework/api/board.api';

import { searchBoardListAxiosApi } from '~/src/framework/api/boardAxios.api';

export const useBoardRepository = () => {
  const searchBoardList = async (
    boardListReqDto: BoardListReqDto
  ): Promise<BoardResDto[]> => {
    // fetch api
    // const response = await searchBoardListApi(boardListReqDto);
    // return response?.data ?? [];

    const response = await searchBoardListAxiosApi(boardListReqDto);
    console.log('response', response);
    return response?.data.data ?? [];
  };

  const createBoard = async (boardCreateDto: BoardCreateReqDto) => {
    const response = await createBoardApi(boardCreateDto);
    return response?.data;
  };

  const searchBoardDetail = async (
    boardId: BOARD_ID
  ): Promise<SearchBoardDetailApiResponse> => {
    const response = await searchBoardDetailApi(boardId);
    return response;
  };

  const updateBoard = async (boardUpdateReqDto: BoardUpdateReqDto) => {
    const response = await updateBoardApi(boardUpdateReqDto);

    if (!response?.data?.boardId) {
      throw Error('Board not found');
    }

    const board = convertBoardUpdateResDtoToBoard(response.data);
    return board;
  };

  // const searchBoardListAxios = async () => {
  //   const response = await searchBoardListAxiosApi();

  //   console.log('response', response);
  //   return response?.data.data ?? [];
  // };

  return {
    createBoard,
    updateBoard,
    searchBoardList,
    searchBoardDetail,
  };
};
