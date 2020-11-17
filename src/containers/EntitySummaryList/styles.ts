import styled from 'styled-components';
import { Color, Size } from 'shared/enums';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Size.Large};
`;
export const EmptyImage = styled.div`
  svg {
    max-height: 200px;
    width: 100%;
  }
`;
export const EmptyLabel = styled.div`
  margin-top: ${Size.Default};
  font-size: ${Size.Medium};
  color: ${Color.Text};
  text-align: center;
`;
