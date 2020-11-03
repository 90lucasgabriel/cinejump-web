import styled from 'styled-components';
import { Color, Size } from 'shared/enums';

export const Container = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${Color.Secondary};
  color: ${Color.Fill};

  svg {
    width: 150px;
    height: 150px;
    margin-bottom: ${Size.Largest};
  }
`;
