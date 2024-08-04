import { useResetRecoilState, useSetRecoilState } from 'recoil';

import { notifyAtom } from '../../repositories/recoil/notify.recoil';
import { NotifyService } from '../notifyService.types';

const useNotifyService = (): NotifyService => {
  const setNotifyAtomValue = useSetRecoilState(notifyAtom);
  const resetNotifyAtomValue = useResetRecoilState(notifyAtom);

  const notify = (message: string) => {
    setNotifyAtomValue((prev) => ({
      ...prev,
      isOpen: true,
      message: message,
    }));
  };

  return { setNotifyAtomValue, resetNotifyAtomValue, notify };
};

export default useNotifyService;
