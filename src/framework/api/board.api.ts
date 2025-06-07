import { BOARD_ID } from '../../entities/board.domain';
import { CommonApiType } from '../../entities/common/commonApi.type';
import { BoardCreateReqDto } from '../../entities/dto/req/boardCreateReqDto';
import { BoardUpdateReqDto } from '../../entities/dto/req/boardUpdateReqDto';
import { BoardCreateResDto } from '../../entities/dto/res/boardCreateResDto';
import { BoardResDto } from '../../entities/dto/res/boardResDto';
import { BoardUpdateResDto } from '../../entities/dto/res/boardUpdateResDto';

// import { SearchBoardListReqDto } from '~/src/entities/dto/req/searchBoardListReqDto';
// import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import { viteApiDomain } from '~/src/lib/envVars';

export const createBoardApi = async (
  boardCreateDto: BoardCreateReqDto
): Promise<CommonApiType<BoardCreateResDto>> => {
  const response = await fetch(`${viteApiDomain}/api/createBoard`, {
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

export const searchBoardDetailApi = async (
  boardId: BOARD_ID
): Promise<CommonApiType<BoardResDto>> => {
  const response = await fetch(
    `${viteApiDomain}/api/searchBoardDetail/${boardId}`,
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
    `${viteApiDomain}/api/updateBoard/${boardUpdateReqDto.boardId}`,
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
