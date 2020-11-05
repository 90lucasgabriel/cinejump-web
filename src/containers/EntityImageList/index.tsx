import React from 'react';

import { ReactComponent as Loading } from 'assets/loading.svg';

import { Wrapper } from 'components/Layout';
import { EntityImage } from 'containers';
import {
  Container,
  Title,
  LoadingContainer,
  ListContainer,
  ListContent,
  MessageContainer,
} from './styles';

import Props from './dtos';

const EntityImageList: React.FC<Props> = ({
  theme,
  background,
  color,
  title,
  data,
  isLoading = false,
  loaderColor,
  message = 'Não há resultados.',
  showShadow,
  hideFavoriteButton,
  disabled,
  showInfo,
  hideSubtitle,
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
              {data.map(entity => (
                <EntityImage
                  key={entity.id}
                  showShadow={showShadow}
                  hideFavoriteButton={hideFavoriteButton}
                  disabled={disabled}
                  showInfo={showInfo}
                  hideSubtitle={hideSubtitle}
                  {...entity}
                />
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

export default EntityImageList;
