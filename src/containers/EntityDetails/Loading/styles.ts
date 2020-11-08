import styled from 'styled-components';

import { Color, Size } from 'shared/enums';
import { Skeleton } from 'components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  color: ${Color.Text};
  margin-top: ${Size.Large};

  @media (min-width: 715px) {
    height: 50rem;
    color: ${Color.Fill};
    margin-left: ${Size.Large};
    margin-top: 0;
    padding: 0;
    padding-bottom: ${Size.Large};
  }

  div {
    margin-bottom: ${Size.Small};
  }
`;

export const TitleSkeleton = styled(Skeleton)`
  height: ${Size.Large};
  width: 40%;
  border-radius: ${Size.Largest};
`;

export const ShortLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 25%;
  border-radius: ${Size.Largest};
`;

export const MediumLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 50%;
  border-radius: ${Size.Largest};
`;

export const LongLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 100%;
  border-radius: ${Size.Default};
`;

export const TitleContainer = styled.div``;

export const Subtitle = styled(Skeleton)``;

export const OverviewContainer = styled.div``;

export const VoteAverage = styled.div``;

export const Director = styled.div``;
