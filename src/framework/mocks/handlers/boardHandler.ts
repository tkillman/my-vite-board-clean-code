import { http, HttpHandler, HttpResponse, passthrough } from 'msw';

import { SearchBoardListResDto } from '~/src/entities/dto';
import { useMockGuiState } from '~/src/entities/zustand/useMockGuiState.zustand';
import { ApiPath } from '~/src/framework/api/enumApi';

const searchBoardListHandler = [
  http.post(`http://tb-todo.com/${ApiPath['POST_api/searchBoardList']}`, () => {
    console.log('인터셉트 성공', ApiPath['POST_api/searchBoardList']);

    const targetMockGuiState =
      useMockGuiState.getState().mocks[ApiPath['POST_api/searchBoardList']];

    console.log('targetMockGuiState', targetMockGuiState);
    if (!targetMockGuiState?.isOn) {
      console.log(
        '🚀 ~ 설정이 ON 되지 않아 실제 API를 호출',
        targetMockGuiState
      );
      return passthrough(); // 실제 API 호출로 넘어감
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

    const list3: SearchBoardListResDto[] = [
      {
        boardId: '4',
        title: '디폴트',
        content: '디폴트',
      },
    ];

    console.log('반환상태 : ', targetMockGuiState.selectedCase);
    switch (targetMockGuiState.selectedCase) {
      case 'case10':
        return HttpResponse.json({ data: list });
      case 'case20':
        return HttpResponse.json({ data: list2 });
    }

    return HttpResponse.json({ data: list3 });
  }),
];

const settingBoardHandler = (): HttpHandler[] => {
  const handlers: HttpHandler[] = [...searchBoardListHandler];

  return handlers;
};

export const boardHandler = settingBoardHandler();
