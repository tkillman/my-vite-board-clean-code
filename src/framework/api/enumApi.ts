export const enum ApiPath {
  'POST_api/searchBoardList' = 'api/searchBoardList',
  'GET_api/boardDetail' = 'api/boardDetail',
}

export const Apies: Record<ApiPath, ApiInfo> = {
  [ApiPath['POST_api/searchBoardList']]: {
    method: 'POST',
    detail: '게시판 목록 검색',
  },
  [ApiPath['GET_api/boardDetail']]: {
    method: 'GET',
    detail: '게시판 상세 조회',
  },
};

export const isApiPath = (path: string): path is ApiPath => {
  return path in Apies;
};

type ApiInfo = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  detail?: string;
};
