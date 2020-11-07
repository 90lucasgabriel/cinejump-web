import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { getEntityRoute } from 'shared/helpers';
import Props from 'containers/EntitySummary/types';

import { useModal } from 'components/Modal/hooks';
import { EntityImage } from 'containers';
import {
  Container,
  ImageContainer,
  DetailsContainer,
  Title,
  Subtitle,
  Description,
} from './styles';

const EntitySummary: React.FC<Props> = ({ data }) => {
  const history = useHistory();
  const { successCloseModal } = useModal();

  const handleRedirect = useCallback(() => {
    const entityRoute = getEntityRoute(data.mediaType);
    history.push(`${entityRoute}/${data.id}`);
    successCloseModal();
  }, [history, data.id, data.mediaType, successCloseModal]);

  return (
    <Container>
      <ImageContainer>
        <EntityImage {...data} size="small" showEmpty />
      </ImageContainer>
      <DetailsContainer onClick={handleRedirect}>
        <Title mediaType={data.mediaType}>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
        <Description>{data.description}</Description>
      </DetailsContainer>
    </Container>
  );
};

export default EntitySummary;
