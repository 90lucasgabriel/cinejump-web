import styled, { css } from 'styled-components';
import { Color, Size } from 'shared/enums';
import Tooltip from 'components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  * {
    outline: 0;
  }

  background: ${Color.FillSecondary};
  border-radius: 10px;
  padding: ${Size.Default};
  width: min(400px, 100%);
  color: ${Color.Text};
  border: 2px solid ${Color.FillSecondary};
  display: flex;
  align-items: center;

  & + div {
    margin-top: ${Size.Default};
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${Color.Error};
    `}
  ${props =>
    props.isFocused &&
    css`
      color: ${Color.Text};
      border-color: ${Color.Text};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: ${Color.Text};
    `}

  input {
    background: ${Color.Transparent};
    flex: 1;
    border: 0;
    font-size: ${Size.Default};
    color: ${Color.Text};
    &::placeholder {
      color: ${Color.Text};
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px ${Color.FillSecondary} inset;
      -webkit-text-fill-color: ${Color.Text};
    }
  }

  svg {
    margin-right: ${Size.Default};
    width: ${Size.Default};
    height: ${Size.Default};
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
