import React, { ButtonHTMLAttributes } from 'react';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: 'basic' | 'raised' | 'outlined';
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Loading /> : children}
  </Container>
);

export default Button;
