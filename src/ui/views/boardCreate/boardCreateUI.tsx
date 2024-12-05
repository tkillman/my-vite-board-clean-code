import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  BoardCreateReqDto,
  defaultBoardCreateReqDto,
} from '~/src/entities/dto';
import { BoardWrapper, InputWrapper } from '~/src/pages/boardCreatePage.style';
import { SaveButton } from '~/src/pages/boardDetailPage.style';

interface IProps {
  handleSave?: (param: BoardCreateReqDto) => void;
}

const BoardCreateUI: FC<IProps> = (props) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<BoardCreateReqDto>();

  // const [formData, setFormData] = useState<BoardCreateReqDto>(
  //   defaultBoardCreateReqDto
  // );

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const onClickSave = () => {
    const formData = getValues();
    props.handleSave?.(formData);
  };

  return (
    <BoardWrapper>
      <InputWrapper>
        <span>제목</span>
        <input {...register('title')} />
      </InputWrapper>
      <InputWrapper>
        <span>내용</span>
        <input {...register('content')} />
      </InputWrapper>
      <SaveButton type="button" onClick={onClickSave}>
        저장
      </SaveButton>
    </BoardWrapper>
  );
};

export default BoardCreateUI;
