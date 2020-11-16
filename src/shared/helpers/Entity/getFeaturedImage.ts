import { formatTmdbImage } from 'shared/helpers';

const getFeaturedImage = (value: any): string | null => {
  return formatTmdbImage({
    value: value.poster_path || value.profile_path || value.file_path,
  });
};

export default getFeaturedImage;
