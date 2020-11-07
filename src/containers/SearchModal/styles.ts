import styled from 'styled-components';
import { Color, PosterHeight, Size } from 'shared/enums';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${Color.Placeholder};

  max-height: 100%;
  overflow-y: auto;
  border-radius: 0 0 ${Size.Small} ${Size.Small};
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(${PosterHeight.Default});

  svg {
    height: ${Size.Largest};
    width: ${Size.Largest};
    fill: ${Color.Primary};
  }
`;

export const Results = styled.div`
  display: flex;
  flex: 1;
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
