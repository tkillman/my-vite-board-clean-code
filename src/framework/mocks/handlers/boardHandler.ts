import { http, HttpResponse } from 'msw';

import { SearchBoardListResDto } from '~/src/entities/dto';
import { ApiPath } from '~/src/framework/api/enumApi';

export const boardHandler = [
  http.post(`http://tb-todo.com/${ApiPath['api/searchBoardList']}`, () => {
    const list: SearchBoardListResDto[] = [
      {
        boardId: '1',
        title: '첫 번째 게시글',
        content: '첫 번째 게시글의 내용입니다.',
      },
      {
        boardId: '2',
        title: '두 번째 게시글',
        content: '두 번째 게시글의 내용입니다.',
      },
    ];

    const list2: SearchBoardListResDto[] = [
      {
        boardId: '3',
        title: '세 번째 게시글',
        content: '세 번째 게시글의 내용입니다.',
      },
    ];

    return HttpResponse.json({ data: list });
  }),
];
