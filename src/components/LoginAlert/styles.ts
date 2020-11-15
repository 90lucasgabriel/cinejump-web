import styled from 'styled-components';
import { Size } from 'shared/enums';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Size.Default};
  padding-top: 0;
  width: min(550px, calc(100vw - 5rem));
`;

export const MessageContainer = styled.div`
  padding: ${Size.Default};
  padding-top: 0;
  text-align: center;
`;

export const Message = styled.h3``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 715px) {
    flex-direction: row;
  }
`;
