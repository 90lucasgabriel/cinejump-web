import styled from 'styled-components';

import { Size } from 'shared/enums';
import { Skeleton } from 'components';

export const ShortLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 15%;
  border-radius: ${Size.Largest};

  margin-bottom: ${Size.Default};
`;

export const MediumLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 30%;
  border-radius: ${Size.Largest};

  margin-bottom: ${Size.Smallest};
`;

export const LongLabelSkeleton = styled(Skeleton)`
  height: ${Size.Default};
  width: 90%;
  border-radius: ${Size.Default};

  margin-bottom: ${Size.Smallest};
`;
