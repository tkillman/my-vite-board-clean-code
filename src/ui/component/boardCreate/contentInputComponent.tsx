import { ChangeEvent, memo, useState } from 'react';
import { useRecoilState } from 'recoil';

import { boardContentState } from '~/src/entities/recoil/board.recoil';

const ContentInput = () => {
  const [content, setContent] = useRecoilState(boardContentState);
  //const [content, setContent] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  return (
    <input type="text" id="content" onChange={onChange} value={content}></input>
  );
};

const ContentInputComponent = memo(ContentInput);

export default ContentInputComponent;
