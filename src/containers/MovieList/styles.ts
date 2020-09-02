import styled from 'styled-components';

import { Container as DefaultContainer } from 'components/Layout';
import { PosterHeight, Size } from 'shared/enums';

export const Container = styled(DefaultContainer)`
  padding: ${Size.Medium} 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: ${Size.Small};

  @media (max-width: 915px) {
    margin-left: ${Size.Medium};
  }
`;

export const ListContainer = styled.div`
  height: ${PosterHeight.Default};
  overflow-y: hidden;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: 10px;
  &::-webkit-scrollbar {
    /* visibility: visible; */
    display: none;
  }
`;

export const ListContent = styled.div`
  display: inline-flex;

  @media (max-width: 915px) {
    margin-left: ${Size.Medium};
    margin-right: ${Size.Smallest};
  }

  & > div {
    flex: 1 0 auto;
    scroll-snap-align: start;
    scroll-margin-left: ${Size.Large};
    margin-right: ${Size.Medium};

    @media (max-width: 915px) {
      scroll-margin-left: ${Size.Medium};
      margin-right: ${Size.Smallest};
    }
  }
`;
