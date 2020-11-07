import { formatTmdbImage } from 'shared/utils';

const getFeaturedImage = (value: any): string | null => {
  return formatTmdbImage({
    value: value.poster_path || value.profile_path,
  });
};

export default getFeaturedImage;
