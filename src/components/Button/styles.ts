import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Color, Size } from 'shared/enums';

interface ButtonProps {
  variant?: 'basic' | 'raised' | 'outlined' | 'icon';
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 45px;
  border: 0;
  font-weight: 100;
  text-transform: uppercase;
  transition: background-color 0.2s;
  width: min(300px, 100%);

  background: ${Color.Primary};
  height: ${Size.Largest};
  color: ${Color.Fill};
  font-size: ${Size.Default};

  ${props =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid ${Color.Fill};
      background: transparent;
      color: ${Color.Fill};
    `}

  &:hover {
    ${props =>
      props.variant !== 'basic' &&
      css`
        background: ${shade(0.1, Color.Primary)};
      `}
  }

  ${props =>
    props.variant === 'icon' &&
    css`
      width: auto;
      height: auto;
      padding: ${Size.Small};
      border-radius: 50%;
      background: transparent;
    `}

  svg {
    height: 100%;

    /* fill: ${Color.Fill}; */

    ${props =>
      props.variant === 'outlined' &&
      css`
        stroke: ${Color.Fill};
      `}

    ${props =>
      props.variant === 'icon' &&
      css`
        width: ${Size.Medium};
        height: ${Size.Medium};
      `}
  }
`;
