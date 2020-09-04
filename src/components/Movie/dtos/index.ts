import PopularProps from 'domains/Movie/api/Popular/Response';

export default interface Props extends PopularProps {
  isFavorite?: boolean;
}
