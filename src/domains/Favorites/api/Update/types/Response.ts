import DetailsResponse from 'domains/Movie/api/Details/types/Response';

export default interface Response extends Omit<DetailsResponse, 'id'> {
  favoriteId: string;
  userId: string;
  movieId: number;
}
