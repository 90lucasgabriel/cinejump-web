import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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

export const Backdrop = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled(motion.div).attrs((props: any) => ({
  initial: { y: '-60%', x: '-50%', opacity: 0 },
  animate: { y: props?.center ? '-50%' : 0, x: '-50%', opacity: 1 },
  exit: { y: '-60%', x: '-50%', opacity: 0 },
}))<StyleProps>`
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

  ${props =>
    props.center &&
    css`
      top: 50%;
      transform: translate(-50%, -50%);
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  margin-top: 0;

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
