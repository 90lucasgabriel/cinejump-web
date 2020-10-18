import React from 'react';

import { version } from '../../../package.json';
import { Container } from './styles';

const EnvironmentLabel: React.FC = () => {
  if (process.env.REACT_APP_IS_PRODUCTION === 'true') {
    return null;
  }

  return <Container>Versão: {version} | Ambiente: Desenvolvimento</Container>;
};

export default EnvironmentLabel;
