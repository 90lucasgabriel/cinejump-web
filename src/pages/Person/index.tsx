import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Params from 'pages/Person/dtos/Params';
import PersonDetails from 'domains/Person/api/Details/types/Response';
import { Color } from 'shared/enums';
import { Details } from 'domains/Person/api';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';

import { ColumnLayout, Container } from 'components';
import {
  Header,
  EntityImageList,
  Footer,
  Filmography,
  EntityImage,
} from 'containers';
import {
  ContentContainer,
  PersonContainer,
  ProfileContainer,
  PersonDetailsContainer,
  TitleContainer,
  Title,
  Subtitle,
  OverviewContainer,
  OverviewTitle,
  Overview,
  HeaderBackground,
} from './styles';

const Person: React.FC<any> = () => {
  const { id } = useParams<Params>();
  const [person, setPerson] = useState({} as PersonDetails);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const { Favorites, favoriteList } = useFavorite();

  const getPerson = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = {
        appendToResponse: 'images,combined_credits,external_ids',
      };

      const response = await Details(+id, params);

      setPerson(response);
      return response;
    } catch (error) {
      console.log('getPerson -> error', error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPerson();
  }, [getPerson]);

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
      <HeaderBackground />

      <ContentContainer>
        <Container>
          <PersonContainer>
            <ProfileContainer>
              <EntityImage
                {...person}
                size="large"
                showShadow
                disabled
                showEmpty
              />
            </ProfileContainer>
            <PersonDetailsContainer>
              <TitleContainer>
                <Title>{person.name}</Title>
                <Subtitle>
                  {person.birthday} | {person.gender} | {person.placeOfBirth}
                </Subtitle>
              </TitleContainer>
              <OverviewContainer>
                <OverviewTitle>Biografia</OverviewTitle>
                <Overview>
                  {person.biography ? person.biography : 'Sem informações.'}
                </Overview>
              </OverviewContainer>
            </PersonDetailsContainer>
          </PersonContainer>
        </Container>

        <EntityImageList
          title={
            person.gender === 'Feminino' ? 'Conhecida por' : 'Conhecido por'
          }
          data={person.knownFor || []}
          isLoading={isLoading}
          message="Recomendações indisponíveis."
        />

        <Filmography
          title="Filmografia"
          data={person.filmography || []}
          isLoading={isLoading}
          message="Sem informações de elenco."
        />
      </ContentContainer>
      <Footer theme="secondary" />
    </ColumnLayout>
  );
};

export default Person;
