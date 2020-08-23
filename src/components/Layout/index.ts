import { Color } from 'shared/enums';
import styled, { css } from 'styled-components';

interface Props {
  background?: string;
  color?: string;
  theme?: string;
}

const BasicLayout = styled.div<Props>`
  background: ${props => props.background || 'inherit'};
  color: ${props => props.color || 'inherit'};

  ${props => {
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
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RowLayout = styled(BasicLayout)`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
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
