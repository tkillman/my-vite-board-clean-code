import React from 'react';

import {
  ListContainer,
  ListHeader,
  ListLoadingWrapper,
  ListRow,
  ListRowWrapper,
} from './ListAreaUI.style';

type ColumnInfo<T> = {
  field: keyof T;
  label: string;
};

type TypeListAreaUI<T> = {
  columnInfos: ColumnInfo<T>[];
  list: T[];
  isFetching?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  handleClickRow?: (row: T) => () => void;
};

const ListAreaUI = <T,>(props: TypeListAreaUI<T>) => {
  if (props.isLoading) {
    return <div>로딩중...</div>;
  }

  if (props.isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <ListContainer>
      <ListHeader>
        {props.columnInfos.map((column, index) => (
          <div key={index}>{column.label}</div>
        ))}
      </ListHeader>
      <ListRowWrapper>
        {props.isFetching && <ListLoadingWrapper>조회중</ListLoadingWrapper>}
        {!props.isFetching &&
          props.list?.map((row, index) => {
            return (
              <ListRow
                key={index}
                onClick={(e) => {
                  props.handleClickRow?.(row);
                }}
              >
                {props.columnInfos.map((column, colIndex) => {
                  const isStrOrNumber =
                    typeof row[column.field] === 'string' ||
                    typeof row[column.field] === 'number';
                  return (
                    <div key={colIndex}>
                      {isStrOrNumber && String(row[column.field])}
                    </div>
                  );
                })}
              </ListRow>
            );
          })}
      </ListRowWrapper>
    </ListContainer>
  );
};

export default ListAreaUI;
