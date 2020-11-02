import { Type } from 'domains/Favorites/enums';

const getMediaTypeId = (mediaType?: string): number | undefined => {
  if (mediaType === 'tv') {
    return Type.TV;
  }

  if (mediaType === 'movie') {
    return Type.MOVIE;
  }

  if (mediaType === 'person') {
    return Type.PERSON;
  }
};

export default getMediaTypeId;
