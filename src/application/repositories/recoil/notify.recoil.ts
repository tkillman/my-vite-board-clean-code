import { atom } from 'recoil';

export interface Notify {
  isOpen: boolean; // 오픈여부
  title: string; //제목
  message: string; // 메시지
}

const defaultNotifyAtom: Notify = {
  isOpen: false,
  title: '알림',
  message: '',
};

export const notifyAtom = atom<Notify>({
  key: 'notifyAtom',
  default: defaultNotifyAtom,
});
