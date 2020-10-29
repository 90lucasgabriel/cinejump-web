import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Params from 'pages/Person/dtos/Params';
import PersonDetails from 'domains/Person/api/Details/Response';
import { Color } from 'shared/enums';
import { Details } from 'domains/Person/api';

import { ColumnLayout, Container, Profile } from 'components';
import { Header, MovieList, Footer, Filmography } from 'containers';
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
  const [person, setMovie] = useState({} as PersonDetails);
  const [isLoading, setIsLoading] = useState(false);

  const getPerson = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = {
        appendToResponse: 'images,combined_credits,external_ids',
      };

      const response = await Details(+id, params);

      setMovie(response);
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

  return (
    <ColumnLayout>
      <Header background={Color.Transparent} color={Color.Fill} />
      <HeaderBackground />

      <ContentContainer>
        <Container>
          <PersonContainer>
            <ProfileContainer>
              <Profile {...person} large />
            </ProfileContainer>
            <PersonDetailsContainer>
              <TitleContainer>
                <Title>{person.name}</Title>
                <Subtitle>
                  {person.birthday} | {person.gender} | {person.placeOfBirth}
                </Subtitle>
              </TitleContainer>
              {/* {person.tagline && <Tagline>{`"${person.tagline}"`}</Tagline>} */}
              <OverviewContainer>
                <OverviewTitle>Biografia</OverviewTitle>
                <Overview>
                  {person.biography ? person.biography : 'Sem informações.'}
                </Overview>
              </OverviewContainer>
            </PersonDetailsContainer>
          </PersonContainer>
        </Container>

        <MovieList
          title={
            person.gender === 'Feminino' ? 'Conhecida por' : 'Conhecido por'
          }
          data={person.knownBy || []}
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
      <Footer />
    </ColumnLayout>
  );
};

export default Person;
