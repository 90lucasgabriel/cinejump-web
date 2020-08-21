import styled from 'styled-components';
import { Form } from '@unform/web';
import { Color, Size } from 'shared/enums';
import { RowLayout as Row } from 'components/Layout';

export const RowLayout = styled(Row)`
  flex-direction: row-reverse;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex: 1 1 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Size.Medium};
`;

export const LogoContainer = styled.div`
  margin-top: ${Size.Big};

  svg {
    width: 1 ${Size.Big};
  }
`;

export const SignupForm = styled(Form)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: min(380px, 100%);
  align-items: center;
  justify-content: center;
`;

export const SignupHeader = styled.h1`
  margin-bottom: ${Size.Big};
  font-size: ${Size.Big};
  font-weight: 400;
  color: ${Color.Primary};
`;

export const ErrorMessage = styled.p`
  margin: ${Size.Medium} 0;
  color: ${Color.Primary};
  font-size: ${Size.Small};
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Color.Primary};
  color: ${Color.Fill};
  text-align: center;
  padding: ${Size.Medium};
`;

export const LoginHeader = styled.h1`
  margin-bottom: ${Size.Big};
  font-size: ${Size.Big};
  font-weight: 400;
  color: ${Color.Fill};
`;

export const LoginDescription = styled.p`
  margin-bottom: ${Size.Big};
  font-size: ${Size.Medium};
  font-weight: 100;
  color: ${Color.Fill};
`;
