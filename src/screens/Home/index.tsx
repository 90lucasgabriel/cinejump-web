import React from 'react';

import { ColumnLayout } from 'components/Layout';
import Header from 'containers/Header';
import Footer from 'containers/Footer';
import { HeaderBackground } from './styles';

const Home: React.FC = () => {
  return (
    <ColumnLayout>
      <Header />
      <div style={{ flex: 1 }}></div>
      <Footer />
      <HeaderBackground />
    </ColumnLayout>
  );
};

export default Home;
