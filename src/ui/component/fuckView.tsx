import { useRecoilState } from 'recoil';

import { systemAtom } from '../../application/repositories/recoil/system.recoil';

import { fuckWords } from '~/src/entities/system.domain';

const FuckView = () => {
  const [{ isFilterFuck }, setSystemAtomValue] = useRecoilState(systemAtom);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSystemAtomValue((prev) => ({
      ...prev,
      isFilterFuck: event.target.value === 'okFuck',
    }));
  };

  return (
    <div>
      <div>
        <p>욕설금지 설정 [{fuckWords.join(',')}]</p>
        <p>내용에 욕설금지가 설정되면 저장이 불가합니다.</p>
      </div>
      <input
        type="radio"
        id="okFuck"
        name="fuck"
        value={'okFuck'}
        checked={isFilterFuck}
        onChange={handleOptionChange}
      ></input>
      <label htmlFor="okFuck">금지함</label>
      <input
        type="radio"
        id="noFuck"
        name="fuck"
        value={'noFuck'}
        checked={!isFilterFuck}
        onChange={handleOptionChange}
      ></input>
      <label htmlFor="noFuck">금지안함</label>
    </div>
  );
};

export default FuckView;
