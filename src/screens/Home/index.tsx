import React, { useEffect, useState } from 'react';

import { useFavorite } from 'domains/Favorites/hooks';
import { NowPlaying, Popular } from 'domains/Movie/api';
import MovieResponse from 'domains/Movie/api/Popular/Response';

import { ColumnLayout } from 'components/Layout';
import { Footer, Header, Highlights, MovieList } from 'containers';
import { HeaderBackground, ContentContainer } from './styles';

const Home: React.FC = () => {
  const [popularList, setPopularList] = useState([] as MovieResponse[]);
  const [nowPlayingList, setNowPlayingList] = useState([] as MovieResponse[]);

  const { Favorites, favoriteList } = useFavorite();

  useEffect(() => {
    NowPlaying().then(response => setNowPlayingList(response));
    Popular().then(response => setPopularList(response));
    Favorites().then((response: any) => {
      console.log('Home:React.FC -> response', response);
    });
  }, [Favorites]);

  return (
    <ColumnLayout>
      <Header />
      <ContentContainer>
        <Highlights movies={popularList} />
        <MovieList theme="light" title="Populares" data={popularList} />
        <MovieList theme="light" title="Lançamentos" data={nowPlayingList} />
        <MovieList theme="light" title="Favoritos" data={favoriteList} />
      </ContentContainer>
      <Footer />
      <HeaderBackground />
    </ColumnLayout>
  );
};

export default Home;
