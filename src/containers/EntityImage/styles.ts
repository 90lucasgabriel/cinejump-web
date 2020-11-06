import styled, { css } from 'styled-components';

import { Color, PosterHeight, PosterWidth, Size } from 'shared/enums';
import ContainerProps from './dtos/ContainerProps';

export const Container = styled.div<ContainerProps>`
  position: relative;
  border-radius: ${Size.Smallest};
  background: ${Color.FillSecondary};

  ${props =>
    props.showShadow &&
    css`
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    `}
`;

export const EntityContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${Size.Smallest};
  overflow: hidden;

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
    props.showInfo &&
    css`
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    `}


  ${props =>
    !props.disabled &&
    css`
      &:hover {
        cursor: pointer;

        img {
          width: 110%;
          height: 110%;
        }
      }
    `}
`;

export const IconButton = styled.button`
  position: absolute;
  right: ${Size.Smallest};
  top: ${Size.Smallest};
  background: transparent;
  border: none;

  svg {
    height: ${Size.Default};
    width: ${Size.Default};
  }
`;

export const FeaturedImage = styled.img<ContainerProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: width 0.2s, height 0.2s;
  border: 0;
  outline

  ${props =>
    props.showInfo &&
    css`
      margin-top: -${Size.Largest};
    `}
`;

export const InfoContainer = styled.div<ContainerProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: ${Size.Default};
  background: ${Color.Fill};
  overflow: hidden;
  padding: ${Size.Smallest};
  border-radius: 0 0 ${Size.Smallest} ${Size.Smallest};
  height: ${props => (props.hideSubtitle ? '5.4rem' : '7rem')};
`;

export const InfoTitle = styled.p<ContainerProps>`
  font-size: ${Size.Small};
  color: ${Color.Secondary};

  ${props =>
    props.hideSubtitle === false &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const InfoSubtitle = styled.p`
  font-size: ${Size.Small};
  color: ${Color.Text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
