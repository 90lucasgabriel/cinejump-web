import React from 'react';

import { ColumnLayout, Wrapper, Container } from 'components/Layout';

const Home: React.FC = () => {
  return (
    <ColumnLayout>
      <Wrapper>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Wrapper>
    </ColumnLayout>
  );
};

export default Home;
