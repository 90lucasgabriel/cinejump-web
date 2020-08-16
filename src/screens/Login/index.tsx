import React, { useCallback, useState, useContext } from 'react';

import { useAuth } from 'domains/Auth/hooks';

import { RowLayout } from 'components/Layout';
import { LoginContainer, SignupContainer } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('90lucasgabriel@gmail.com');
  const [password, setPassword] = useState('123456');

  const { user, login } = useAuth();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      login({ email, password });
    },
    [email, login, password],
  );

  return (
    <RowLayout>
      <LoginContainer>
        <form>
          <h1>Login</h1>

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" onClick={e => handleSubmit(e)}>
            Entrar
          </button>
        </form>
      </LoginContainer>
      <SignupContainer></SignupContainer>
    </RowLayout>
  );
};

export default Login;
