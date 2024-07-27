import { useNavigate } from 'react-router-dom';

import {
  ListContainer,
  ListHeader,
  ListLoadingWrapper,
  ListRow,
  ListRowWrapper,
  ListSearchWrapper,
} from './boardListPage.style';
import { useBoardListController } from '../../../application/controllers/boardListController';
import { Board } from '../../../entities/board.domain';
import { RoutePath } from '../../../entities/route.domain';

const BoardListPage = () => {
  const boardListController = useBoardListController({
    listQueryOptions: { enabled: false },
  });
  const searchTitle = boardListController.boardListReqDto.searchTitle;
  const list = boardListController.boardListQueryResult.data;

  const isFetching = boardListController.boardListQueryResult.isFetching;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    boardListController.setBoardListReqDto((prev) => ({
      ...prev,
      searchTitle: e.target.value,
    }));
  };

  const onClickSearch = () => {
    boardListController.boardListQueryResult.refetch();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  const onClickRow = (row: Board) => async () => {
    console.log('row', row);
    navigate(RoutePath.BOARD_DETAIL, { state: { boardId: row.boardId } });
  };

  return (
    <div>
      <h1>Board List View</h1>
      <ListSearchWrapper>
        <p>제목</p>
        <input
          type="text"
          value={searchTitle}
          onChange={onChange}
          onKeyDown={onKeyDown}
        ></input>
        <button type="button" onClick={onClickSearch}>
          조회
        </button>
      </ListSearchWrapper>
      <ListContainer>
        <ListHeader>
          <div>번호</div>
          <div>제목</div>
          <div>내용</div>
        </ListHeader>
        <ListRowWrapper>
          {isFetching && <ListLoadingWrapper>조회중</ListLoadingWrapper>}
          {!isFetching &&
            list?.map((row, index) => {
              return (
                <ListRow key={row.boardId} onClick={onClickRow(row)}>
                  <div>{index}</div>
                  <div>{row.title}</div>
                  <div>{row.content}</div>
                </ListRow>
              );
            })}
        </ListRowWrapper>
      </ListContainer>
    </div>
  );
};

export default BoardListPage;
