import { Color } from 'shared/enums';

const getBackgroundByTheme = (theme?: string): Color | null => {
  if (!theme) {
    return Color.Fill;
  }

  if (theme === 'light') {
    return Color.FillSecondary;
  }

  if (theme === 'primary') {
    return Color.Primary;
  }

  if (theme === 'secondary') {
    return Color.Secondary;
  }

  return null;
};

export default getBackgroundByTheme;
