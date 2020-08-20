import styled, { css } from 'styled-components';
import { Color, Size } from 'shared/enums';
import Tooltip from 'components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${Color.FillSecondary};
  border-radius: 10px;
  padding: ${Size.Medium};
  width: 100%;
  color: ${Color.Text};
  border: 2px solid ${Color.FillSecondary};
  display: flex;
  align-items: center;
  & + div {
    margin-top: ${Size.Medium};
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
    background: transparent;
    flex: 1;
    border: 0;
    font-size: ${Size.Medium};
    color: ${Color.Text};
    &::placeholder {
      color: ${Color.Text};
    }
  }
  svg {
    margin-right: ${Size.Medium};
    width: ${Size.Medium};
    height: ${Size.Medium};
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: ${Color.Error};
    color: ${Color.Fill};
    &::before {
      border-color: ${Color.Error} transparent;
    }
  }
`;
