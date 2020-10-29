import DefaultProps from 'shared/dtos';
import MovieProps from 'components/Movie/dtos';
import FavoriteProps from 'domains/Favorites/api/List/Response';
import { Color } from 'shared/enums';

export default interface Props extends DefaultProps {
  title?: string;
  data: any[];
  isLoading?: boolean;
  loaderColor?: Color;
  message?: string;
}
