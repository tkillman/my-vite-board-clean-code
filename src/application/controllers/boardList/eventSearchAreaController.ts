import { useState } from 'react';

import {
  BoardListReqDto,
  defaultBoardListReqDto,
} from '~/src/entities/dto/req/boardListReqDto';

interface EventSearchAreaController {
  /**
   * 게시판 목록 요청 DTO
   */
  boardListReqDto: BoardListReqDto;

  /**
   * 게시판 목록 요청 DTO 설정
   */
  setBoardListReqDto: React.Dispatch<React.SetStateAction<BoardListReqDto>>;
}

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
