import React from 'react';

import { Container } from './styles';

const EnvironmentLabel: React.FC = () => {
  if (process.env.REACT_APP_IS_PRODUCTION === 'true') {
    return null;
  }

  const version = process.env.REACT_APP_VERSION;

  return <Container>Versão: {version} | Ambiente: Desenvolvimento</Container>;
};

export default EnvironmentLabel;
