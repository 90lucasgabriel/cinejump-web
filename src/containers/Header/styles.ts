import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import DefaultProps from 'shared/dtos';
import { getColor } from 'shared/utils';
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

export const MenuContainer = styled.div<DefaultProps>`
  display: flex;

  a {
    color: ${props => getColor(props.theme, props.color)};
  }
`;

export const LogoContainer = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props => getColor(props.theme, props.color)};
  }

  @media (max-width: 915px) {
    margin-top: ${Size.Large};
  }
`;

export const ActionMenuContainer = styled.div<DefaultProps>`
  display: flex;
`;
