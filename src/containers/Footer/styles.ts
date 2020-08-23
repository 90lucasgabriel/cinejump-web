import styled from 'styled-components';

import { Color, Size } from 'shared/enums';
import { Container as DefaultContainer } from 'components/Layout';

export const Container = styled(DefaultContainer)`
  display: flex;
  flex-wrap: wrap;
  padding: ${Size.Default};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1 1 435px;
  align-items: center;
  justify-content: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 435px;
  font-size: ${Size.Small};

  a {
    padding: ${Size.Smallest};
    color: ${Color.Fill};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;
