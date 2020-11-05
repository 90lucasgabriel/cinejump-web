import { EntityType } from 'shared/utils/enums';

const getMediaTypeId = (mediaType?: string): number | undefined => {
  if (mediaType === 'tv') {
    return EntityType.TV;
  }

  if (mediaType === 'movie') {
    return EntityType.MOVIE;
  }

  if (mediaType === 'person') {
    return EntityType.PERSON;
  }
};

export default getMediaTypeId;
