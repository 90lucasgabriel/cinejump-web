import styled from 'styled-components';
import { Color } from 'shared/enums';

export const Container = styled.div``;

export const HeaderBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 600px;
  background: ${Color.Primary};
  overflow: hidden;

  object-fit: cover;

  img {
    opacity: 0.1;
    /* height: 200px; */
    width: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const MovieDetailsContainer = styled.div`
  height: 500px;
  color: ${Color.Fill};
`;
