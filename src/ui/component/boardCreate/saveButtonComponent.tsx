import { useNavigate } from 'react-router-dom';

import { SaveButton } from './saveButtonComponent.style';

import useBoardCreateController, {
  BoardCreateController,
} from '~/src/application/controllers/boardCreate/boardCreateController';
import { BoardCreateResDto } from '~/src/entities/dto/res/boardCreateResDto';
import { RoutePath } from '~/src/entities/route.domain';

const SaveButtonComponent = () => {
  const navigate = useNavigate();

  const onSuccess = (data: BoardCreateResDto) => {
    navigate(RoutePath.BOARD_DETAIL, { state: { boardId: data.boardId } });
  };

  const boardController: BoardCreateController = useBoardCreateController({
    onSuccess,
  });

  const title = boardController.board.title;
  const content = boardController.board.content;

  const isDiabled =
    !(title && content) || boardController.createBoardMutation.isPending;

  const onClickSave = async () => {
    await boardController.createBoardMutation.mutateAsync({
      title: title,
      content: content,
    });
  };

  return (
    <SaveButton type="button" onClick={onClickSave} disabled={isDiabled}>
      저장
    </SaveButton>
  );
};

export default SaveButtonComponent;
