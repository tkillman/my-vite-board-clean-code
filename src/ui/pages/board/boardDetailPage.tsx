import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  BoardHeadWrapper,
  BoardWrapper,
  InputWrapper,
} from './boardDetailPage.style';
import { useBoardDetailController } from '../../../application/controllers/boardDetail/boardDetailController';

const BoardDetailPage = () => {
  const location = useLocation();
  const boardId = location.state.boardId; // 게시판 ID

  const boardDetailController = useBoardDetailController({
    boardId,
  }); // 게시판 상세 조회 컨트롤러

  const title = boardDetailController.board.title; // 제목
  const content = boardDetailController.board.content; // 내용

  const isEditable = boardDetailController.isEditable;

  return (
    <BoardWrapper>
      <BoardHeadWrapper>
        <button onClick={boardDetailController.onClickUpdate}>수정하기</button>
      </BoardHeadWrapper>
      <InputWrapper>
        <span>제목</span>
        <input
          type="text"
          id="title"
          value={title}
          onChange={boardDetailController.onChangeTitle}
          disabled={!isEditable}
        ></input>
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
        <input
          type="text"
          id="content"
          value={content}
          onChange={boardDetailController.onChangeContent}
          disabled={!isEditable}
        ></input>
      </InputWrapper>
    </BoardWrapper>
  );
};
export default BoardDetailPage;
