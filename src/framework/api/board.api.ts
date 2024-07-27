import { CommonApiType } from './commonApi.type';
import { BOARD_ID } from '../../entities/board.domain';
import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';
import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardCreateResDto } from '../../entities/dto/res/boardCreateResDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import { targetApiDomain } from '../apiDoaminUtil';

const apiDomain = targetApiDomain();

export const createBoardApi = async (
  boardCreateDto: BoardCreateReqDto
): Promise<CommonApiType<BoardCreateResDto>> => {
  const response = await fetch(`${apiDomain}/api/createBoard`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: boardCreateDto.title,
      content: boardCreateDto.content,
    }),
  });

  const data = await response.json();
  return data;
};

export const searchBoardListApi = async (
  boardListReqDto: BoardListReqDto
): Promise<CommonApiType<BoardResDto[]>> => {
  const response = await fetch(`${apiDomain}/api/searchBoardList`, {
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
  const response = await fetch(
    `${apiDomain}/api/searchBoardDetail/${boardId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
};
