import styled from 'styled-components';
import { Form } from '@unform/web';
import { shade } from 'polished';

export const LoginContainer = styled.div`
  display: flex;
  flex: 1 1 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
`;

export const LogoContainer = styled.div`
  margin-top: 4.8rem;

  svg {
    width: 13.6rem;
  }
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: min(380px, 100%);
  align-items: center;
  justify-content: center;
  margin-top: -4.8rem;
`;

export const LoginHeader = styled.h1`
  margin-bottom: 3.6rem;
  font-size: 3.6rem;
  font-weight: 400;
  color: #e83f5b;
`;

export const ErrorMessage = styled.p`
  margin: 16px 0;
  color: #e83f5b;
  font-size: 1.2rem;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e83f5b;
  color: #fff;
  text-align: center;
  padding: 1.6rem;
`;

export const SignupHeader = styled.h1`
  margin-bottom: 3.6rem;
  font-size: 3.6rem;
  font-weight: 400;
  color: #fff;
`;

export const SignupDescription = styled.p`
  margin-bottom: 3.6rem;
  font-size: 1.8rem;
  font-weight: 100;
  color: #fff;
`;
