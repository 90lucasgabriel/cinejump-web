import React, { ButtonHTMLAttributes } from 'react';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { Color } from 'shared/enums';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: 'basic' | 'raised' | 'outlined' | 'icon';
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Loading fill={Color.Fill} /> : children}
  </Container>
);

export default Button;
