import styled, { css } from 'styled-components';

import { Color, Size } from 'shared/enums';
import StyleProps from 'components/Modal/types/StyleProps';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  /* * {
    box-sizing: border-box;
  } */
`;

export const Backdrop = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div<StyleProps>`
  position: absolute;

  top: 100px;
  left: 50%;
  transform: translateX(-50%);


  z-index: 15;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 100%;
  overflow: hidden;

  /* height: 100%; */

  ${props =>
    props.center &&
    css`
      top: 50% !important;
      transform: translate(-50%, -50%);
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}




  /* @media (max-width: 1280px) {
    width: calc(100% - ${Size.Medium} * 2);
  } */

  @media (max-width: 715px) {
    /* top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
  }


`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  background-color: ${Color.Fill};
  border-radius: ${Size.Small};

  top: 0;
  left: 0;
  /* width: 100%; */
  /* height: 100%; */

  max-height: 100%;
  overflow: hidden;
`;

export const CloseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 10px;
`;

export const CloseButton = styled.img`
  width: 20px;
  right: 20px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  /* width: 100%; */
  overflow: auto;

  max-height: 100%;
  overflow: hidden;
`;
