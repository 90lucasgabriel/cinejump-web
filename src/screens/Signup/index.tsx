import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Route from 'routes/enums';
import SignupFormData from 'screens/Signup/dtos/SignupFormData';
import getValidationErrors from 'shared/utils/getValidationErrors';
import api from 'services/api';

import { Color } from 'shared/enums';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import {
  RowLayout,
  SignupContainer,
  LogoContainer,
  SignupHeader,
  SignupForm,
  ErrorMessage,
  LoginContainer,
  LoginHeader,
  LoginDescription,
} from './styles';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [signupLoading, setSignupLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(
    async (data: SignupFormData) => {
      try {
        setSignupLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          email: Yup.string()
            .required('E-mail obrigatório.')
            .email('E-mail inválido.'),
          password: Yup.string().min(6, 'Mínimo de 6 caracteres.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        history.push('/login');

        setError('');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        setError('Ocorreu um erro ao cadastrar. Tente novamente.');
      } finally {
        setSignupLoading(false);
      }
    },
    [history],
  );

  return (
    <RowLayout>
      <SignupContainer>
        <LogoContainer>
          <Logo fill={Color.Primary} />
        </LogoContainer>
        <SignupForm ref={formRef} onSubmit={handleSubmit}>
          <SignupHeader>Criar Conta</SignupHeader>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <ErrorMessage>{error}</ErrorMessage>
          <Button type="submit" loading={signupLoading}>
            CADASTRAR
          </Button>
        </SignupForm>
      </SignupContainer>

      <LoginContainer>
        <LoginHeader>Bem-vindo, Jumper!</LoginHeader>
        <LoginDescription>
          Para se manter conectado, faça login com suas credenciais.
        </LoginDescription>
        <Button
          type="button"
          variant="outlined"
          theme="light"
          onClick={() => history.push(Route.LOGIN)}
        >
          LOGIN
        </Button>
      </LoginContainer>
    </RowLayout>
  );
};

export default Signup;
