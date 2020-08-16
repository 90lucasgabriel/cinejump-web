import React from 'react';

import { ColumnLayout, Wrapper, Container } from 'components/Layout';

const Movie: React.FC = () => {
  return (
    <ColumnLayout>
      <Wrapper>
        <Container>
          <h1>Movie Screen</h1>
        </Container>
      </Wrapper>
    </ColumnLayout>
  );
};

export default Movie;
