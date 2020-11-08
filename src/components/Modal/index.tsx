import React, { useCallback } from 'react';

import { useModal } from 'components/Modal/hooks';
import { GrClose as CloseIcon } from 'react-icons/gr';
import Button from 'components/Button';
import {
  Container,
  Backdrop,
  ModalContainer,
  ModalContent,
  CloseContainer,
  ContentContainer,
} from './styles';

const Modal: React.FC<any> = ({
  onClose,
  show,
  hideCloseButton = true,
  children,
}) => {
  const { modalContent, dismissModal } = useModal();

  const handleDismiss = useCallback(() => {
    if (onClose) {
      onClose();
      return;
    }

    dismissModal();
  }, [dismissModal, onClose]);

  if (!modalContent && !children && !show) {
    return null;
  }

  return (
    <Container>
      <Backdrop onClick={handleDismiss} />
      <ModalContainer>
        <ModalContent>
          {!hideCloseButton && (
            <CloseContainer>
              <Button variant="icon" onClick={handleDismiss}>
                <CloseIcon />
              </Button>
            </CloseContainer>
          )}

          <ContentContainer>{modalContent || children}</ContentContainer>
        </ModalContent>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
