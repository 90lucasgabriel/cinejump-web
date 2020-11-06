import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Params from 'pages/Movie/dtos/Params';
import MovieDetails from 'domains/Movie/api/Details/Response';
import { Color } from 'shared/enums';
import { Details } from 'domains/Movie/api';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';

import { ColumnLayout, Container } from 'components';
import { Header, EntityImage, EntityImageList, Footer } from 'containers';
import {
  ContentContainer,
  MovieContainer,
  PosterContainer,
  MovieDetailsContainer,
  TitleContainer,
  Title,
  Subtitle,
  Tagline,
  OverviewContainer,
  OverviewTitle,
  Overview,
  VoteAverage,
  VoteAverageTitle,
  Director,
  DirectorTitle,
  HeaderBackground,
} from './styles';

const Movie: React.FC<any> = () => {
  const { id } = useParams<Params>();
  const [movie, setMovie] = useState({} as MovieDetails);
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
        <img src={movie.backdrop} alt="backdrop" />
      </HeaderBackground>

      <ContentContainer>
        <Container>
          <MovieContainer>
            <PosterContainer>
              <EntityImage {...movie} size="large" showShadow disabled />
            </PosterContainer>
            <MovieDetailsContainer>
              <TitleContainer>
                <Title>{movie.title}</Title>
                <Subtitle>
                  {movie.releaseDate} | {movie.genresNames} | {movie.runtime}
                </Subtitle>
              </TitleContainer>
              {movie.tagline && <Tagline>{`"${movie.tagline}"`}</Tagline>}
              <OverviewContainer>
                <OverviewTitle>Sinopse</OverviewTitle>
                <Overview>{movie.overview}</Overview>
              </OverviewContainer>
              <VoteAverage>
                <VoteAverageTitle>Votação do público:</VoteAverageTitle>{' '}
                {movie.voteAverage}
              </VoteAverage>
              <Director>
                <DirectorTitle>Diretor: </DirectorTitle>
                {movie.directorName}
              </Director>
            </MovieDetailsContainer>
          </MovieContainer>
        </Container>

        <EntityImageList
          title="Elenco"
          data={movie.credits?.cast || []}
          isLoading={isLoading}
          message="Sem informações de elenco."
          showInfo
        />

        <EntityImageList
          title="Recomendações"
          data={movie.recommendations || []}
          isLoading={isLoading}
          message="Recomendações indisponíveis."
        />
      </ContentContainer>
      <Footer />
    </ColumnLayout>
  );
};

export default Movie;
