import styled from 'styled-components';
import { Form } from '@unform/web';
import { Color, Size } from 'shared/enums';

import { Container as ContainerDefault } from 'components/Layout';

export const HeaderContainer = styled.div`
  z-index: 5;
`;

export const Container = styled(ContainerDefault)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Size.Default};
  flex: 1 1 458px;
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
  color: ${Color.Secondary};
`;

export const ErrorMessage = styled.p`
  margin: ${Size.Default} 0;
  color: ${Color.Secondary};
  font-size: ${Size.Small};
`;

export const SignupContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Color.Secondary};
  text-align: center;
  padding: ${Size.Default};
  flex: 1 1 458px;

  @media (max-width: 915px) {
    background: ${Color.FillSecondary};
  }
`;

export const SignupHeader = styled.h1`
  margin-bottom: ${Size.Large};
  font-size: ${Size.Large};
  font-weight: 400;
  color: ${Color.Secondary};
`;

export const SignupDescription = styled.p`
  margin-bottom: ${Size.Large};
  font-size: ${Size.Default};
  font-weight: 100;
  color: ${Color.Secondary};
`;
