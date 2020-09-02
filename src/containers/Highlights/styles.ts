import styled from 'styled-components';
import { Container as DefaultContainer } from 'components/Layout';
import { Size } from 'shared/enums';

export const Container = styled(DefaultContainer)`
  display: flex;
  flex-wrap: wrap;
`;

export const MajorContainer = styled.div`
  position: relative;
  height: 36rem;
  flex: 2 0 280px;
  overflow: hidden;
  border-radius: ${Size.Small};

  & + div {

  margin-left: ${Size.Default};
  }

  @media (max-width: 900px) {
    margin: 0 ${Size.Default};
  }
`;

export const MinorContainer = styled.div`
  display: flex;
  flex: 1 0 130px;
  flex-wrap: wrap;

  & > div + div {
    margin-top: ${Size.Default};
  }

  @media (max-width: 900px) {
    display: none;
  }

  & > div {
    position: relative;
    flex: 1 0 300px;
    height: 17rem;
    border-radius: ${Size.Small};

    overflow: hidden;
  }
`;

export const Minor = styled.div``;
