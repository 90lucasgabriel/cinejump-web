import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';
import Props from './types';
import { Container, Backdrop, Caption, Title, Overview } from './styles';

const MovieHighlight: React.FC<Props> = ({ showOverview = true, ...movie }) => {
  const history = useHistory();

  const checkOverview = useCallback(() => {
    if (!movie.title) {
      return false;
    }

    if (!showOverview && !movie.title) {
      return false;
    }

    if (!movie.title && !movie.overview) {
      return false;
    }

    return true;
  }, [showOverview, movie.overview, movie.title]);

  return (
    <Container onClick={() => history.push(`${Route.MOVIE}/${movie.id}`)}>
      <Backdrop src={movie?.backdrop} alt={movie?.title} />
      {checkOverview() && (
        <Caption>
          <Title>{movie?.title}</Title>
          {showOverview && movie.overview && (
            <Overview>{movie?.overview}</Overview>
          )}
        </Caption>
      )}
    </Container>
  );
};

export default MovieHighlight;
