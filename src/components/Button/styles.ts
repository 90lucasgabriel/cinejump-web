import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  variant?: 'basic' | 'raised' | 'outlined';
}

export const Container = styled.button<ButtonProps>`
  background: #e83f5b;
  height: 5.6rem;
  border-radius: 45px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: min(300px, 100%);
  font-weight: 100;
  font-size: 1.6rem;
  margin-top: 3.2rem;
  text-transform: uppercase;
  transition: background-color 0.2s;

  ${props =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
    `}

  &:hover {
    background: ${shade(0.1, '#e83f5b')};
  }
`;
