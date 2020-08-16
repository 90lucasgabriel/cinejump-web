import styled from 'styled-components';

export const ColumnLayout = styled.div`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RowLayout = styled.div`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
