import { BoardWrapper, InputWrapper } from './boardCreatePage.style';
import ContentInputComponent from '../../component/boardCreate/contentInputComponent';
import SaveButtonComponent from '../../component/boardCreate/saveButtonComponent';
import TitleInputComponent from '../../component/boardCreate/titleInputComponent';

const BoardCreatePage = () => {
  //const [successMessage, setSuccessMessage] = useState<string>('');

  return (
    <BoardWrapper>
      <InputWrapper>
        <span>제목</span>
        <TitleInputComponent />
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
        <ContentInputComponent />
      </InputWrapper>
      {/* <div>{successMessage}</div> */}
      <SaveButtonComponent />
    </BoardWrapper>
  );
};

export default BoardCreatePage;
