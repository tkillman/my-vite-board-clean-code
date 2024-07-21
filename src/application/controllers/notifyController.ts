import { Notify } from '../repositories/recoil/notify.recoil';
import useNotifyService from '../services/impl/notifyServiceImpl';
import { NotifyService } from '../services/notifyService.types';

/**
 *
 * @interface NotifyController
 * @function notify 알림 모달
 */
export interface NotifyController {
  /**
   * 알림 모달 정보
   * @type {Notify} notiftyAtomValue
   */
  notiftyAtomValue: Notify;

  /**
   * 알림 모달 띄우기
   * @param {string} message
   * @returns void
   */
  notify: (message: string) => void;

  /**
   * 알림 모달 토글
   * @returns void
   */
  toggle: () => void;

  /**
   * 알림 모달 닫기
   * @returns void
   */
  closeNotify: () => void;
}

const useNotifyController = (): NotifyController => {
  const notifyService: NotifyService = useNotifyService();

  const notify = (message: string) => {
    notifyService.notify(message);
  };

  const toggle = () => {
    notifyService.setNotifyAtomValue(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const closeNotify = () => {
    notifyService.resetNotifyAtomValue();
  };

  return {
    notiftyAtomValue: notifyService.notiftyAtomValue,
    notify,
    toggle,
    closeNotify,
  };
};

export default useNotifyController;
