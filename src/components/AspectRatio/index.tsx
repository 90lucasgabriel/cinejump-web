import React from 'react';

import Props from './types';
import { Container } from './styles';

const AspectRatio: React.FC<Props> = ({
  width = 1,
  height = 1,
  borderRadius = '0',
  children,
}) => {
  return (
    <Container width={width} height={height} borderRadius={borderRadius}>
      {children}
    </Container>
  );
};

export default AspectRatio;
