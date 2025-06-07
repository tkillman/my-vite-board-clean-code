export const enum ApiPath {
  'POST_api/searchBoardList' = 'api/searchBoardList',
  'GET_api/boardDetail' = 'api/boardDetail',
}

type ApiInfo = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  detail?: string;
};

export const Apies: Record<string, ApiInfo> = {
  [ApiPath['POST_api/searchBoardList']]: {
    method: 'POST',
    detail: '게시판 목록 검색',
  },
  [ApiPath['GET_api/boardDetail']]: {
    method: 'GET',
    detail: '게시판 상세 조회',
  },
};
