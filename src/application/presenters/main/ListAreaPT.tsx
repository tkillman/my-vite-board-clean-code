import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { BoardResDto } from '~/src/entities/dto/res/boardResDto';
import { SearchBoardListAxiosResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import { boardListReqState } from '~/src/entities/recoil/boardListReqState.recoil';
import {
  queryKeys,
  searchBoardListAxiosApi,
} from '~/src/framework/api/boardAxios.api';
import { errorMessageParser } from '~/src/lib/axiosUtil';
import ListAreaUI from '~/src/ui/views/main/ListAreaUI';

const ListAreaPT = () => {
  const boardListReqValue = useRecoilValue(boardListReqState);

  const queryResult = useQuery<
    SearchBoardListAxiosResponse,
    Error,
    BoardResDto[]
  >({
    queryKey: queryKeys.board.list(boardListReqValue).queryKey,
    queryFn: async () => await searchBoardListAxiosApi(boardListReqValue),
    select: (response) => {
      //console.log('🚀 ~ ListAreaPT ~ response:', response);

      return response?.data?.data ?? [];
    },
  });

  return (
    <>
      {queryResult.error && errorMessageParser(queryResult.error, 'er')}
      <ListAreaUI
        list={queryResult.data ?? []}
        isError={queryResult.isError}
        isFetching={queryResult.isFetching}
        isLoading={queryResult.isLoading}
      />
    </>
  );
};

export default ListAreaPT;
