import styled from 'styled-components';

import { Color, PosterHeight, PosterWidth, Size } from 'shared/enums';
import ContainerProps from './dtos/ContainerProps';

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${props => (props.large ? PosterWidth.Large : PosterWidth.Default)};
  height: ${props => (props.large ? PosterHeight.Large : PosterHeight.Default)};
  border-radius: ${Size.Smallest};
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;

    img {
      width: 110%;
      height: 110%;
    }
  }
`;

export const Profile = styled.img`
  margin-top: -5rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: width 0.2s, height 0.2s;
`;

export const NameContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 7.4rem;
  width: 100%;
  background: ${Color.Fill};
  overflow: hidden;
  padding: ${Size.Smallest};
`;

export const PersonName = styled.div`
  font-size: ${Size.Small};
  color: ${Color.Secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CharacterName = styled.div`
  font-size: ${Size.Small};
  color: ${Color.Text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
