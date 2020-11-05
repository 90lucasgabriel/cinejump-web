import React, { useCallback, useEffect, useState } from 'react';

import { EntityType } from 'shared/enums';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';
import { NowPlaying, Popular } from 'domains/Movie/api';
import { Popular as TvPopular } from 'domains/Tv/api';
import MovieResponse from 'domains/Movie/api/Popular/Response';
import TvPopularResponse from 'domains/Tv/api/Popular/Response';

import { ColumnLayout } from 'components';
import { Footer, Header, Highlights, EntityImageList } from 'containers';
import { HeaderBackground, ContentContainer } from './styles';

const Home: React.FC = () => {
  const [popularList, setPopularList] = useState([] as MovieResponse[]);
  const [nowPlayingList, setNowPlayingList] = useState([] as MovieResponse[]);
  const [tvPopularList, setTvPopularList] = useState([] as TvPopularResponse[]);
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

  const getTvPopular = useCallback(async () => {
    const response = await TvPopular({ page: 1 });
    setTvPopularList(response);

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
    getTvPopular();

    if (user) {
      getFavorites();
    }
  }, [user, getNowPlaying, getPopular, getTvPopular, getFavorites]);

  return (
    <ColumnLayout>
      <Header />
      <ContentContainer>
        <Highlights movies={popularList} />
        <EntityImageList
          title="Populares"
          data={popularList.slice(3, popularList.length)}
          isLoading={popularList.length === 0}
        />
        <EntityImageList
          title="Lançamentos"
          data={nowPlayingList}
          isLoading={nowPlayingList.length === 0}
        />
        <EntityImageList
          title="Séries Populares"
          data={tvPopularList}
          isLoading={tvPopularList.length === 0}
          theme="light"
        />

        {user && (
          <EntityImageList
            title="Favoritos"
            data={favoriteList.filter(
              item =>
                item.typeId === EntityType.MOVIE ||
                item.typeId === EntityType.TV,
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
