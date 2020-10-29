import React from 'react';

import { ReactComponent as Loading } from 'assets/loading.svg';

import { Wrapper } from 'components/Layout';
import Person from 'components/Person';
import {
  Container,
  Title,
  LoadingContainer,
  ListContainer,
  ListContent,
  MessageContainer,
} from './styles';

import Props from './dtos';

const PersonList: React.FC<Props> = ({
  theme,
  background,
  color,
  title,
  data,
  isLoading = false,
  loaderColor,
  message = 'Não há resultados.',
}) => {
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
            <ListContent>
              {data.map(person => (
                <Person key={person.id} {...person} />
              ))}
            </ListContent>
          </ListContainer>
        )}

        {!isLoading && data.length === 0 && (
          <MessageContainer>{message}</MessageContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default PersonList;
