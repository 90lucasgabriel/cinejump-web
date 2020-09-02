import React from 'react';

import { Wrapper } from 'components/Layout';
import {
  Container,
  MajorContainer,
  Backdrop,
  Caption,
  Title,
  Overview,
  MinorContainer,
  Minor,
} from './styles';

import Props from './dtos';

const Highlights: React.FC<Props> = ({ theme, background, color, data }) => {
  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        <MajorContainer>
          <Backdrop src={data[0]?.backdrop} alt={data[0]?.title} />
          <Caption>
            <Title>{data[0]?.title}</Title>
            <Overview>{data[0]?.overview}</Overview>
          </Caption>
        </MajorContainer>
        <MinorContainer>
          <Minor>
            <Backdrop src={data[1]?.backdrop} alt={data[1]?.title} />
            <Caption>
              <Title>{data[1]?.title}</Title>
            </Caption>
          </Minor>
          <Minor>
            <Backdrop src={data[2]?.backdrop} alt={data[2]?.title} />
            <Caption>
              <Title>{data[2]?.title}</Title>
            </Caption>
          </Minor>
        </MinorContainer>
      </Container>
    </Wrapper>
  );
};

export default Highlights;
