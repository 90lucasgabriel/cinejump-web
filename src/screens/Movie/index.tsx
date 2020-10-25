import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Params from 'screens/Movie/dtos/Params';
import MovieDetails from 'domains/Movie/api/Details/Response';
import { Color } from 'shared/enums';
import { Details } from 'domains/Movie/api';

import { ColumnLayout, Container, Movie as Poster } from 'components';
import { Footer, Header, MovieList } from 'containers';
import {
  ContentContainer,
  MovieDetailsContainer,
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
        appendToResponse: 'recommendations',
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
      <ContentContainer>
        <Container>
          <MovieDetailsContainer>
            <Poster {...movie} large />
          </MovieDetailsContainer>
        </Container>
        <Container>Outros conteúdos</Container>
        {/* <MovieList
          title="Populares"
          data={popularList}
          isLoading={popularList.length === 0}
        />
        <MovieList
          title="Lançamentos"
          data={nowPlayingList}
          isLoading={nowPlayingList.length === 0}
        />
        */}

        <MovieList
          title="Recomendações"
          data={movie.recommendations || []}
          isLoading={isLoading}
          message="Você ainda não possui favoritos."
        />
      </ContentContainer>
      <Footer />
      <HeaderBackground>
        <img src={movie.backdrop} alt="backdrop" />
      </HeaderBackground>
    </ColumnLayout>
  );
};

export default Movie;
