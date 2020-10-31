import React from 'react';

import { Container, Input } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <Input type="text" placeholder="Digite o nome do filme" autoFocus />
    </Container>
  );
};

export default SearchInput;
