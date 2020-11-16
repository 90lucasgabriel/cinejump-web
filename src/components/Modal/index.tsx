import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { useModal } from 'components/Modal/hooks';
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
  const location = useLocation();

  const handleDismiss = useCallback(() => {
    if (onClose) {
      onClose();
      return;
    }

    dismissModal();
  }, [dismissModal, onClose]);

  useEffect(() => {
    handleDismiss();
  }, [location]); // eslint-disable-line

  return (
    <AnimatePresence>
      {(modalContent || children || show) && (
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
      )}
    </AnimatePresence>
  );
};

export default Modal;
