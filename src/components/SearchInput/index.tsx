import React, { InputHTMLAttributes } from 'react';

import { Container, Input } from './styles';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Digite o nome de um filme"
        autoFocus
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
