import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Route from 'routes/enums';
import Props from 'containers/Result/dtos';

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
    history.push(`${Route.MOVIE}/${data.id}`);
  }, [history, data.id]);

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
