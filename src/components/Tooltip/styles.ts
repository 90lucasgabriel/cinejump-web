import styled from 'styled-components';
import { Color, Size } from 'shared/enums';

export const Container = styled.div`
  position: relative;
  span {
    background: ${Color.Primary};
    padding: ${Size.Smallest};
    border-radius: 4px;
    font-size: ${Size.Medium};
    font-weight: 500;
    color: ${Color.Text};
    width: 200px;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    &::before {
      content: '';
      border-style: solid;
      border-color: ${Color.Primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
