import React from 'react';

import {
  ListContainer,
  ListHeader,
  ListLoadingWrapper,
  ListRow,
  ListRowWrapper,
} from './ListAreaUI.style';

import { Board } from '~/src/entities/board.domain';

type TypeListAreaUI = {
  list: Board[];
  isFetching?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  handleClickRow?: (row: Board) => () => void;
};

const ListAreaUI: React.FC<TypeListAreaUI> = (props) => {
  if (props.isLoading) {
    return <div>로딩중...</div>;
  }

  if (props.isError) {
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
        {props.isFetching && <ListLoadingWrapper>조회중</ListLoadingWrapper>}
        {!props.isFetching &&
          props.list?.map((row, index) => {
            return (
              <ListRow
                key={row.boardId}
                onClick={(e) => {
                  props.handleClickRow?.(row);
                }}
              >
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

export default ListAreaUI;
