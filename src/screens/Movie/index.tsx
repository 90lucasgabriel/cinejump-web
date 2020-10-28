import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Params from 'screens/Movie/dtos/Params';
import MovieDetails from 'domains/Movie/api/Details/Response';
import { Color } from 'shared/enums';
import { Details } from 'domains/Movie/api';

import { ColumnLayout, Container, Movie as Poster } from 'components';
import { Header, PersonList, MovieList, Footer } from 'containers';
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

  const getMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = {
        appendToResponse: 'recommendations,credits',
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
              <Poster {...movie} large />
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

        <PersonList
          title="Elenco"
          data={movie.credits?.cast || []}
          isLoading={isLoading}
          message="Sem informações de elenco."
        />

        <MovieList
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
