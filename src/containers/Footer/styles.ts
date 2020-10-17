import styled from 'styled-components';

import DefaultProps from 'shared/dtos';
import { Color, Size } from 'shared/enums';
import { Container as DefaultContainer } from 'components/Layout';
import { getColorByTheme } from 'shared/utils';

export const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: ${Size.Default};
`;

export const LogoContainer = styled.div<DefaultProps>`
  display: flex;
  flex: 1 1 440px;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props =>
      props.color || getColorByTheme(props.theme) || Color.Primary};
  }

  @media (max-width: 915px) {
    margin-top: ${Size.Large};
  }
`;

export const LinksContainer = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 440px;
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

  @media (max-width: 915px) {
    text-align: center;
  }
`;
