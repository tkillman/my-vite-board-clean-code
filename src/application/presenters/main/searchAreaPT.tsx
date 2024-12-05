import { useSetRecoilState } from 'recoil';

import { SearchBoardListReqDto } from '~/src/entities/dto';
import { boardListReqState } from '~/src/entities/recoil/boardListReqState.recoil';
import SearchAreaUI from '~/src/ui/views/main/searchAreaUI';

const SearchAreaPT = () => {
  const setBoardListReqState = useSetRecoilState(boardListReqState);

  const handleSearch = (boardListReqDto: SearchBoardListReqDto) => {
    setBoardListReqState(boardListReqDto);
  };

  return <SearchAreaUI handleSearch={handleSearch} />;
};

export default SearchAreaPT;
