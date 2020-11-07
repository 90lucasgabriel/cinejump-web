import styled from 'styled-components';

import DefaultProps from 'shared/dtos';
import { Color, Size } from 'shared/enums';
import { Container as DefaultContainer } from 'components/Layout';
import { getColorByTheme } from 'shared/helpers';

export const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: column-reverse;
  padding: ${Size.Default};
`;

export const LogoContainer = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props =>
      props.color || getColorByTheme(props.theme) || Color.Primary};
  }
`;

export const LinksContainer = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${Size.Small};

  a {
    padding: ${Size.Smallest};
    text-decoration: none;
    color: ${props =>
      props.color || getColorByTheme(props.theme) || Color.Primary};
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 715px) {
    text-align: center;
    flex-direction: column;
  }
`;
