import React, { useCallback } from 'react';

import { useModal } from 'components/Modal/hooks';
import ModalProps from 'components/Modal/types/ModalProps';
import StyleProps from 'components/Modal/types/StyleProps';
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

const Modal: React.FC<StyleProps> = ({
  onClose,
  show,
  hideCloseButton,
  children,
  fullscreen,
  borderRadius,
  background,
  center,
  height,
  width,
  shadow,
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
      <ModalContainer center={center} height={height}>
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
