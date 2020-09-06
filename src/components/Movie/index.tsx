import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

import { useFavorite } from 'domains/Favorites/hooks';
import Route from 'routes/enums';
import { Color } from 'shared/enums';
import { Container, IconButton, Poster } from './styles';

import Props from './dtos';

const Movie: React.FC<Props> = ({ ...movie }) => {
  const history = useHistory();
  const { favoriteList, UpdateFavorite } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(movie.favorite);

  const handleFavorite = useCallback(async () => {
    await UpdateFavorite(movie.id);
  }, [UpdateFavorite, movie.id]);

  // Check if movie is in favorite list and change status
  useEffect(() => {
    const response = favoriteList.find(
      favorite => +favorite.movieId === +movie.id,
    );

    setIsFavorite(!!response);
  }, [favoriteList, movie.id]);

  if (!movie.poster && !movie.backdrop) {
    return null;
  }

  return (
    <Container>
      <IconButton onClick={handleFavorite}>
        <BsHeartFill fill={isFavorite ? Color.Primary : Color.Empty} />
      </IconButton>
      <Poster
        src={movie.poster || movie.backdrop}
        onClick={() => history.push(`${Route.MOVIE}/${movie.id}`)}
      />
    </Container>
  );
};

export default Movie;
