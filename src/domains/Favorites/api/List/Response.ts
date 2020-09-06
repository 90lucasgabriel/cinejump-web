import DetailsResponse from 'domains/Movie/api/Details/Response';

export default interface Response extends Omit<DetailsResponse, 'id'> {
  favoriteId: string;
  userId: string;
  movieId: number;
}
