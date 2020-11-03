import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { EnvironmentLabel } from 'components';
import AppProvider from 'hooks';
import Routes from './routes';
import GlobalStyle from './shared/styles/global';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes />
          <EnvironmentLabel />
        </AppProvider>

        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
