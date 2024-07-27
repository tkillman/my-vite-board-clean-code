import { CommonApiType } from './commonApi.type';
import { BOARD_ID } from '../../entities/board.domain';
import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';
import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import { LocalStorageKey } from '../../entities/localstorageKey.domain';
import { targetApiDomain } from '../apiDoaminUtil';

const apiDomain = targetApiDomain();

const createKey = () => {
  let rtnValue = '';

  for (let i = 0; i < 30; i++) {
    rtnValue += Math.floor(Math.random() * 10);
  }

  return rtnValue;
};

export const createBoardApi = async (
  newBoard: BoardCreateReqDto
): Promise<CommonApiType<BoardCreateReqDto>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const boardData: BoardResDto[] = JSON.parse(
        localStorage.getItem(LocalStorageKey.boardData) ?? '[]'
      );

      const newBoardData = [
        ...boardData,
        { ...newBoard, boardId: createKey() },
      ];

      localStorage.setItem(
        LocalStorageKey.boardData,
        JSON.stringify(newBoardData)
      );
      resolve({
        status: 200,
        message: 'Board created successfully',
        data: newBoard,
      });
    }, 2000);
  });
};

export const searchBoardListApi = async (
  boardListReqDto: BoardListReqDto
): Promise<CommonApiType<BoardResDto[]>> => {
  console.log('searchBoardListApi');
  const response = await fetch(`${apiDomain}/api/boardList`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      searchTitle: boardListReqDto.searchTitle,
    }),
  });
  const data = await response.json();
  return data;
};

export const searchBoardDetailApi = async (
  boardId: BOARD_ID
): Promise<CommonApiType<BoardResDto>> => {
  console.log('searchBoardDetailApi', boardId);
  const response = await fetch(`${apiDomain}/api/boardDetail/${boardId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
