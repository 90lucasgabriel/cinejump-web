import styled from 'styled-components';

import { Color } from 'shared/enums';
import { getBackground } from 'shared/helpers';
import { Container as ContainerDefault } from 'containers/EntitySummaryList/styles';

export const Container = styled<any>(ContainerDefault)`
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;

    background: linear-gradient(
      to bottom,
      ${Color.Transparent} 0%,
      ${Color.Transparent} 40%,
      ${props => getBackground(props.theme, props.background, Color.Fill)} 90%,
      ${props => getBackground(props.theme, props.background, Color.Fill)} 100%
    );
  }
`;
