import styled from 'styled-components';

import { Size } from 'shared/enums';
import { Skeleton } from 'components';

export const ShortLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 30%;
  border-radius: ${Size.Largest};
`;

export const MediumLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 50%;
  border-radius: ${Size.Largest};
`;
