import { http, HttpHandler, HttpResponse, passthrough } from 'msw';

import { SearchBoardListResDto } from '~/src/entities/dto';
import { useMockGuiState } from '~/src/entities/zustand/useMockGuiState.zustand';
import { ApiPath } from '~/src/framework/api/enumApi';

const searchBoardListHandler = [
  http.post(`http://tb-todo.com/${ApiPath['POST_api/searchBoardList']}`, () => {
    const targetMockGuiState =
      useMockGuiState.getState().mocks[ApiPath['POST_api/searchBoardList']];

    if (!targetMockGuiState?.isOn) {
      return passthrough(); // 실제 API 호출로 넘어감
    }

    switch (key) {
      case value:
        break;

      default:
        break;
    }
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

const settingBoardHandler = (): HttpHandler[] => {
  const handlers: HttpHandler[] = [];

  const mocks = useMockGuiState.getState().mocks;

  return handlers;
};

export const boardHandler = settingBoardHandler();
