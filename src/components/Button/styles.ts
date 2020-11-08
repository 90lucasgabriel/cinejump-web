import styled, { css } from 'styled-components';
import { shade } from 'polished';

import DefaultProps from 'shared/types';
import { getBackground, getColor } from 'shared/helpers';
import { Color, Size } from 'shared/enums';

interface ButtonProps extends DefaultProps {
  variant?: 'basic' | 'raised' | 'outlined' | 'icon' | 'icon-fill';
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
  cursor: pointer;
  outline: 0;

  height: ${Size.Largest};
  font-size: ${Size.Default};
  color: ${props => getColor(props.theme, props.color, Color.Text)};
  background: ${props =>
    getBackground(props.theme, props.background, Color.Fill)};

  &:hover {
    background-color: ${props =>
      shade(0.1, getBackground(props.theme, props.background, Color.Fill))};
  }

  ${props =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid ${getBackground(props.theme, props.color, Color.Fill)};
      color: ${getBackground(props.theme, props.color, Color.Fill)};
      background: transparent;

      &:hover {
        background-color: ${`${getBackground(
          props.theme,
          props.color,
          Color.Fill,
        )}15`};
      }
    `}



  ${props =>
    (props.variant === 'icon' || props.variant === 'icon-fill') &&
    css`
      width: auto;
      height: auto;
      padding: ${Size.Small};
      border-radius: 50%;
      background: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    `}

  svg {
    height: 100%;

    ${props =>
      props.variant === 'outlined' &&
      css`
        stroke: ${getColor(props.theme, props.color)};
      `}

    ${props =>
      props.variant === 'icon' &&
      css`
        width: ${Size.Medium};
        height: ${Size.Medium};
        stroke: ${getColor(props.theme, props.color)};
      `}

    ${props =>
      props.variant === 'icon-fill' &&
      css`
        width: ${Size.Medium};
        height: ${Size.Medium};
        fill: ${getColor(props.theme, props.color)};
      `}
  }
`;
