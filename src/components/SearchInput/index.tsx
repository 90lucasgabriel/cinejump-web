import React, { InputHTMLAttributes } from 'react';

import { Container, Input } from './styles';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Pesquise por filmes ou séries"
        autoFocus
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
