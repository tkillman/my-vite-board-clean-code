import { atom } from 'recoil';

import { System } from '~/src/entities/system.domain';

export const systemAtom = atom<System>({
  key: 'systemAtom',
  default: {
    isFilterFuck: false,
  },
}); // error
