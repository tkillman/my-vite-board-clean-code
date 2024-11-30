import { useSetRecoilState } from 'recoil';

import { notifyState } from '~/src/entities/recoil/notifyState.recoil';

export const useNotifyService = () => {
  const setNotifyState = useSetRecoilState(notifyState);

  const notify = (message: string) => {
    setNotifyState((prev) => ({
      ...prev,
      message,
      isOpen: true,
    }));
  };

  const toggle = () => {
    setNotifyState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const closeNotify = () => {
    setNotifyState((prev) => ({
      ...prev,
      message: '',
      isOpen: false,
    }));
  };

  return {
    notify,
    toggle,
    closeNotify,
  };
};
