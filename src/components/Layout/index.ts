import styled, { css } from 'styled-components';

import { Color } from 'shared/enums';
import DefaultProps from 'shared/dtos';

const BasicLayout = styled.div<DefaultProps>`
  background: ${props => props.background || 'inherit'};
  color: ${props => props.color || 'inherit'};

  ${props => {
    if (props.theme === 'light') {
      return css`
        background: ${Color.Fill};
        color: ${Color.Primary};
      `;
    }

    if (props.theme === 'primary') {
      return css`
        background: ${Color.Primary};
        color: ${Color.Fill};
      `;
    }

    if (props.theme === 'secondary') {
      return css`
        background: ${Color.Secondary};
        color: ${Color.Fill};
      `;
    }

    return ``;
  }}
`;

export const ColumnLayout = styled(BasicLayout)`
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RowLayout = styled(BasicLayout)`
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Wrapper = styled(BasicLayout)`
  width: 100%;
`;

export const Container = styled(BasicLayout)`
  max-width: 1280px;
  margin: 0 auto;
`;
