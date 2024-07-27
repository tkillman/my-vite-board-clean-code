import { Resetter, SetterOrUpdater } from 'recoil';

import { Notify } from '../repositories/recoil/notify.recoil';

/**
 * 알림 모달을 띄우는 서비스
 */
export interface NotifyService {
  /**
   * 알림 모달 set
   *
   * @param {Notify} notify - 새로운 노티파이
   */
  setNotifyAtomValue: SetterOrUpdater<Notify>;

  /**
   * 알림 모달 reset
   */
  resetNotifyAtomValue: Resetter;

  /**
   * 알림 모달 띄우기
   *
   * @param {string} message - 메시지
   */
  notify: (message: string) => void;
}
