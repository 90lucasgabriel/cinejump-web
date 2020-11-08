import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import DefaultProps from 'shared/types';
import { getColor } from 'shared/helpers';
import { Container as DefaultContainer } from 'components/Layout';
import { Color, Size } from 'shared/enums';

export const Container = styled(DefaultContainer)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
  align-items: center;
  justify-content: center;

  a {
    color: ${props => getColor(props.theme, props.color)};
  }

  /* @media (max-width: 715px) { */
  display: none;
  /* } */
`;

export const LogoContainer = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props => getColor(props.theme, props.color)};
  }
`;

export const ActionMenuContainer = styled.div<DefaultProps>`
  display: flex;

  align-items: center;
  justify-content: center;
`;
