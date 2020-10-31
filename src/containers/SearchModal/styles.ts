import styled from 'styled-components';
import { Color, Size } from 'shared/enums';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  * {
    box-sizing: border-box;
  }
`;

export const Backdrop = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 1280px;
  min-height: 100px;
  max-height: calc(min(700px, 100%) - 100px - ${Size.Medium});

  top: 100px;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  z-index: 15;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1280px) {
    width: calc(100% - ${Size.Medium} * 2);
  }

  @media (max-width: 715px) {
    /* top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  max-height: calc(min(700px, 100%) - 100px - ${Size.Medium});

  padding: ${Size.Small};
  background-color: ${Color.Fill};
  border-radius: ${Size.Small};

  @media (max-width: 715px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex: direction;
  border-top: 1px solid ${Color.Placeholder};

  max-height: 100%;
  overflow-y: auto;
`;

export const Results = styled.div`
  display: flex;
  flex: 1;
`;
