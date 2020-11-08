import React from 'react';

import { Wrapper } from 'components/Layout';
import { MovieHighlightLoading } from 'components';
import {
  Container,
  MajorContainer,
  MinorContainer,
} from 'containers/Highlights/styles';

const HighlightsLoading: React.FC<any> = () => {
  return (
    <Wrapper>
      <Container>
        <MajorContainer>
          <MovieHighlightLoading />
        </MajorContainer>

        <MinorContainer>
          <MovieHighlightLoading />
          <MovieHighlightLoading />
        </MinorContainer>
      </Container>
    </Wrapper>
  );
};

export default HighlightsLoading;
