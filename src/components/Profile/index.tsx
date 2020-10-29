import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';
import { Container, ProfileImage } from './styles';

import Props from './dtos';

const Movie: React.FC<Props> = ({ large = false, ...person }) => {
  const history = useHistory();

  const handleRedirect = useCallback(() => {
    history.push(`${Route.PERSON}/${person.id}`);
  }, [history, person.id]);

  if (!person.profile) {
    return null;
  }

  return (
    <Container large={large}>
      <ProfileImage src={person.profile} onClick={handleRedirect} />
    </Container>
  );
};

export default Movie;
