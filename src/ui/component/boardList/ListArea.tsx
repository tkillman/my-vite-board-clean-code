import axios from 'axios';
import React, { forwardRef, memo, useEffect, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ListContainer,
  ListHeader,
  ListLoadingWrapper,
  ListRow,
  ListRowWrapper,
} from './ListArea.style';

import { useBoardListController } from '~/src/application/controllers/boardListController';
import { Board } from '~/src/entities/board.domain';
import { BoardListReqDto } from '~/src/entities/dto/req/boardListReqDto';
import { SearchBoardListApiResponse } from '~/src/entities/dto/res/searchBoardListResDto';
import { RoutePath } from '~/src/entities/route.domain';

interface IProps {}

export interface IRefListArea {
  refetch: (boardListReqDto: BoardListReqDto) => void;
}

const ListArea: React.ForwardRefRenderFunction<IRefListArea, IProps> = (
  _,
  ref
) => {
  const boardListController = useBoardListController({
    listQueryOptions: { enabled: false },
  });

  const handleError = (error: Error) => {
    console.log('handleError');
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 201) {
          alert('201 error');
        }
        console.log('error.response', error.response.data);
        // const responseData: SearchBoardListApiResponse = {
        //   status: error.response.status,
        //   message: error.response.data.message,
        //   data: error.response.data.data,
        // };
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        console.log('요청이 전송되었지만, 응답이 수신되지 않았습니다.');
      } else {
        console.log('Error', error.message);
      }
    }
  };

  useEffect(() => {
    boardListController.boardListQueryResult.refetch(); // 초기 렌더링 시 한 번만 쿼리 실행
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    refetch: (boardListReqDto: BoardListReqDto) => {
      boardListController.changeSearchValue(boardListReqDto);
      boardListController.boardListQueryResult.refetch();
    },
  }));

  const list = boardListController.boardListQueryResult.data;
  const isFetching = boardListController.boardListQueryResult.isFetching;

  const navigate = useNavigate();

  const onClickRow = (row: Board) => async () => {
    navigate(RoutePath.BOARD_DETAIL, { state: { boardId: row.boardId } });
  };

  if (boardListController.boardListQueryResult.isLoading) {
    return <div>로딩중...</div>;
  }

  if (boardListController.boardListQueryResult.isError) {
    console.log(
      'boardListController.boardListQueryResult.error',
      boardListController.boardListQueryResult.error
    );

    handleError(boardListController.boardListQueryResult.error);
    return <div>에러가 발생했습니다.</div>;
  }

  return (
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
  );
};

const MemoListArea = memo(forwardRef(ListArea));

export default MemoListArea;
