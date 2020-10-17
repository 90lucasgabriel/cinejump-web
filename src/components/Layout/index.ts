import styled from 'styled-components';

import DefaultProps from 'shared/dtos';
import { getBackground, getColor } from 'shared/utils';

const BasicLayout = styled.div<DefaultProps>`
  background: ${props => getBackground(props.theme, props.background)};
  color: ${props => getColor(props.theme, props.color)};
  fill: ${props => getColor(props.theme, props.color)};
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
