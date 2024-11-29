import { useQuery } from '@tanstack/react-query';

import { BoardResDto } from '~/src/entities/dto/res/boardResDto';
import { SearchBoardListAxiosResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import {
  queryKeys,
  searchBoardListAxiosApi,
} from '~/src/framework/api/boardAxios.api';
import ListAreaUI from '~/src/ui/main/ListAreaUI';

const ListAreaPT = () => {
  const queryResult = useQuery<
    SearchBoardListAxiosResponse,
    Error,
    BoardResDto[]
  >({
    queryKey: queryKeys.board.list.queryKey,
    queryFn: async () => await searchBoardListAxiosApi({ searchTitle: '' }),
    select: (response) => {
      return response?.data?.data ?? [];
    },
  });

  return (
    <ListAreaUI
      list={queryResult.data ?? []}
      isError={queryResult.isError}
      isFetching={queryResult.isFetching}
      isLoading={queryResult.isLoading}
    />
  );
};

export default ListAreaPT;
