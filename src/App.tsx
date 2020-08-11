import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import AppProvider from './hooks';
// import Routes from './routes';
import { ColumnLayout, Wrapper, Container } from 'components/Layout';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <ColumnLayout>
        <Wrapper>
          <Container>
            <h1>Hello World</h1>
          </Container>
        </Wrapper>
        <Wrapper>
          <Container>
            <h1>Hello World</h1>
          </Container>
        </Wrapper>

      </ColumnLayout>

      <GlobalStyle />
    </>
  );
};

export default App;
