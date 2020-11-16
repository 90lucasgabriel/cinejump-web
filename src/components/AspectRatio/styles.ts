import styled from 'styled-components';
import Props from './types';

export const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  padding-top: calc(
    (${props => props.height} / ${props => props.width}) * 100%
  );

  overflow: hidden;
  border-radius: ${props => props.borderRadius};

  & > * {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
