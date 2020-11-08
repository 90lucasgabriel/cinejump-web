import React from 'react';

import { EntityImageLoading } from 'containers';
import {
  Container,
  ImageContainer,
  DetailsContainer,
} from 'containers/EntitySummary/styles';
import {
  ShortLabelSkeleton,
  MediumLabelSkeleton,
  LongLabelSkeleton,
} from './styles';

const EntitySummaryLoading: React.FC<any> = ({ size }) => {
  return (
    <Container>
      <ImageContainer>
        <EntityImageLoading size={size} />
      </ImageContainer>
      <DetailsContainer>
        <MediumLabelSkeleton />
        <ShortLabelSkeleton />
        <LongLabelSkeleton />
        <MediumLabelSkeleton />
      </DetailsContainer>
    </Container>
  );
};

export default EntitySummaryLoading;
