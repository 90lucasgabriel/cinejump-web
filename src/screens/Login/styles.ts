import styled from 'styled-components';
import { Form } from '@unform/web';
import { Color, Size } from 'shared/enums';

export const LoginContainer = styled.div`
  display: flex;
  flex: 1 1 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Size.Default};
`;

export const LogoContainer = styled.div`
  margin-top: ${Size.Large};

  svg {
    width: 1 ${Size.Large};
  }
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: min(380px, 100%);
  align-items: center;
  justify-content: center;
`;

export const LoginHeader = styled.h1`
  margin-bottom: ${Size.Large};
  font-size: ${Size.Large};
  font-weight: 400;
  color: ${Color.Primary};
`;

export const ErrorMessage = styled.p`
  margin: ${Size.Default} 0;
  color: ${Color.Primary};
  font-size: ${Size.Small};
`;

export const SignupContainer = styled.div`
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Color.Primary};
  color: ${Color.Fill};
  text-align: center;
  padding: ${Size.Default};
`;

export const SignupHeader = styled.h1`
  margin-bottom: ${Size.Large};
  font-size: ${Size.Large};
  font-weight: 400;
  color: ${Color.Fill};
`;

export const SignupDescription = styled.p`
  margin-bottom: ${Size.Large};
  font-size: ${Size.Default};
  font-weight: 100;
  color: ${Color.Fill};
`;
