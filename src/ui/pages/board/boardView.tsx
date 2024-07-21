import { useState } from 'react';
import useBoardController, {
  BoardController,
} from '../../../application/controllers/boardController';
import { BoardWrapper, InputWrapper, SaveButton } from './boardView.style';
import { Board, defaultBoard } from '../../../entities/board.domain';
import FuckView from '../../component/fuckView';
import { isSuccess } from '../../../entities/result.domain';

const BoardView = () => {
  const [{ title, content }, setBoard] = useState<Board>(defaultBoard);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const isDiabled = !(title && content);

  const boardController: BoardController = useBoardController();

  const onChange =
    (type: keyof Board) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSuccessMessage('');
      if (type === 'title') {
        setBoard(prev => ({ ...prev, title: e.target.value }));
      } else if (type === 'content') {
        setBoard(prev => ({ ...prev, content: e.target.value }));
      }
    };

  const onSuccess = () => {
    setSuccessMessage('저장 성공!!');
    setBoard(defaultBoard);
  };

  const onClickSave = async () => {
    const result = await boardController.createBoard({
      title: title,
      content: content,
    });

    if (!isSuccess(result)) {
      return;
    }

    onSuccess();
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

export default BoardView;
