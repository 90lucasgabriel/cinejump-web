import styled from 'styled-components';

import { Skeleton } from 'components';
import {
  Container as ContainerDefault,
  Caption as CaptionDefault,
} from 'components/MovieHighlight/styles';

export const Container = styled(ContainerDefault)``;
export const Caption = styled(CaptionDefault)``;

export const BackdropSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
