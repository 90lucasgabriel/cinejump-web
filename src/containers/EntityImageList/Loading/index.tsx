import React from 'react';

import ContainerProps from 'containers/EntityImage/types/ContainerProps';
import { EntityImageLoading } from 'containers';
import { ListContainer, ListContent } from './styles';

const EntityImageListLoading: React.FC<ContainerProps> = ({
  size,
  showShadow,
  showInfo,
  hideSubtitle,
  theme,
  background,
  color,
}) => {
  return (
    <ListContainer theme={theme} background={background} color={color}>
      <ListContent>
        <EntityImageLoading
          showShadow={showShadow}
          size={size}
          showInfo={showInfo}
          hideSubtitle={hideSubtitle}
        />
        <EntityImageLoading
          showShadow={showShadow}
          size={size}
          showInfo={showInfo}
          hideSubtitle={hideSubtitle}
        />
        <EntityImageLoading
          showShadow={showShadow}
          size={size}
          showInfo={showInfo}
          hideSubtitle={hideSubtitle}
        />
        <EntityImageLoading
          showShadow={showShadow}
          size={size}
          showInfo={showInfo}
          hideSubtitle={hideSubtitle}
        />
        <EntityImageLoading
          showShadow={showShadow}
          size={size}
          showInfo={showInfo}
          hideSubtitle={hideSubtitle}
        />
        <EntityImageLoading
          showShadow={showShadow}
          size={size}
          showInfo={showInfo}
          hideSubtitle={hideSubtitle}
        />
        <EntityImageLoading
          showShadow={showShadow}
          size={size}
          showInfo={showInfo}
          hideSubtitle={hideSubtitle}
        />
      </ListContent>
    </ListContainer>
  );
};

export default EntityImageListLoading;
