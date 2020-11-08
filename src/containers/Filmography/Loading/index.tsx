import React from 'react';

import { ListContainer, ItemContainer } from 'containers/Filmography/styles';
import { ShortLabelSkeleton, MediumLabelSkeleton } from './styles';

const FilmographyLoading: React.FC<any> = () => {
  return (
    <ListContainer>
      <ItemContainer>
        <MediumLabelSkeleton />
      </ItemContainer>
      <ItemContainer>
        <ShortLabelSkeleton />
      </ItemContainer>
      <ItemContainer>
        <MediumLabelSkeleton />
      </ItemContainer>
      <ItemContainer>
        <ShortLabelSkeleton />
      </ItemContainer>
      <ItemContainer>
        <MediumLabelSkeleton />
      </ItemContainer>
      <ItemContainer>
        <ShortLabelSkeleton />
      </ItemContainer>
      <ItemContainer>
        <MediumLabelSkeleton />
      </ItemContainer>
    </ListContainer>
  );
};

export default FilmographyLoading;
