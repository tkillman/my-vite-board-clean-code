import useNotifyController, {
  NotifyController,
} from '../../application/controllers/notifyController';
import {
  ModalBackdrop,
  ModalBtn,
  ModalContainer,
  ModalContent,
  ModalMessage,
  ModalTitle,
} from './notifyView.style';

const ModalView = () => {
  const notifyController: NotifyController = useNotifyController();

  const isOpen = notifyController.notiftyAtomValue.isOpen;
  const title = notifyController.notiftyAtomValue.title;
  const message = notifyController.notiftyAtomValue.message;

  if (!isOpen) {
    return null;
  }

  const onClickClose = () => {
    notifyController.closeNotify();
  };

  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalContent>
          <ModalTitle>
            {title} <ModalBtn onClick={onClickClose}>닫기</ModalBtn>
          </ModalTitle>
          <ModalMessage>{message}</ModalMessage>
        </ModalContent>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default ModalView;
