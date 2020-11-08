import DefaultProps from 'shared/types';
// import MovieProps from 'containers/EntityImage/dtos';
// import FavoriteProps from 'domains/Favorites/api/List/Response';
import { Color } from 'shared/enums';

export default interface Props extends DefaultProps {
  title?: string;
  data: any[];
  isLoading?: boolean;
  loaderColor?: Color;
  message?: string;
}
