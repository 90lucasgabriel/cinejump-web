import React from 'react';

import { Wrapper } from 'components/Layout';
import Movie from 'components/Movie';
import { Container, Title, ListContainer, ListContent } from './styles';

import Props from './dtos';

const MovieList: React.FC<Props> = ({
  theme,
  background,
  color,
  title,
  data,
}) => {
  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        {title && <Title>{title}</Title>}
        <ListContainer>
          <ListContent>
            {data.map(movie => (
              <Movie key={movie.id} {...movie} />
            ))}
          </ListContent>
        </ListContainer>
      </Container>
    </Wrapper>
  );
};

export default MovieList;
