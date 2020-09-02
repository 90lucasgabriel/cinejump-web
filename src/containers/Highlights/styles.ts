import styled from 'styled-components';
import { Container as DefaultContainer } from 'components/Layout';
import { Color, Size } from 'shared/enums';

export const Container = styled(DefaultContainer)`
  display: flex;
  flex-wrap: wrap;
`;

export const MajorContainer = styled.div`
  position: relative;
  height: 36rem;
  flex: 2 0 280px;
  overflow: hidden;
  border-radius: ${Size.Small};
  margin-right: ${Size.Default};

  @media (max-width: 900px) {
    margin: 0 ${Size.Default};
  }
`;

export const Backdrop = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
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
`;

export const MinorContainer = styled.div`
  display: flex;
  flex: 1 0 130px;
  flex-wrap: wrap;

  & > div + div {
    margin-top: ${Size.Default};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Minor = styled.div`
  position: relative;
  flex: 1 0 300px;
  height: 17rem;
  border-radius: ${Size.Small};

  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
  }
`;
