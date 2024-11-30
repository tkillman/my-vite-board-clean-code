import { atom } from 'recoil';

export interface NotifyState {
  isOpen: boolean; // 오픈여부
  title: string; //제목
  message: string; // 메시지
}

const defaultNotifyState: NotifyState = {
  isOpen: false,
  title: '알림',
  message: '',
};

export const notifyState = atom<NotifyState>({
  key: 'notifyState',
  default: defaultNotifyState,
});
