import { useRef } from 'react';

import ListArea, { IRefListArea } from '~/component/boardList/ListArea';
import SearchArea from '~/component/boardList/SearchArea';
import { BoardListReqDto } from '~/src/entities/dto/req/boardListReqDto';

const MainPage = () => {
  const refListArea = useRef<IRefListArea>(null);

  const handleOnClickSearch = (boardListReqDto: BoardListReqDto) => {
    refListArea.current?.refetch(boardListReqDto);
  };

  return (
    <div>
      <h1>Board List View</h1>
      <SearchArea handleOnClickSearch={handleOnClickSearch} />
      <ListArea ref={refListArea} />
    </div>
  );
};

export default MainPage;
