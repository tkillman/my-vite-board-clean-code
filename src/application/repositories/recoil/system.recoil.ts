import { atom } from 'recoil';

interface System {
  isFilterFuck: boolean; // 욕설 필터 true : 검출, false : 미검출
}

const defaultSystemAtom: System = {
  isFilterFuck: true,
};

export const systemAtom = atom<System>({
  key: 'systemAtom',
  default: defaultSystemAtom,
}); // error
