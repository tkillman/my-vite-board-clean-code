import { atom, DefaultValue, selector } from 'recoil';

import { Board, defaultBoard } from '../board.domain';

export const boardState = atom<Board>({
  key: 'boardState',
  default: defaultBoard,
});

export const boardTitleState = selector<Board['title']>({
  key: 'boardTitleState',
  get: ({ get }) => {
    const board = get(boardState);
    return board.title;
  },
  set: ({ get, set }, newValue) => {
    const board = get(boardState);
    set(boardState, {
      ...board,
      title: newValue instanceof DefaultValue ? defaultBoard.title : newValue,
    });
  },
});

export const boardContentState = selector<Board['content']>({
  key: 'boardContentState',
  get: ({ get }) => {
    const board = get(boardState);
    return board.content;
  },
  set: ({ get, set }, newValue) => {
    const board = get(boardState);
    set(boardState, {
      ...board,
      content:
        newValue instanceof DefaultValue ? defaultBoard.content : newValue,
    });
  },
});
