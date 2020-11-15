import styled from 'styled-components';
import { motion } from 'framer-motion';

import DefaultProps from 'shared/types';
import { Container as DefaultContainer, Button } from 'components';
import { Color, PosterHeight, Size } from 'shared/enums';
import { getColor } from 'shared/helpers';

interface LoadingProps {
  loaderColor?: string;
}

export const Container = styled(DefaultContainer)`
  position: relative;
  padding: ${Size.Medium} 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 715px) {
    &:hover {
      button {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
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
  height: calc(${PosterHeight.Default} + 10px);
  overflow-y: hidden;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListContent = styled(motion.div).attrs(() => ({
  // layout: true,
}))`
  display: inline-flex;
  padding: 0 2px;
  margin-top: 2px;

  @media (max-width: 1280px) {
    margin-left: ${Size.Medium};
    margin-right: ${Size.Smallest};
  }

  & > div {
    flex: 1 0 auto;
    scroll-snap-align: start;
    scroll-margin-left: ${Size.Large};
    margin-right: ${Size.Medium};

    @media (max-width: 1280px) {
      scroll-margin-left: ${Size.Medium};
      margin-right: ${Size.Smallest};
    }
  }

  & > div:last-child {
    margin-right: 0;

    @media (max-width: 1280px) {
      margin-right: ${Size.Default};
    }
  }
`;

export const EntityImageContainer = styled(motion.div).attrs(() => ({
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
}))``;

export const PreviousButton = styled(Button)`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, background 0.3s;

  position: absolute;
  z-index: 5;
  top: 48%;
  left: ${Size.Smallest};
  background: ${Color.Fill};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background: ${Color.Primary};
    svg {
      stroke: ${Color.Fill};
    }
  }
`;

export const NextButton = styled(Button)`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, background 0.3s;

  position: absolute;
  z-index: 5;
  top: 48%;
  right: ${Size.Smallest};
  background: ${Color.Fill};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background: ${Color.Primary};
    svg {
      stroke: ${Color.Fill};
    }
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
