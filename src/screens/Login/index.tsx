import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from 'domains/Auth/hooks';
import Route from 'routes/enums';
import LoginFormData from 'screens/Login/dtos/LoginFormData';
import getValidationErrors from 'shared/utils/getValidationErrors';

import { Color } from 'shared/enums';
import { RowLayout } from 'components/Layout';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import {
  LoginContainer,
  LogoContainer,
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
    <RowLayout>
      <LoginContainer>
        <LogoContainer>
          <Logo fill={Color.Primary} />
        </LogoContainer>
        <LoginForm ref={formRef} onSubmit={handleSubmit}>
          <LoginHeader>Login</LoginHeader>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <ErrorMessage>{error}</ErrorMessage>
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
          onClick={() => history.push(Route.SIGNUP)}
        >
          CRIAR CONTA
        </Button>
      </SignupContainer>
    </RowLayout>
  );
};

export default Login;
