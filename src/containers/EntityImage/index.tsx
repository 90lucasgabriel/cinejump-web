import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

import { getEntityRoute } from 'shared/utils';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';
import { Color } from 'shared/enums';
import {
  Container,
  EntityContainer,
  IconButton,
  FeaturedImage,
  InfoContainer,
  InfoTitle,
  InfoSubtitle,
} from './styles';

import Props from './dtos';

const EntityImage: React.FC<Props> = ({
  size,
  hideFavoriteButton,
  showInfo,
  hideSubtitle,
  ...entity
}) => {
  const history = useHistory();
  const { user } = useAuth();
  const { favoriteList = [], UpdateFavorite } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(entity.favorite);

  const handleFavorite = useCallback(async () => {
    try {
      if (!user) {
        alert('Entre com sua conta para adicionar aos favoritos.');
        return;
      }

      await UpdateFavorite(entity.id, entity.mediaType);
    } catch (error) {
      console.log('handleFavorite -> error', error);
    }
  }, [user, UpdateFavorite, entity.id, entity.mediaType]);

  const handleRedirect = useCallback(() => {
    const entityRoute = getEntityRoute(entity.mediaType);
    history.push(`${entityRoute}/${entity.id}`);
  }, [history, entity.id, entity.mediaType]);

  // Check if entity is in favorite list and change status
  useEffect(() => {
    // console.log('entity', entity);
    if (user) {
      const response = favoriteList.find(
        favorite =>
          favorite.entityId === entity.id &&
          favorite.typeId === entity.mediaType,
      );

      setIsFavorite(!!response);
    }
  }, [user, favoriteList, entity.id, entity.mediaType]);

  if (!entity.featuredImage && !entity.backdrop) {
    return null;
  }

  return (
    <Container>
      {!hideFavoriteButton && (
        <IconButton onClick={handleFavorite}>
          <BsHeartFill fill={isFavorite ? Color.Primary : Color.Empty} />
        </IconButton>
      )}
      <EntityContainer size={size} showInfo={showInfo} onClick={handleRedirect}>
        <FeaturedImage src={entity.featuredImage || entity.backdrop} />

        {showInfo && (
          <InfoContainer hideSubtitle={hideSubtitle}>
            <InfoTitle hideSubtitle={hideSubtitle}>{entity.title}</InfoTitle>
            {!hideSubtitle && <InfoSubtitle>{entity?.subtitle}</InfoSubtitle>}
          </InfoContainer>
        )}
      </EntityContainer>
    </Container>
  );
};

export default EntityImage;
