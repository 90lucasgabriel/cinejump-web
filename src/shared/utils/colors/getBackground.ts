import { Color } from 'shared/enums';
import { getBackgroundByTheme } from 'shared/utils';

const getBackground = (
  theme?: string,
  color?: string,
  defaultColor?: Color | string,
): Color | string => {
  return color || getBackgroundByTheme(theme) || defaultColor || 'transparent';
};

export default getBackground;
