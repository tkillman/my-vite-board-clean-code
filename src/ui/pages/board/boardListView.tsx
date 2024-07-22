import { useState } from 'react';
import {
  BoardListController,
  useBoardListController,
} from '../../../application/controllers/boardListController';
import {
  BoardListReqDto,
  defaultBoardListReqDto,
} from '../../../entities/dto/req/boardListReqDto';

const BoardListView = () => {
  const [searchValue] = useState<BoardListReqDto>(defaultBoardListReqDto);

  const boardListController: BoardListController =
    useBoardListController(searchValue);

  return (
    <div>
      <h1>Board List View</h1>
    </div>
  );
};

export default BoardListView;
