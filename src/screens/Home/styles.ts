import styled from 'styled-components';
import { Color } from 'shared/enums';

export const Container = styled.div``;

export const HeaderBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 376px;
  background: ${Color.Primary};
`;
