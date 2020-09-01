import React, { useEffect, useState } from 'react';

import { NowPlaying, Popular } from 'domains/Movie/api';
import MovieResponse from 'domains/Movie/api/Popular/Response';

import { ColumnLayout } from 'components/Layout';
import Header from 'containers/Header';
import MovieList from 'containers/MovieList';
import Footer from 'containers/Footer';
import { HeaderBackground, ContentContainer } from './styles';

const Home: React.FC = () => {
  const [popularList, setPopularList] = useState([] as MovieResponse[]);
  const [nowPlayingList, setNowPlayingList] = useState([] as MovieResponse[]);

  useEffect(() => {
    NowPlaying().then(response => setNowPlayingList(response));
    Popular().then(response => setPopularList(response));
  }, []);

  return (
    <ColumnLayout>
      <Header />
      <ContentContainer>
        <MovieList theme="light" title="Populares" data={popularList} />
        <MovieList theme="light" title="Lançamentos" data={nowPlayingList} />
      </ContentContainer>
      <Footer />
      <HeaderBackground />
    </ColumnLayout>
  );
};

export default Home;
