import React, { useEffect, useState } from 'react';

import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';
import { NowPlaying, Popular } from 'domains/Movie/api';
import MovieResponse from 'domains/Movie/api/Popular/Response';

import { ColumnLayout } from 'components/Layout';
import { Footer, Header, Highlights, MovieList } from 'containers';
import { HeaderBackground, ContentContainer } from './styles';

const Home: React.FC = () => {
  const [popularList, setPopularList] = useState([] as MovieResponse[]);
  const [nowPlayingList, setNowPlayingList] = useState([] as MovieResponse[]);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(true);

  const { user } = useAuth();
  const { Favorites, favoriteList } = useFavorite();

  useEffect(() => {
    NowPlaying().then(response => setNowPlayingList(response));
    Popular().then(response => setPopularList(response));

    if (user) {
      Favorites().then(() => {
        setIsFavoriteLoading(false);
      });
    }
  }, [user, Favorites]);

  return (
    <ColumnLayout>
      <Header />
      <ContentContainer>
        <Highlights movies={popularList} />
        <MovieList
          theme="light"
          title="Populares"
          data={popularList}
          isLoading={popularList.length === 0}
        />
        <MovieList
          theme="light"
          title="Lançamentos"
          data={nowPlayingList}
          isLoading={nowPlayingList.length === 0}
        />

        {user && (
          <MovieList
            theme="light"
            title="Favoritos"
            data={favoriteList}
            isLoading={isFavoriteLoading}
            message="Você ainda não possui favoritos."
          />
        )}
      </ContentContainer>
      <Footer />
      <HeaderBackground />
    </ColumnLayout>
  );
};

export default Home;
