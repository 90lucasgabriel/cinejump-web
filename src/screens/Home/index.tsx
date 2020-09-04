import React, { useEffect, useState } from 'react';

import { NowPlaying, Popular } from 'domains/Movie/api';
import { Favorites } from 'domains/Favorites/api';
import MovieResponse from 'domains/Movie/api/Popular/Response';
import FavoriteResponse from 'domains/Favorites/api/List/Response';

import { ColumnLayout } from 'components/Layout';
import { Footer, Header, Highlights, MovieList } from 'containers';
import { HeaderBackground, ContentContainer } from './styles';

const Home: React.FC = () => {
  const [popularList, setPopularList] = useState([] as MovieResponse[]);
  const [nowPlayingList, setNowPlayingList] = useState([] as MovieResponse[]);
  const [favoriteList, setFavoriteList] = useState([] as FavoriteResponse[]);

  useEffect(() => {
    NowPlaying().then(response => setNowPlayingList(response));
    Popular().then(response => setPopularList(response));
    Favorites().then(response => {
      console.log('response', response);
      setFavoriteList(response);
    });
  }, []);

  return (
    <ColumnLayout>
      <Header />
      <ContentContainer>
        <Highlights movies={popularList} />
        <MovieList theme="light" title="Populares" data={popularList} />
        <MovieList theme="light" title="Lançamentos" data={nowPlayingList} />
      </ContentContainer>
      <Footer />
      <HeaderBackground />
    </ColumnLayout>
  );
};

export default Home;
