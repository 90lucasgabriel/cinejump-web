import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import AppProvider from './hooks';
// import Routes from './routes';
import Home from 'screens/Home';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Home />

      <GlobalStyle />
    </>
  );
};

export default App;
