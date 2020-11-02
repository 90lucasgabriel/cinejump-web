import React, { useCallback, useEffect, useState } from 'react';

import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';
import { NowPlaying, Popular } from 'domains/Movie/api';
import MovieResponse from 'domains/Movie/api/Popular/Response';

import { ColumnLayout } from 'components';
import { Footer, Header, Highlights, MovieList } from 'containers';
import { HeaderBackground, ContentContainer } from './styles';
import { Type } from 'domains/Favorites/enums';

const Home: React.FC = () => {
  const [popularList, setPopularList] = useState([] as MovieResponse[]);
  const [nowPlayingList, setNowPlayingList] = useState([] as MovieResponse[]);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(true);

  const { user } = useAuth();
  const { Favorites, favoriteList } = useFavorite();

  const getNowPlaying = useCallback(async () => {
    const response = await NowPlaying({ page: 1 });
    setNowPlayingList(response);

    return response;
  }, []);

  const getPopular = useCallback(async () => {
    const response = await Popular({ page: 1 });
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
          data={popularList.slice(3, popularList.length)}
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
            data={favoriteList.filter(
              item => item.typeId === Type.MOVIE || item.typeId === Type.TV,
            )}
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
