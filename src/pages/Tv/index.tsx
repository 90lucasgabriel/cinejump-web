import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Params from 'pages/Tv/dtos/Params';
import MovieDetails from 'domains/Tv/api/Details/Response';
import { Color } from 'shared/enums';
import { Details } from 'domains/Tv/api';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';

import { ColumnLayout, Container, EntityImage } from 'components';
import { Header, PersonList, MovieList, Footer } from 'containers';
import {
  ContentContainer,
  MovieContainer,
  PosterContainer,
  MovieDetailsContainer,
  TitleContainer,
  Title,
  Subtitle,
  OverviewContainer,
  OverviewTitle,
  Overview,
  VoteAverage,
  VoteAverageTitle,
  Director,
  DirectorTitle,
  HeaderBackground,
} from './styles';

const Tv: React.FC<any> = () => {
  const { id } = useParams<Params>();
  const [tv, setMovie] = useState({} as MovieDetails);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const { Favorites, favoriteList } = useFavorite();

  const getMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = {
        appendToResponse: 'videos,images,recommendations,keywords,credits',
      };

      const response = await Details(+id, params);

      setMovie(response);
      return response;
    } catch (error) {
      console.log('getMovie -> error', error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovie();
  }, [getMovie]);

  useEffect(() => {
    if (user) {
      if (favoriteList?.length === 0) {
        Favorites();
      }
    }
  }, []); // eslint-disable-line

  return (
    <ColumnLayout>
      <Header background={Color.Transparent} color={Color.Fill} />
      <HeaderBackground>
        <img src={tv.backdrop} alt="backdrop" />
      </HeaderBackground>

      <ContentContainer>
        <Container>
          <MovieContainer>
            <PosterContainer>
              <EntityImage {...tv} size="large" />
            </PosterContainer>
            <MovieDetailsContainer>
              <TitleContainer>
                <Title>{tv.title}</Title>
                <Subtitle>
                  {tv.releaseDate} | {tv.genresNames} | {tv.runtime}
                </Subtitle>
              </TitleContainer>
              <OverviewContainer>
                <OverviewTitle>Sinopse</OverviewTitle>
                <Overview>{tv.overview}</Overview>
              </OverviewContainer>
              <VoteAverage>
                <VoteAverageTitle>Votação do público:</VoteAverageTitle>{' '}
                {tv.voteAverage}
              </VoteAverage>
              <Director>
                <DirectorTitle>Diretor: </DirectorTitle>
                {tv.directorName}
              </Director>
            </MovieDetailsContainer>
          </MovieContainer>
        </Container>

        <PersonList
          title="Elenco"
          data={tv.credits?.cast || []}
          isLoading={isLoading}
          message="Sem informações de elenco."
        />

        <MovieList
          title="Recomendações"
          data={tv.recommendations || []}
          isLoading={isLoading}
          message="Recomendações indisponíveis."
        />
      </ContentContainer>
      <Footer />
    </ColumnLayout>
  );
};

export default Tv;
