import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BoardWrapper,
  InputWrapper,
  SaveButton,
} from './boardCreatePage.style';
import useBoardCreateController, {
  BoardCreateController,
} from '../../../application/controllers/boardCreate/boardCreateController';
import { Board } from '../../../entities/board.domain';
import { BoardCreateResDto } from '../../../entities/dto/res/boardCreateResDto';
import { RoutePath } from '../../../entities/route.domain';
import FuckView from '../../component/fuckView';

const BoardCreatePage = () => {
  //const [successMessage, setSuccessMessage] = useState<string>('');

  const navigate = useNavigate();

  const onSuccess = (data: BoardCreateResDto) => {
    //setSuccessMessage('저장 성공~~~');

    navigate(RoutePath.BOARD_DETAIL, { state: { boardId: data.boardId } });
  };

  const boardController: BoardCreateController = useBoardCreateController({
    onSuccess,
  });

  const title = boardController.title;
  const content = boardController.content;

  const isDiabled =
    !(title && content) || boardController.createBoardMutation.isPending;

  const onChange =
    (type: keyof Board) => (e: React.ChangeEvent<HTMLInputElement>) => {
      //setSuccessMessage('');
      if (type === 'title') {
        boardController.setBoard((prev) => ({
          ...prev,
          title: e.target.value,
        }));
      } else if (type === 'content') {
        boardController.setBoard((prev) => ({
          ...prev,
          content: e.target.value,
        }));
      }
    };

  const onClickSave = async () => {
    await boardController.createBoardMutation.mutateAsync({
      title: title,
      content: content,
    });
  };

  return (
    <BoardWrapper>
      <FuckView />
      <InputWrapper>
        <span>제목</span>
        <input
          type="text"
          id="title"
          onChange={onChange('title')}
          value={title}
        ></input>
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
        <input
          type="text"
          id="content"
          value={content}
          onChange={onChange('content')}
        ></input>
      </InputWrapper>
      {/* <div>{successMessage}</div> */}
      <SaveButton type="button" onClick={onClickSave} disabled={isDiabled}>
        저장
      </SaveButton>
    </BoardWrapper>
  );
};

export default BoardCreatePage;
