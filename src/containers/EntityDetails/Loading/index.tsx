import React from 'react';

import {
  Container,
  TitleContainer,
  TitleSkeleton,
  ShortLabelSkeleton,
  MediumLabelSkeleton,
  LongLabelSkeleton,
  OverviewContainer,
  VoteAverage,
  Director,
} from './styles';

const EntityDetailsLoading: React.FC<any> = () => {
  return (
    <Container>
      <TitleContainer>
        <TitleSkeleton />
        <MediumLabelSkeleton />
      </TitleContainer>
      <OverviewContainer>
        <ShortLabelSkeleton />
        <LongLabelSkeleton />
        <LongLabelSkeleton />
        <MediumLabelSkeleton />
      </OverviewContainer>
      <VoteAverage>
        <ShortLabelSkeleton />
      </VoteAverage>
      <Director>
        <ShortLabelSkeleton />
      </Director>
    </Container>
  );
};

export default EntityDetailsLoading;
