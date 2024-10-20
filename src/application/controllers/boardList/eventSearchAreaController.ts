import { useState } from 'react';

import {
  BoardListReqDto,
  defaultBoardListReqDto,
} from '~/src/entities/dto/req/boardListReqDto';

const useEventSearchAreaController = () => {
  const [boardListReqDto, setBoardListReqDto] = useState<BoardListReqDto>(
    defaultBoardListReqDto
  );

  return {
    boardListReqDto,
    setBoardListReqDto,
  };
};

export default useEventSearchAreaController;
