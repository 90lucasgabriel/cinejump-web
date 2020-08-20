import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from 'domains/Auth/hooks';
import Route from 'routes/enums/Route';
import LoginFormData from 'screens/Login/dtos/LoginFormData';
import getValidationErrors from 'shared/utils/getValidationErrors';

import { RowLayout } from 'components/Layout';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import {
  LoginContainer,
  LogoContainer,
  LoginForm,
  LoginHeader,
  SignupContainer,
  SignupHeader,
  SignupDescription,
} from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { login } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
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

        history.push(Route.BASE);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [login, history],
  );

  return (
    <RowLayout>
      <LoginContainer>
        <LogoContainer>
          <Logo fill="#E83F5B" />
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

          <Button type="submit">Entrar</Button>
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
          Registrar
        </Button>
      </SignupContainer>
    </RowLayout>
  );
};

export default Login;
