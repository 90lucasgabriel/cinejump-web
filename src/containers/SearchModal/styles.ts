import styled from 'styled-components';
import { Color, PosterHeight, Size } from 'shared/enums';

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

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
  flex-direction: column;
  border-top: 1px solid ${Color.Placeholder};

  max-height: 100%;
  overflow-y: auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(${PosterHeight.Default});

  svg {
    height: ${Size.Largest};
    width: ${Size.Largest};
    fill: ${Color.Primary};
  }
`;

export const Results = styled.div`
  display: flex;
  flex: 1;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${Size.Large};
`;
export const EmptyImage = styled.div`
  svg {
    max-height: 200px;
    width: 100%;
  }
`;
export const EmptyLabel = styled.div`
  margin-top: ${Size.Default};
  font-size: ${Size.Medium};
  color: ${Color.Text};
  text-align: center;
`;
