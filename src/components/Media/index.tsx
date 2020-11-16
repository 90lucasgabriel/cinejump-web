import React from 'react';

import { checkImageMedia } from 'components/Media/helpers';
import { AspectRatio, AspectRatioLoading } from 'components';
import Props from './types';

import { LoadingContainer } from './styles';

const Media: React.FC<Props> = ({ src, ...rest }) => {
  return (
    <AspectRatio {...rest}>
      {checkImageMedia(src) ? (
        <img src={src} alt="media" />
      ) : (
        <video src={src} autoPlay loop muted />
      )}

      <LoadingContainer>
        <AspectRatioLoading />
      </LoadingContainer>
    </AspectRatio>
  );
};

export default Media;
