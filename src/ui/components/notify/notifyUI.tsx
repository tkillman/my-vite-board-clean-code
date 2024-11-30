import { FC } from 'react';

import {
  ModalBackdrop,
  ModalBtn,
  ModalContainer,
  ModalContent,
  ModalMessage,
  ModalTitle,
} from './notifyUI.style';

type PropsNotifyUI = {
  isOpen: boolean;
  title: string;
  message: string;
  handleClose?: () => void;
};

const NotifyUI: FC<PropsNotifyUI> = (props) => {
  if (!props.isOpen) {
    return null;
  }

  const onClickClose = () => {
    props.handleClose?.();
  };

  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalContent>
          <ModalTitle>
            {props.title} <ModalBtn onClick={onClickClose}>닫기</ModalBtn>
          </ModalTitle>
          <ModalMessage>{props.message}</ModalMessage>
        </ModalContent>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default NotifyUI;
