import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { getEntityRoute } from 'shared/helpers';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { Wrapper } from 'components/Layout';
import {
  Container,
  Title,
  LoadingContainer,
  ListContainer,
  ItemContainer,
  YearLabel,
  MovieName,
  CharacterName,
  MessageContainer,
} from './styles';

import Props from './types';

const Filmography: React.FC<Props> = ({
  theme,
  background,
  color,
  title,
  data,
  isLoading = false,
  loaderColor,
  message = 'Não há resultados.',
}) => {
  const history = useHistory();

  const handleRedirect = useCallback(
    (entity: any) => {
      const entityRoute = getEntityRoute(entity.mediaType);
      history.push(`${entityRoute}/${entity.id}`);
    },
    [history],
  );

  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        {title && (
          <Title theme={theme} color={color}>
            {title}
          </Title>
        )}

        {isLoading && (
          <LoadingContainer theme={theme} loaderColor={loaderColor}>
            <Loading />
          </LoadingContainer>
        )}

        {!isLoading && data.length > 0 && (
          <ListContainer>
            {data.map(entity => (
              <ItemContainer
                key={entity.id}
                onClick={() => handleRedirect(entity)}
              >
                <YearLabel>{entity.year} - </YearLabel>
                <MovieName>{entity.title || entity.name}</MovieName>
                <CharacterName>
                  {entity.character && ` como ${entity.character}`}
                </CharacterName>
              </ItemContainer>
            ))}
          </ListContainer>
        )}

        {!isLoading && data.length === 0 && (
          <MessageContainer>{message}</MessageContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Filmography;
