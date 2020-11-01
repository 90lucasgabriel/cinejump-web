import styled from 'styled-components';

import { Color, Size } from 'shared/enums';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${Color.Secondary};
  color: ${Color.FillSecondary};
  padding: ${Size.Smallest};
  font-size: ${Size.Small};

  position: fixed;
  bottom: 0;
  z-index: 50;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
