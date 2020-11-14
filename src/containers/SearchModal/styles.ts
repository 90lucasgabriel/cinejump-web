import styled from 'styled-components';
import { Color, PosterHeight, Size } from 'shared/enums';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${Size.Small};

  width: min(1280px, calc(100vw - ${Size.Medium} * 2));
  min-height: 100px;
  max-height: calc(min(700px, 100%) - 100px - ${Size.Medium});
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${Color.Placeholder};

  overflow-y: auto;
  border-radius: 0 0 ${Size.Small} ${Size.Small};
  max-height: min(600px, 60vh);
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
