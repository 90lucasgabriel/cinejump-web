import React from 'react';

import ContainerProps from 'containers/EntityImage/types/ContainerProps';
import { EntitySummaryLoading } from 'containers';
import { Container } from './styles';

const EntitySummaryListLoading: React.FC<ContainerProps> = ({ size }) => {
  return (
    <Container>
      <EntitySummaryLoading size={size} />
      <EntitySummaryLoading size={size} />
    </Container>
  );
};

export default EntitySummaryListLoading;
