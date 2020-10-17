import React, { useCallback, useEffect, useState } from 'react';

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

  const getNowPlaying = useCallback(async () => {
    const response = await NowPlaying();
    setNowPlayingList(response);

    return response;
  }, []);

  const getPopular = useCallback(async () => {
    const response = await Popular();
    setPopularList(response);

    return response;
  }, []);

  const getFavorites = useCallback(async () => {
    setIsFavoriteLoading(true);
    const response = await Favorites();
    setIsFavoriteLoading(false);

    return response;
  }, [Favorites]);

  useEffect(() => {
    getNowPlaying();
    getPopular();

    if (user) {
      getFavorites();
    }
  }, [user, getNowPlaying, getPopular, getFavorites]);

  return (
    <ColumnLayout>
      <Header />
      <ContentContainer>
        <Highlights movies={popularList} />
        <MovieList
          title="Populares"
          data={popularList}
          isLoading={popularList.length === 0}
        />
        <MovieList
          title="Lançamentos"
          data={nowPlayingList}
          isLoading={nowPlayingList.length === 0}
        />

        {user && (
          <MovieList
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
