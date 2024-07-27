import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BoardWrapper, InputWrapper } from './boardDetailPage.style';
import { useBoardDetailController } from '../../../application/controllers/boardDetail/boardDetailController';
import useNotifyService from '../../../application/services/impl/notifyServiceImpl';

const BoardDetailPage = () => {
  const { notify } = useNotifyService();

  const location = useLocation();
  const boardId = location.state.boardId;

  const navigate = useNavigate();

  useEffect(() => {
    if (!boardId) {
      notify('게시판 ID가 없습니다.');
      navigate('/');
    }
  }, [boardId, navigate, notify]);

  const boardDetailController = useBoardDetailController({
    boardId,
  });

  const title = boardDetailController.boardDetailQueryResult.data?.title;
  const content = boardDetailController.boardDetailQueryResult.data?.content;

  return (
    <BoardWrapper>
      <InputWrapper>
        <span>제목</span>
        <input type="text" id="title" defaultValue={title} disabled></input>
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
        <input type="text" id="content" defaultValue={content} disabled></input>
      </InputWrapper>
    </BoardWrapper>
  );
};
export default BoardDetailPage;
