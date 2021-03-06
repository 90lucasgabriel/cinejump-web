import styled from 'styled-components';
import { motion } from 'framer-motion';

import DefaultProps from 'shared/types';
import { Container as DefaultContainer } from 'components/Layout';
import { Color, PosterHeight, Size } from 'shared/enums';
import { getColor } from 'shared/helpers';

interface LoadingProps {
  loaderColor?: string;
}

export const Container = styled(DefaultContainer)`
  padding: ${Size.Medium} 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2<DefaultProps>`
  margin-bottom: ${Size.Small};
  color: ${props => getColor(props.theme, props.color)};

  @media (max-width: 1280px) {
    margin-left: ${Size.Medium};
  }
`;

export const LoadingContainer = styled.div<LoadingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(${PosterHeight.Default});

  svg {
    height: ${Size.Largest};
    width: ${Size.Largest};
    fill: ${props => getColor(props.theme, props.loaderColor)};
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s height;
`;

export const ItemContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  font-size: ${Size.Default};
  color: ${Color.Text};
  padding: ${Size.Medium} 0;
  border-bottom: 1px solid ${Color.FillSecondary};
  text-decoration: none;
  transition: background 0.4s;

  &:hover {
    background: ${Color.FillSecondary};
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    margin-left: ${Size.Medium};
    margin-right: ${Size.Medium};
  }
`;

export const YearLabel = styled.span``;

export const MovieName = styled.span`
  font-weight: 500;
`;

export const CharacterName = styled.span``;

export const EpisodeCount = styled.span`
  text-decoration: italic;
  color: ${Color.Placeholder};
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Size.Default};

  &:hover {
    cursor: pointer;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(${PosterHeight.Default} / 3);
  color: ${Color.Text};

  @media (max-width: 1280px) {
    margin-left: ${Size.Medium};
  }
`;
