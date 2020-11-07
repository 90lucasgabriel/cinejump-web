import styled from 'styled-components';

import DefaultProps from 'shared/dtos';
import { Color, Size } from 'shared/enums';
import { getColor, getBackground } from 'shared/helpers';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div<DefaultProps>`
  position: relative;
  cursor: help;

  span {
    background: ${props =>
      getBackground(props.theme, props.background, Color.Error)};
    color: ${props => getColor(props.theme, props.color, Color.Fill)};
    border: 1px solid ${props => getColor(props.theme, props.color, Color.Fill)};

    text-align: center;
    padding: ${Size.Smallest};
    border-radius: ${Size.Smallest};
    font-size: ${Size.Default};
    width: 220px;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: ${props =>
          getBackground(props.theme, props.color, Color.Error)}
        transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
