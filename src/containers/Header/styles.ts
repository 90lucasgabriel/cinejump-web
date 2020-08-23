import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { Container as DefaultContainer } from 'components/Layout';
import { Color, Size } from 'shared/enums';

export const Container = styled(DefaultContainer)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(RouterLink)`
  color: ${Color.Fill};
  font-size: ${Size.Default};
  padding: ${Size.Small};
  font-weight: 100;
  text-decoration: none;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const ActionMenuContainer = styled.div`
  display: flex;
`;
