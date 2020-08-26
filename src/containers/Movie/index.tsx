import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

import Route from 'routes/enums';
import { Color } from 'shared/enums';
import { Container, IconButton, Poster } from './styles';

import Props from './dtos';

const Movie: React.FC<Props> = ({ ...movie }) => {
  const history = useHistory();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = useCallback(() => {
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  return (
    <Container>
      <IconButton onClick={handleFavorite}>
        <BsHeartFill fill={isFavorite ? Color.Primary : Color.Empty} />
      </IconButton>
      <Poster
        src={movie.poster}
        onClick={() => history.push(`${Route.MOVIE}/${movie.id}`)}
      />
    </Container>
  );
};

export default Movie;
