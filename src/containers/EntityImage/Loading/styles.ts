import styled, { css } from 'styled-components';

import { Color, PosterHeight, PosterWidth, Size } from 'shared/enums';
import { Skeleton } from 'components';
import ContainerProps from '../types/ContainerProps';

export const ContainerSkeleton = styled<any>(Skeleton)`
position: relative;
  border-radius: ${Size.Smallest};

  width: ${PosterWidth.Default};
  height: ${PosterHeight.Default};

  ${props =>
    props?.size === 'small' &&
    css`
      width: ${PosterWidth.Small};
      height: ${PosterHeight.Small};
      border: 0;
    `}

  ${props =>
    props.size === 'large' &&
    css`
      width: ${PosterWidth.Large};
      height: ${PosterHeight.Large};
      border: 0;
    `}

  ${props =>
    props.showShadow &&
    css`
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    `}


  ${props =>
    props.showInfo &&
    css`
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    `}
`;

export const InfoContainer = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: ${Color.Fill};
  border-radius: 0 0 ${Size.Smallest} ${Size.Smallest};
  height: ${props => (props.hideSubtitle ? '5.4rem' : '7rem')};
`;
