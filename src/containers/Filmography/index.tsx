import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getEntityRoute } from 'shared/helpers';
import { Color } from 'shared/enums';

import { Wrapper, Button } from 'components';
import { FilmographyLoading } from 'containers';
import {
  Container,
  Title,
  ListContainer,
  ItemContainer,
  YearLabel,
  MovieName,
  CharacterName,
  EpisodeCount,
  More,
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
  message = 'Não há resultados.',
}) => {
  const history = useHistory();
  const maxItems = 7;
  const [parsedData, setParsedData] = useState([] as any);

  const handleRedirect = useCallback(
    (entity: any) => {
      const entityRoute = getEntityRoute(entity.mediaType);
      history.push(`${entityRoute}/${entity.id}`);
    },
    [history],
  );

  const handleMore = useCallback(() => {
    setParsedData(data);
  }, [setParsedData, data]);

  useEffect(() => {
    setParsedData([...data]?.splice(0, maxItems));
  }, [data]);

  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        {title && (
          <Title theme={theme} color={color}>
            {title}
          </Title>
        )}

        {isLoading && <FilmographyLoading />}

        {!isLoading && data.length > 0 && (
          <>
            <ListContainer>
              {parsedData.map((entity: any) => (
                <ItemContainer
                  key={entity.id}
                  onClick={() => handleRedirect(entity)}
                >
                  <YearLabel>{entity.year} - </YearLabel>
                  <MovieName>{entity.title || entity.name}</MovieName>
                  <CharacterName>
                    {entity.character && ` como ${entity.character}`}
                  </CharacterName>
                  {entity.episodeCount && (
                    <EpisodeCount>
                      {entity.episodeCount > 1
                        ? ` (${entity.episodeCount} episódios)`
                        : ` (${entity.episodeCount} episódio)`}
                    </EpisodeCount>
                  )}
                </ItemContainer>
              ))}
            </ListContainer>

            {parsedData?.length < data?.length && (
              <More onClick={handleMore}>
                <Button theme="light" background={Color.Transparent}>
                  Ver Mais
                </Button>
              </More>
            )}
          </>
        )}

        {!isLoading && data.length === 0 && (
          <MessageContainer>{message}</MessageContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Filmography;
