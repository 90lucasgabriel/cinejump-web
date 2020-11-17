import { formatTmdbImage } from 'shared/helpers';

const getBackdrop = (value: any): string | null => {
  return formatTmdbImage({
    value: value.backdrop_path || value.profile_path || value.file_path,
  });
};

export default getBackdrop;
