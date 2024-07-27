import { useState } from 'react';
import useBoardCreateController, {
  BoardCreateController,
} from '../../../application/controllers/boardCreate/boardCreateController';
import {
  BoardWrapper,
  InputWrapper,
  SaveButton,
} from './boardCreatePage.style';
import { Board } from '../../../entities/board.domain';
import FuckView from '../../component/fuckView';

const BoardCreatePage = () => {
  const onSuccess = () => {
    setSuccessMessage('저장 성공~~~');
  };

  const boardController: BoardCreateController = useBoardCreateController({
    onSuccess,
  });

  const title = boardController.title;
  const content = boardController.content;

  const [successMessage, setSuccessMessage] = useState<string>('');
  const isDiabled =
    !(title && content) || boardController.saveBoardMutation.isPending;

  const onChange =
    (type: keyof Board) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSuccessMessage('');
      if (type === 'title') {
        boardController.setBoard(prev => ({ ...prev, title: e.target.value }));
      } else if (type === 'content') {
        boardController.setBoard(prev => ({
          ...prev,
          content: e.target.value,
        }));
      }
    };

  const onClickSave = async () => {
    await boardController.saveBoardMutation.mutateAsync({
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
      <div>{successMessage}</div>
      <SaveButton type="button" onClick={onClickSave} disabled={isDiabled}>
        저장
      </SaveButton>
    </BoardWrapper>
  );
};

export default BoardCreatePage;
