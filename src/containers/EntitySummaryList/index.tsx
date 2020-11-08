import React from 'react';

import Props from 'containers/EntitySummaryList/types';

import { ReactComponent as Empty } from 'assets/empty.svg';
import { EntitySummary, EntitySummaryListLoading } from 'containers';
import { Container, EmptyContainer, EmptyImage, EmptyLabel } from './styles';

const EntitySummaryList: React.FC<Props> = ({
  data = [],
  isLoading = false,
  size,
  emptyMessage = 'Ops... Nenhum resultado encontrado.',
}) => {
  if (isLoading) {
    return <EntitySummaryListLoading size={size} />;
  }

  if (data.length === 0) {
    return (
      <EmptyContainer>
        <EmptyImage>
          <Empty />
        </EmptyImage>
        <EmptyLabel>{emptyMessage}</EmptyLabel>
      </EmptyContainer>
    );
  }

  return (
    <Container>
      {data.map((result: any) => {
        return <EntitySummary data={result} key={data.id} size={size} />;
      })}
    </Container>
  );
};

export default EntitySummaryList;
