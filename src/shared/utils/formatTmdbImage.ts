import FormatTmdbImage from 'shared/utils/types/FormatTmdbImage';
import TmdbImageSize from 'shared/utils/enums/TmdbImageSize';

const formatTmdbImage = ({
  value,
  size = TmdbImageSize.MEDIUM,
}: FormatTmdbImage): string | null => {
  if (!value) {
    return null;
  }

  return `${process.env.REACT_APP_TMDB_IMAGE_URL}/${size}${value}`;
};

export default formatTmdbImage;
