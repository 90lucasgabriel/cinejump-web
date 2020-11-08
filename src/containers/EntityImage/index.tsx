import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

import { getEntityRoute } from 'shared/helpers';
import { useAuth } from 'domains/Auth/hooks';
import { useFavorite } from 'domains/Favorites/hooks';
import { Color } from 'shared/enums';

import { EntityImageLoading } from 'containers';
import {
  Container,
  EntityContainer,
  IconButton,
  FeaturedImage,
  InfoContainer,
  InfoTitle,
  InfoSubtitle,
} from './styles';

import Props from './types';

const EntityImage: React.FC<Props> = ({
  size,
  showShadow,
  hideFavoriteButton,
  disabled,
  showInfo,
  hideSubtitle,
  showEmpty,
  isLoading,
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
    if (!disabled) {
      const entityRoute = getEntityRoute(entity.mediaType);
      history.push(`${entityRoute}/${entity.id}`);
    }
  }, [disabled, history, entity.id, entity.mediaType]);

  // Check if entity is in favorite list and change status
  useEffect(() => {
    if (user) {
      const response = favoriteList.find(
        favorite =>
          favorite.entityId === entity.id &&
          favorite.typeId === entity.mediaType,
      );

      setIsFavorite(!!response);
    }
  }, [user, favoriteList, entity.id, entity.mediaType]);

  if (!entity.featuredImage && !entity.backdrop && !showEmpty) {
    return null;
  }

  if (isLoading) {
    return (
      <EntityImageLoading
        showShadow={showShadow}
        size={size}
        showInfo={showInfo}
        hideSubtitle={hideSubtitle}
      />
    );
  }

  return (
    <Container showShadow={showShadow} size={size}>
      {!hideFavoriteButton && (
        <IconButton onClick={handleFavorite}>
          <BsHeartFill fill={isFavorite ? Color.Primary : Color.Empty} />
        </IconButton>
      )}
      <EntityContainer
        size={size}
        showInfo={showInfo}
        disabled={disabled}
        onClick={handleRedirect}
      >
        <FeaturedImage
          src={entity.featuredImage || entity.backdrop}
          showInfo={showInfo}
        />

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
