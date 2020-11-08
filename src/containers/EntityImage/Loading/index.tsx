import React from 'react';

import ContainerProps from '../types/ContainerProps';
import { ContainerSkeleton, InfoContainer } from './styles';

const EntityImageLoading: React.FC<ContainerProps> = ({
  size,
  showShadow,
  showInfo,
  hideSubtitle,
}) => {
  return (
    <ContainerSkeleton showShadow={showShadow} size={size} showInfo={showInfo}>
      {showInfo && <InfoContainer hideSubtitle={hideSubtitle} />}
    </ContainerSkeleton>
  );
};

export default EntityImageLoading;
