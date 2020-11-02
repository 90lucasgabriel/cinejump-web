import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

import { Type } from 'domains/Favorites/enums';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';
import Route from 'routes/enums';
import { Color } from 'shared/enums';
import { Container, IconButton, Poster } from './styles';

import Props from './dtos';

const Movie: React.FC<Props> = ({ size, ...movie }) => {
  const history = useHistory();
  const { user } = useAuth();
  const { favoriteList = [], UpdateFavorite } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(movie.favorite);

  const handleFavorite = useCallback(async () => {
    try {
      if (!user) {
        alert('Entre com sua conta para adicionar aos favoritos.');
        return;
      }

      await UpdateFavorite(movie.id, movie.mediaType);
    } catch (error) {
      console.log('handleFavorite -> error', error);
    }
  }, [user, UpdateFavorite, movie.id, movie.mediaType]);

  const handleRedirect = useCallback(() => {
    if (movie.mediaType === Type.TV) {
      history.push(`${Route.TV}/${movie.id}`);

      return;
    }

    history.push(`${Route.MOVIE}/${movie.id}`);
  }, [history, movie.id, movie.mediaType]);

  // Check if movie is in favorite list and change status
  useEffect(() => {
    // console.log('movie', movie);
    if (user) {
      const response = favoriteList.find(
        favorite =>
          favorite.entityId === movie.id && favorite.typeId === movie.mediaType,
      );

      setIsFavorite(!!response);
    }
  }, [user, favoriteList, movie.id, movie.mediaType]);

  if (!movie.poster && !movie.backdrop) {
    return null;
  }

  return (
    <Container size={size}>
      <IconButton onClick={handleFavorite}>
        <BsHeartFill fill={isFavorite ? Color.Primary : Color.Empty} />
      </IconButton>
      <Poster src={movie.poster || movie.backdrop} onClick={handleRedirect} />
    </Container>
  );
};

export default Movie;
