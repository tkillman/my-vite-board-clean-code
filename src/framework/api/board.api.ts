import { BOARD_ID } from '../../entities/board.domain';
import { CommonApiType } from '../../entities/common/commonApi.type';
import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';
import { BoardListReqDto } from '../../entities/dto/req/boardListReqDto';
import { BoardUpdateReqDto } from '../../entities/dto/req/boardUpdateReqDto';
import { BoardCreateResDto } from '../../entities/dto/res/boardCreateResDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import { BoardUpdateResDto } from '../../entities/dto/res/boardUpdateResDto';
import { targetApiDomain } from '../apiDoaminUtil';

import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';

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
): Promise<SearchBoardListApiResponse> => {
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

export const updateBoardApi = async (
  boardUpdateReqDto: BoardUpdateReqDto
): Promise<CommonApiType<BoardUpdateResDto>> => {
  const response = await fetch(
    `${apiDomain}/api/updateBoard/${boardUpdateReqDto.boardId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: boardUpdateReqDto.title,
        content: boardUpdateReqDto.content,
      }),
    }
  );

  const data = await response.json();
  return data;
};
