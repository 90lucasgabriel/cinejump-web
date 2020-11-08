import { Color } from 'shared/enums';

export default interface Props {
  theme?: 'primary' | 'secondary' | 'light';
  background?: Color;
  color?: Color | string;
  isLoading?: boolean;
}
