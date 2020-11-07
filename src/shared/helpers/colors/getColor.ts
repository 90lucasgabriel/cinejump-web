import { Color } from 'shared/enums';
import { getColorByTheme } from 'shared/helpers';

const getColor = (
  theme?: string,
  color?: string,
  defaultColor?: Color | string,
): Color | string => {
  return color || getColorByTheme(theme) || defaultColor || Color.Primary;
};

export default getColor;
