import { ApiPath } from '../../api/enumApi';

type CaseInfo = {
  label: string;
};

type CaseGroup = {
  [caseKey: string]: CaseInfo;
};

export const cases: Record<string, CaseGroup> = {
  [ApiPath['POST_api/searchBoardList']]: {
    default: {
      label: '기본 케이스(디폴트 1개 반환)',
    },
    case10: {
      label: '글 2개 반환',
    },
    case20: {
      label: '글 1개 반환',
    },
  },
  [ApiPath['GET_api/boardDetail']]: {
    default: {
      label: '기본 케이스',
    },
    case10: {
      label: '케이스 10',
    },
  },
};
