import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';
import {
  Container,
  Profile,
  NameContainer,
  PersonName,
  CharacterName,
} from './styles';

import Props from './dtos';

const Person: React.FC<Props> = ({ large = false, ...person }) => {
  const history = useHistory();

  const handleRedirect = useCallback(() => {
    history.push(`${Route.PERSON}/${person.id}`);
  }, [history, person.id]);

  return (
    <Container large={large} onClick={handleRedirect}>
      <Profile src={person.profile} />
      <NameContainer>
        <PersonName>{person.name}</PersonName>
        <CharacterName>{person.character}</CharacterName>
      </NameContainer>
    </Container>
  );
};

export default Person;
