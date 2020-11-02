import styled from 'styled-components';
import { Color, Size } from 'shared/enums';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: ${Size.Default};
`;

export const Input = styled.input`
  font-size: ${Size.Medium};
  border: 0;
  width: 100%;
  text-align: center;
  color: ${Color.Primary};
  background: ${Color.Transparent};

  &::placeholder {
    color: ${Color.Placeholder};
  }
`;
