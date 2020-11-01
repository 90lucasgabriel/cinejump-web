import React from 'react';

import Props from 'containers/ResultList/dtos';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { Result } from 'containers';
import { Container } from './styles';

const ResultList: React.FC<Props> = ({
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
        return <Result data={result} key={data.id} />;
      })}
    </Container>
  );
};

export default ResultList;
