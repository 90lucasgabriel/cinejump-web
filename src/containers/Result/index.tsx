import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';
import Props from 'containers/Result/dtos';
import { Type } from 'domains/Favorites/enums';

import { Movie } from 'components';
import {
  Container,
  ImageContainer,
  DetailsContainer,
  Title,
  Subtitle,
  Description,
} from './styles';

const Result: React.FC<Props> = ({ data }) => {
  const history = useHistory();

  const handleRedirect = useCallback(() => {
    if (data.mediaType === Type.TV) {
      history.push(`${Route.TV}/${data.id}`);

      return;
    }

    history.push(`${Route.MOVIE}/${data.id}`);
  }, [history, data.id, data.mediaType]);

  return (
    <Container>
      <ImageContainer>
        <Movie {...data} size="small" />
      </ImageContainer>
      <DetailsContainer onClick={handleRedirect}>
        <Title>{data.title}</Title>
        <Subtitle>{data.releaseYear}</Subtitle>
        <Description>{data.overview}</Description>
      </DetailsContainer>
    </Container>
  );
};

export default Result;
