import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { getEntityRoute } from 'shared/utils';
import Props from 'containers/Result/dtos';

import { EntityImage } from 'containers';
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
    const entityRoute = getEntityRoute(data.mediaType);
    history.push(`${entityRoute}/${data.id}`);
  }, [history, data.id, data.mediaType]);

  return (
    <Container>
      <ImageContainer>
        <EntityImage {...data} size="small" />
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
