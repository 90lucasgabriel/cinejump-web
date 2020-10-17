import React from 'react';

import TooltipProps from 'components/Tooltip/dtos';
import { Container, Content } from './styles';

const Tooltip: React.FC<TooltipProps> = ({ value, children, ...rest }) => {
  return (
    <Container>
      <Content {...rest}>
        {children}
        <span>{value}</span>
      </Content>
    </Container>
  );
};

export default Tooltip;
