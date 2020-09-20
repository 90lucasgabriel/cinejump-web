import styled, { css } from 'styled-components';

import DefaultProps from 'shared/dtos';
import { Color, Size } from 'shared/enums';
import { Container as DefaultContainer } from 'components/Layout';

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
    fill: ${props => props.color || Color.Primary};

    ${props => {
      if (props.theme === 'light') {
        return css`
          fill: ${Color.Primary};
        `;
      }

      if (props.theme === 'primary') {
        return css`
          fill: ${Color.Fill};
        `;
      }

      if (props.theme === 'secondary') {
        return css`
          fill: ${Color.Fill};
        `;
      }

      return ``;
    }}
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

    color: ${props => props.color || Color.Primary};

    ${props => {
      if (props.theme === 'light') {
        return css`
          color: ${Color.Primary};
        `;
      }

      if (props.theme === 'primary') {
        return css`
          color: ${Color.Fill};
        `;
      }

      if (props.theme === 'secondary') {
        return css`
          color: ${Color.Fill};
        `;
      }

      return ``;
    }}
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 915px) {
    text-align: center;
  }
`;
