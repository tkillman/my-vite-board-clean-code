import { BoardWrapper, InputWrapper } from './boardCreatePage.style';
import { SaveButton } from './boardDetailPage.style';

const BoardCreatePage = () => {
  return (
    <BoardWrapper>
      <InputWrapper>
        <span>제목</span>
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
      </InputWrapper>
      {/* <div>{successMessage}</div> */}
      <SaveButton type="button" onClick={() => {}} disabled={false}>
        저장
      </SaveButton>
    </BoardWrapper>
  );
};

export default BoardCreatePage;
