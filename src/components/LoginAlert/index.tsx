import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';

import { useModal } from 'components/Modal/hooks';
import { Button } from 'components';
import {
  Container,
  MessageContainer,
  Message,
  ButtonsContainer,
} from './styles';

const LoginAlert: React.FC<any> = () => {
  const history = useHistory();
  const { dismissModal } = useModal();

  const handleClose = useCallback(() => {
    dismissModal();
  }, [dismissModal]);

  return (
    <Container>
      <MessageContainer>
        <Message>Entre com sua conta para adicionar aos favoritos.</Message>
      </MessageContainer>
      <ButtonsContainer>
        <Button
          type="button"
          variant="basic"
          theme="secondary"
          onClick={handleClose}
        >
          CONTINUAR SEM LOGIN
        </Button>
        <Button
          type="button"
          theme="secondary"
          onClick={() => history.push(Route.LOGIN)}
        >
          LOGIN / CADASTRO
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default LoginAlert;
