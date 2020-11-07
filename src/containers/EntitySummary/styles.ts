import styled from 'styled-components';

import ContainerProps from 'containers/EntitySummary/types/ContainerProps';
import { Color, EntityType, Size } from 'shared/enums';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${Size.Small} 0;
  border-bottom: 1px solid ${Color.FillSecondary};
  transition: background 0.3s;

  &:hover {
    background: ${Color.FillSecondary};
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div``;

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin-left: ${Size.Medium};
`;

export const Title = styled.h3<ContainerProps>`
  margin-bottom: ${Size.Smallest};

  color: ${props =>
    props.mediaType === EntityType.PERSON ? Color.Secondary : Color.Primary};
`;

export const Subtitle = styled.p`
  color: ${Color.Text};
  font-size: ${Size.Small};
  margin-bottom: ${Size.Small};
`;

export const Description = styled.p`
  color: ${Color.Text};
  line-height: ${Size.Medium};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
