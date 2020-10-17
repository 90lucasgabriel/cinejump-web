import React from 'react';

import { Container } from './styles';

const EnvironmentLabel: React.FC = () => {
  if (process.env.REACT_APP_IS_PRODUCTION === 'true') {
    return null;
  }

  return <Container>Ambiente: Desenvolvimento</Container>;
};

export default EnvironmentLabel;
