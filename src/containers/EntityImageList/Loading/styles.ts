import styled from 'styled-components';

import { Color } from 'shared/enums';
import { getBackground } from 'shared/helpers';
import {
  ListContainer as ListContainerDefault,
  ListContent as ListContentDefault,
} from 'containers/EntityImageList/styles';

export const ListContainer = styled<any>(ListContainerDefault)`
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 20;

    background: linear-gradient(
      to right,
      ${Color.Transparent} 0%,
      ${Color.Transparent} 40%,
      ${props => getBackground(props.theme, props.background, Color.Fill)} 90%,
      ${props => getBackground(props.theme, props.background, Color.Fill)} 100%
    );
  }
`;
export const ListContent = styled(ListContentDefault)``;
