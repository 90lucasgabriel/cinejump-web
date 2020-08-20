import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Color, Size } from 'shared/enums';

interface ButtonProps {
  variant?: 'basic' | 'raised' | 'outlined';
}

export const Container = styled.button<ButtonProps>`
  background: ${Color.Primary};
  height: ${Size.Biggest};
  border-radius: 45px;
  border: 0;
  padding: 0 16px;
  color: ${Color.Fill};
  width: min(300px, 100%);
  font-weight: 100;
  font-size: ${Size.Medium};
  text-transform: uppercase;
  transition: background-color 0.2s;

  ${props =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid ${Color.Fill};
      background: transparent;
      color: ${Color.Fill};
    `}

  &:hover {
    background: ${shade(0.1, Color.Primary)};
  }

  svg {
    height: 100%;
    fill: ${props =>
      props.variant === 'outlined' ? Color.Primary : Color.Fill};
  }
`;
