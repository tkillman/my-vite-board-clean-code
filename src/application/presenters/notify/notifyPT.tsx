import { useRecoilValue } from 'recoil';

import { useNotifyService } from '~/services/useNotifyService';
import { notifyState } from '~/src/entities/recoil/notifyState.recoil';
import NotifyUI from '~/src/ui/components/notify/notifyUI';

const NotifyPT = () => {
  const notifyStateValue = useRecoilValue(notifyState);
  const notifyService = useNotifyService(); // 알림 서비스 DI 주입

  const handleClose = () => {
    notifyService.closeNotify();
  };

  return <NotifyUI {...notifyStateValue} handleClose={handleClose} />;
};

export default NotifyPT;