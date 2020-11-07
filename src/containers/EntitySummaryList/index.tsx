import React from 'react';

import Props from 'containers/EntitySummaryList/types';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { EntitySummary } from 'containers';
import { Container } from './styles';

const EntitySummaryList: React.FC<Props> = ({
  data = [],
  isLoading = false,
  theme,
  color,
}) => {
  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      {data.map((result: any) => {
        return <EntitySummary data={result} key={data.id} />;
      })}
    </Container>
  );
};

export default EntitySummaryList;
