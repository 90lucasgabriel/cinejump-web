import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';
import { Type } from 'domains/Favorites/enums';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { Wrapper } from 'components/Layout';
import {
  Container,
  Title,
  LoadingContainer,
  ListContainer,
  ItemContainer,
  YearLabel,
  MovieName,
  CharacterName,
  MessageContainer,
} from './styles';

import Props from './dtos';

const Filmography: React.FC<Props> = ({
  theme,
  background,
  color,
  title,
  data,
  isLoading = false,
  loaderColor,
  message = 'Não há resultados.',
}) => {
  const history = useHistory();

  const handleRedirect = useCallback(
    (movie: any) => {
      if (movie.mediaType === Type.TV) {
        history.push(`${Route.TV}/${movie.id}`);

        return;
      }

      history.push(`${Route.MOVIE}/${movie.id}`);
    },
    [history],
  );

  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        {title && (
          <Title theme={theme} color={color}>
            {title}
          </Title>
        )}

        {isLoading && (
          <LoadingContainer theme={theme} loaderColor={loaderColor}>
            <Loading />
          </LoadingContainer>
        )}

        {!isLoading && data.length > 0 && (
          <ListContainer>
            {data.map(movie => (
              <ItemContainer
                key={movie.id}
                onClick={() => handleRedirect(movie)}
              >
                <YearLabel>{movie.year} - </YearLabel>
                <MovieName>{movie.title || movie.name}</MovieName>
                <CharacterName>
                  {movie.character && ` como ${movie.character}`}
                </CharacterName>
              </ItemContainer>
            ))}
          </ListContainer>
        )}

        {!isLoading && data.length === 0 && (
          <MessageContainer>{message}</MessageContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Filmography;
