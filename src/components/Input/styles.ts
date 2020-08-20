import styled, { css } from 'styled-components';
import Tooltip from 'components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #EFEFEF;
  border-radius: 10px;
  padding: 1.6rem;
  width: 100%;
  color: #999999;
  border: 2px solid #EFEFEF;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 1.6rem;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #999;
      border-color: #999;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #999;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    font-size: 1.6rem;
    color: #999999;
    &::placeholder {
      color: #999999;
    }
  }
  svg {
    margin-right: 1.6rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
