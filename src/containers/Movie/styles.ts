import styled from 'styled-components';
import { PosterHeight, PosterWidth, Size } from 'shared/enums';

export const Container = styled.div`
  position: relative;
  width: ${PosterWidth.Default};
  height: ${PosterHeight.Default};
  border-radius: ${Size.Smallest};
  overflow: hidden;
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

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
