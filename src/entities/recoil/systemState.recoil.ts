import { atom } from 'recoil';

type SystemState = {
  isFilterFuck: boolean;
};

export const systemState = atom<SystemState>({
  key: 'systemState',
  default: {
    isFilterFuck: true,
  },
});
