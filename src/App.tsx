import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from 'hooks';
import { GlobalComponents } from 'containers';
import Routes from './routes';
import GlobalStyle from './shared/styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalComponents />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
