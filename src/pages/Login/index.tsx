import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from 'domains/Auth/hooks';
import Route from 'routes/enums';
import LoginFormData from 'pages/Login/dtos/LoginFormData';
import getValidationErrors from 'shared/utils/getValidationErrors';
import { Color } from 'shared/enums';

import { ColumnLayout } from 'components/Layout';
import { Input, Button } from 'components';
import { Footer, Header } from 'containers';
import {
  HeaderContainer,
  Container,
  RowContainer,
  LoginContainer,
  LoginHeader,
  LoginForm,
  ErrorMessage,
  SignupContainer,
  SignupHeader,
  SignupDescription,
} from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { login } = useAuth();

  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        setLoginLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório.')
            .email('E-mail inválido.'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await login({ email: data.email, password: data.password });

        setError('');
        history.push(Route.BASE);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        setError('Ocorreu um erro ao fazer login. Verifique as credenciais.');
      } finally {
        setLoginLoading(false);
      }
    },
    [login, history],
  );

  return (
    <ColumnLayout>
      <HeaderContainer>
        <Header background={Color.Transparent} color={Color.Primary} />
      </HeaderContainer>
      <Container>
        <RowContainer>
          <LoginContainer>
            <LoginForm ref={formRef} onSubmit={handleSubmit}>
              <LoginHeader>Login</LoginHeader>

              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <ErrorMessage data-testid="errorMessage">{error}</ErrorMessage>
              <Button type="submit" loading={loginLoading}>
                ENTRAR
              </Button>
            </LoginForm>
          </LoginContainer>

          <SignupContainer>
            <SignupHeader>Olá, visitante!</SignupHeader>
            <SignupDescription>
              Cadastre-se e conheça as vantagens do Cinejump.
            </SignupDescription>
            <Button
              type="button"
              variant="outlined"
              theme="primary"
              onClick={() => history.push(Route.SIGNUP)}
            >
              CRIAR CONTA
            </Button>
          </SignupContainer>
        </RowContainer>
      </Container>
      <Footer />
    </ColumnLayout>
  );
};

export default Login;
