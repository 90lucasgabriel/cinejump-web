import { SearchInput } from 'components';
import React, { useCallback } from 'react';

import {
  Container,
  Backdrop,
  ModalContainer,
  Modal,
  ResultsContainer,
  Results,
} from './styles';

const SearchModal: React.FC<any> = ({ onClose, isShow, children }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isShow) {
    return null;
  }

  return (
    <Container>
      <Backdrop onClick={handleClose} />
      <ModalContainer>
        <Modal>
          <SearchInput />
          <ResultsContainer>
            <Results />
          </ResultsContainer>
        </Modal>
      </ModalContainer>
    </Container>
  );
};

export default SearchModal;
