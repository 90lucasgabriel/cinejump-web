import React from 'react';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { Color } from 'shared/enums';
import Props from './dtos';
import { Container } from './styles';

const Button: React.FC<Props> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Loading fill={Color.Fill} /> : children}
  </Container>
);

export default Button;
