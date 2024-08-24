import { memo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ListSearchRow, ListSearchWrapper } from './SearchArea.style';
import SearchInput, { IRefSearchInput } from './SearchInput';

import { BoardListReqDto } from '~/src/entities/dto/req/boardListReqDto';
import { RoutePath } from '~/src/entities/route.domain';

interface IProps {
  handleOnClickSearch: (boardListReqDto: BoardListReqDto) => void;
}

const SearchArea: React.FC<IProps> = (props: IProps) => {
  const refSearchInput = useRef<IRefSearchInput>(null);

  const navigate = useNavigate();

  const onClickSave = () => {
    navigate(RoutePath.BOARD_CREATE);
  };

  const onClickSearch = () => {
    props.handleOnClickSearch({
      searchTitle: refSearchInput.current?.getTitle() || '',
    });
  };

  const onKeyDown = () => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <ListSearchWrapper>
      <ListSearchRow style={{ gap: '10px' }}>
        <p>제목</p>
        <SearchInput onKeyDown={onKeyDown} ref={refSearchInput} />
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
  );
};

const MemoSearchArea = memo(SearchArea);

export default MemoSearchArea;
