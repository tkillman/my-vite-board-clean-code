import { forwardRef, useImperativeHandle } from 'react';

import useEventSearchAreaController from '~/src/application/controllers/boardList/eventSearchAreaController';

interface IProps {
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface IRefSearchInput {
  getTitle: () => string;
}

const RefSearchInput: React.ForwardRefRenderFunction<
  IRefSearchInput,
  IProps
> = (props: IProps, ref) => {
  const eventSearchAreaController = useEventSearchAreaController();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    eventSearchAreaController.setBoardListReqDto((prev) => ({
      ...prev,
      searchTitle: e.target.value,
    }));
  };

  const searchTitle = eventSearchAreaController.boardListReqDto.searchTitle;

  useImperativeHandle(ref, () => ({
    getTitle: () => searchTitle,
  }));

  return (
    <input
      type="text"
      style={{ padding: '0.6em 1.2em' }}
      value={searchTitle}
      onChange={onChange}
      onKeyDown={props.onKeyDown}
    ></input>
  );
};

const SearchInput = forwardRef(RefSearchInput);

export default SearchInput;
