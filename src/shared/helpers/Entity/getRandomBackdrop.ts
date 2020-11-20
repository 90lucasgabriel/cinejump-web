import { randomInteger } from 'shared/helpers';

const getRandomBackdrop = (backdrops: any): string | null => {
  if (backdrops) {
    return backdrops[randomInteger(0, backdrops?.length - 1)]?.featuredImage;
  }

  return null;
};

export default getRandomBackdrop;
