import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ListContainer,
  ListHeader,
  ListLoadingWrapper,
  ListRow,
  ListRowWrapper,
  ListSearchRow,
  ListSearchWrapper,
} from './boardListPage.style';
import { useBoardListController } from '../../../application/controllers/boardListController';
import { Board } from '../../../entities/board.domain';
import { RoutePath } from '../../../entities/route.domain';

const BoardListPage = () => {
  const boardListController = useBoardListController({
    listQueryOptions: { enabled: false },
  });

  useEffect(() => {
    boardListController.boardListQueryResult.refetch(); // 초기 렌더링 시 한 번만 쿼리 실행
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    navigate(RoutePath.BOARD_DETAIL, { state: { boardId: row.boardId } });
  };

  const onClickSave = () => {
    navigate(RoutePath.BOARD_CREATE);
  };

  return (
    <div>
      <h1>Board List View</h1>
      <ListSearchWrapper>
        <ListSearchRow style={{ gap: '10px' }}>
          <p>제목</p>
          <input
            type="text"
            style={{ padding: '0.6em 1.2em' }}
            value={searchTitle}
            onChange={onChange}
            onKeyDown={onKeyDown}
          ></input>
          <button type="button" onClick={onClickSearch}>
            조회
          </button>
        </ListSearchRow>
        <ListSearchRow>
          <button type="button" onClick={onClickSave}>
            새글 등록
          </button>
        </ListSearchRow>
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
