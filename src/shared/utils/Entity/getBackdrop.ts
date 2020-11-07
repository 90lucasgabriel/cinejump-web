import { formatTmdbImage } from 'shared/utils';

const getBackdrop = (value: any): string | null => {
  return formatTmdbImage({
    value: value.backdrop_path || value.profile_path,
  });
};

export default getBackdrop;
