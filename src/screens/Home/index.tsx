import React from 'react';

import { ColumnLayout } from 'components/Layout';
import Header from 'containers/Header';
import { HeaderBackground } from './styles';

const Home: React.FC = () => {
  return (
    <ColumnLayout>
      <Header />
      <HeaderBackground />
    </ColumnLayout>
  );
};

export default Home;
