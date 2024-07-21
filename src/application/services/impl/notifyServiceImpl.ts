import { useRecoilState, useResetRecoilState } from 'recoil';
import { NotifyService } from '../notifyService.types';
import { notifyAtom } from '../../repositories/recoil/notify.recoil';

const useNotifyService = (): NotifyService => {
  const [notiftyAtomValue, setNotifyAtomValue] = useRecoilState(notifyAtom);
  const resetNotifyAtomValue = useResetRecoilState(notifyAtom);

  const notify = (message: string) => {
    setNotifyAtomValue(prev => ({
      ...prev,
      isOpen: true,
      message: message,
    }));
  };

  return { notiftyAtomValue, setNotifyAtomValue, resetNotifyAtomValue, notify };
};

export default useNotifyService;
