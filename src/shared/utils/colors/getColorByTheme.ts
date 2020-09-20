import { Color } from 'shared/enums';

const getColorByTheme = (theme?: string): Color | null => {
  if (!theme || theme === 'light') {
    return Color.Primary;
  }

  if (theme === 'primary' || theme === 'secondary') {
    return Color.Fill;
  }

  return null;
};

export default getColorByTheme;
