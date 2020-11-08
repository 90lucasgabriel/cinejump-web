import React from 'react';

import { Container, BackdropSkeleton, Caption } from './styles';

const MovieHighlightLoading: React.FC = () => {
  return (
    <Container>
      <BackdropSkeleton />
      <Caption />
    </Container>
  );
};

export default MovieHighlightLoading;
