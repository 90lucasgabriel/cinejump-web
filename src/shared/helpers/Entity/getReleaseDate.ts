import { formatDate } from 'shared/helpers';

const getReleaseDate = (value: any): string => {
  return formatDate({
    value: value?.release_date || value?.first_air_date || value?.birthday,
  });
};

export default getReleaseDate;
