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

  const queryResult = useQuery({
    queryKey: queryKeys.board.list(boardListReqValue).queryKey,
    queryFn: async () => {
      const response = await searchBoardListAxiosApi(boardListReqValue);
      console.log('response', response);
      return response?.data?.data ?? [];
    },
  });

  return (
    <>
      {queryResult.error && errorMessageParser(queryResult.error, 'er')}
      <ListAreaUI
        columnInfos={[
          {
            field: 'title',
            label: '제목',
          },
          {
            field: 'content',
            label: '내용',
          },
        ]}
        list={queryResult.data ?? []}
        isError={queryResult.isError}
        isFetching={queryResult.isFetching}
        isLoading={queryResult.isLoading}
      />
    </>
  );
};

export default ListAreaPT;
