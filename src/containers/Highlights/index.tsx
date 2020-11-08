import React from 'react';

import { Wrapper } from 'components/Layout';
import { MovieHighlight } from 'components';
import { HighlightsLoading } from 'containers';
import { Container, MajorContainer, MinorContainer } from './styles';

import Props from './types';

const Highlights: React.FC<Props> = ({
  theme,
  background,
  color,
  movies,
  isLoading,
}) => {
  if (isLoading) {
    return <HighlightsLoading />;
  }

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        <MajorContainer>
          <MovieHighlight {...movies[0]} />
        </MajorContainer>

        {movies.length > 2 && (
          <MinorContainer>
            <MovieHighlight showOverview={false} {...movies[1]} />
            <MovieHighlight showOverview={false} {...movies[2]} />
          </MinorContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Highlights;
