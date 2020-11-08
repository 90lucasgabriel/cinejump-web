import styled from 'styled-components';
import { Color, Size } from 'shared/enums';

export const Container = styled.div`
  position: relative;
  height: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: ${Size.Small};

  background: ${Color.FillSecondary};

  &:hover {
    cursor: pointer;

    img {
      width: 110%;
      height: 140%;
    }
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: width 0.2s, height 0.2s;
`;

export const Caption = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: ${Size.Default};
  color: ${Color.Fill};
`;

export const Title = styled.h3`
  font-weight: 400;
`;

export const Overview = styled.p`
  line-height: ${Size.Medium};
  margin-top: ${Size.Smallest};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
