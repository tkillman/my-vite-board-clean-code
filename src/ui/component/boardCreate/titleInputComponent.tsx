import { ChangeEvent, memo, useState } from 'react';
import { useRecoilState } from 'recoil';

import { boardTitleState } from '~/src/entities/recoil/board.recoil';

const TitleInput = () => {
  const [title, setTitle] = useRecoilState(boardTitleState);
  //const [title, setTitle] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <input type="text" id="title" onChange={onChange} value={title}></input>
  );
};

const TitleInputComponent = memo(TitleInput);

export default TitleInputComponent;
