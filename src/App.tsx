import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import AppProvider from './hooks';
// import Routes from './routes';
import { Layout, Wrapper, Container } from 'components/Layout';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <Container>
            <h1>Hello World</h1>
          </Container>
        </Wrapper>
      </Layout>

      <GlobalStyle />
    </>
  );
};

export default App;
