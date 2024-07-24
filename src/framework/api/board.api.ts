import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';
import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import { LocalStorageKey } from '../../entities/localstorageKey.domain';
import { CommonApiType } from './commonApi.type';

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
  console.log('saveBoardApi', newBoard);

  return new Promise(resolve => {
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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const boardData: BoardResDto[] = JSON.parse(
        localStorage.getItem(LocalStorageKey.boardData) ?? '[]'
      );

      resolve({
        status: 200,
        message: 'Board searchBoardListApi successfully',
        data: boardData,
      });
      //reject('error');
    }, 2000);
  });
};
