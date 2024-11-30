import {
  BoardHeadWrapper,
  BoardWrapper,
  InputWrapper,
} from './boardDetailPage.style';

const BoardDetailPage = () => {
  return (
    <BoardWrapper>
      <BoardHeadWrapper>
        <button>수정하기</button>
      </BoardHeadWrapper>
      <InputWrapper>
        <span>제목</span>
        <input type="text" id="title"></input>
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
        <input type="text" id="content"></input>
      </InputWrapper>
    </BoardWrapper>
  );
};
export default BoardDetailPage;
