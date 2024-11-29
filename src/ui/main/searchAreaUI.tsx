import { FC, useState } from 'react';

import { ListSearchRow, ListSearchWrapper } from './SearchAreaUI.style';

import { SearchBoardListReqDto } from '~/src/entities/dto/req/searchboardListReqDto';

interface IProps {
  onClickSearch?: (boardListReqDto: SearchBoardListReqDto) => void;
  onClickSave?: () => void;
}

const SearchAreaUI: FC<IProps> = (props) => {
  const [boardListReqDto, setBoardListReqDto] = useState<SearchBoardListReqDto>(
    { searchTitle: '' }
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBoardListReqDto({
      ...boardListReqDto,
      [name]: value,
    });
  };

  return (
    <ListSearchWrapper>
      <ListSearchRow style={{ gap: '10px' }}>
        <p>제목</p>
        <input
          type="text"
          name="searchTitle"
          style={{ padding: '0.6em 1.2em' }}
          value={boardListReqDto.searchTitle}
          onChange={onChange}
        ></input>
        <button
          type="button"
          onClick={() => {
            props.onClickSearch?.(boardListReqDto);
          }}
        >
          조회
        </button>
        <button
          type="button"
          onClick={() => {
            throw new Error('Sentry Test Error');
          }}
        >
          Break the world
        </button>
      </ListSearchRow>
      <ListSearchRow>
        <button type="button" onClick={props.onClickSave}>
          새글 등록
        </button>
      </ListSearchRow>
    </ListSearchWrapper>
  );
};

export default SearchAreaUI;
