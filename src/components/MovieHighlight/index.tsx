import React from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';
import Props from './dtos';
import { Container, Backdrop, Caption, Title, Overview } from './styles';

const MovieHighlight: React.FC<Props> = ({ showOverview = true, ...movie }) => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push(`${Route.MOVIE}/${movie.id}`)}>
      <Backdrop src={movie?.backdrop} alt={movie?.title} />
      <Caption>
        <Title>{movie?.title}</Title>
        {showOverview && <Overview>{movie?.overview}</Overview>}
      </Caption>
    </Container>
  );
};

export default MovieHighlight;
