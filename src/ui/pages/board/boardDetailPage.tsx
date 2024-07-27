import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  BoardHeadWrapper,
  BoardWrapper,
  InputWrapper,
} from './boardDetailPage.style';
import { useBoardDetailController } from '../../../application/controllers/boardDetail/boardDetailController';
import useNotifyService from '../../../application/services/impl/notifyServiceImpl';
import { RoutePath } from '../../../entities/route.domain';

const BoardDetailPage = () => {
  const { notify } = useNotifyService();

  const location = useLocation();
  const boardId = location.state.boardId; // 게시판 ID

  const navigate = useNavigate();

  useEffect(() => {
    if (!boardId) {
      notify('게시판 ID가 없습니다.');
      navigate(RoutePath.MAIN);
    }
  }, [boardId, navigate, notify]);

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const boardDetailController = useBoardDetailController({
    boardId,
  }); // 게시판 상세 조회 컨트롤러

  const title = boardDetailController.boardDetailQueryResult.data?.title; // 제목
  const content = boardDetailController.boardDetailQueryResult.data?.content; // 내용

  return (
    <BoardWrapper>
      <BoardHeadWrapper>
        <button>수정하기</button>
      </BoardHeadWrapper>
      <InputWrapper>
        <span>제목</span>
        <input
          type="text"
          id="title"
          defaultValue={title}
          disabled={!isEditMode}
        ></input>
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
        <input
          type="text"
          id="content"
          defaultValue={content}
          disabled={!isEditMode}
        ></input>
      </InputWrapper>
    </BoardWrapper>
  );
};
export default BoardDetailPage;
