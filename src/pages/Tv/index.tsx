import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Params from 'pages/Tv/types/Params';
import TvDetails from 'domains/Tv/api/Details/types/Response';
import { Color } from 'shared/enums';
import { Details } from 'domains/Tv/api';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';

import { ColumnLayout, Container } from 'components';
import {
  Header,
  EntityImage,
  EntityImageList,
  Footer,
  EntityDetailsLoading,
} from 'containers';
import {
  ContentContainer,
  TvContainer,
  PosterContainer,
  TvDetailsContainer,
  TitleContainer,
  Title,
  Subtitle,
  Tagline,
  OverviewContainer,
  OverviewTitle,
  Overview,
  VoteAverage,
  VoteAverageTitle,
  Creator,
  CreatorTitle,
  HeaderBackground,
} from './styles';

const Tv: React.FC<any> = () => {
  const { id } = useParams<Params>();
  const [tv, setTv] = useState({} as TvDetails);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const { Favorites, favoriteList } = useFavorite();

  const getTv = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = {
        appendToResponse: 'videos,images,recommendations,keywords,credits',
      };

      const response = await Details(+id, params);

      setTv(response);
      return response;
    } catch (error) {
      console.log('getTv -> error', error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getTv();
  }, [getTv]);

  useEffect(() => {
    if (user) {
      if (favoriteList?.length === 0) {
        Favorites();
      }
    }
  }, []); // eslint-disable-line

  return (
    <ColumnLayout>
      <Header background={Color.Transparent} color={Color.Fill} />
      <HeaderBackground>
        {!isLoading && <img src={tv.backdrop} alt="backdrop" />}
      </HeaderBackground>

      <ContentContainer>
        <Container>
          <TvContainer>
            <PosterContainer>
              <EntityImage
                {...tv}
                size="large"
                showShadow
                disabled
                showEmpty
                isLoading={isLoading}
              />
            </PosterContainer>

            {isLoading && <EntityDetailsLoading />}

            {!isLoading && (
              <TvDetailsContainer>
                <TitleContainer>
                  <Title>{tv.title}</Title>
                  <Subtitle>
                    {tv.releaseDate} | {tv.genresNames} |{' '}
                    {tv.seasonsDescription} | {tv.runtime}
                  </Subtitle>
                </TitleContainer>
                {tv.tagline && <Tagline>{`"${tv.tagline}"`}</Tagline>}
                <OverviewContainer>
                  <OverviewTitle>Sinopse</OverviewTitle>
                  <Overview>{tv.overview}</Overview>
                </OverviewContainer>
                <VoteAverage>
                  <VoteAverageTitle>Votação do público:</VoteAverageTitle>{' '}
                  {tv.voteAverage}
                </VoteAverage>
                <Creator>
                  <CreatorTitle>Criador: </CreatorTitle>
                  {tv.creatorName}
                </Creator>
              </TvDetailsContainer>
            )}
          </TvContainer>
        </Container>

        <EntityImageList
          title="Elenco"
          data={tv.credits?.cast || []}
          isLoading={isLoading}
          message="Sem informações de elenco."
          showInfo
        />

        <EntityImageList
          title="Recomendações"
          data={tv.recommendations || []}
          isLoading={isLoading}
          message="Recomendações indisponíveis."
        />
      </ContentContainer>
      <Footer />
    </ColumnLayout>
  );
};

export default Tv;
