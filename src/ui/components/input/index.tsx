import { ChangeEvent, useState } from 'react';

const TitleInput = () => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <input onChange={onChange} value={value}></input>;
};

export default TitleInput;
