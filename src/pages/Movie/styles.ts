import styled from 'styled-components';
import { Color, Size } from 'shared/enums';

export const Container = styled.div``;

export const HeaderBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 60rem;
  background: ${Color.Primary};
  overflow: hidden;

  object-fit: cover;

  img {
    opacity: 0.1;
    min-height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  line-height: 2.8rem;
`;

export const MovieContainer = styled.div`
  color: ${Color.Fill};
  display: flex;
  justify-content: center;

  @media (max-width: 1280px) {
    margin-left: ${Size.Medium};
    margin-right: ${Size.Medium};
  }

  @media (max-width: 715px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PosterContainer = styled.div``;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: ${Color.Text};
  margin-top: ${Size.Large};
  width: 100%;

  @media (min-width: 715px) {
    height: 50rem;
    color: ${Color.Fill};
    margin-left: ${Size.Large};
    margin-top: 0;
    padding: 0;
    padding-bottom: ${Size.Large};
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: ${Size.Default};
`;

export const Title = styled.h1`
  margin-bottom: ${Size.Small};
  font-weight: 500;
  line-height: ${Size.Large};
`;

export const Subtitle = styled.p``;

export const Tagline = styled.p`
  font-style: italic;
  margin-bottom: ${Size.Smallest};
`;

export const OverviewContainer = styled.div`
  margin-bottom: ${Size.Smallest};
`;

export const OverviewTitle = styled.h3`
  font-weight: 500;
`;

export const Overview = styled.p`
  text-align: justify;

  @media (min-width: 715px) {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const VoteAverage = styled.div`
  margin-bottom: ${Size.Smallest};
`;

export const VoteAverageTitle = styled.span`
  font-weight: 500;
`;

export const Director = styled.div`
  margin-bottom: ${Size.Smallest};
`;

export const DirectorTitle = styled.span`
  font-weight: 500;
`;
