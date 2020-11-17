import MovieResponse from 'domains/Movie/api/Details/types/Response';
import PersonResponse from 'domains/Person/api/Details/types/Response';
import TvResponse from 'domains/Tv/api/Details/types/Response';

export default interface Response
  extends Omit<MovieResponse, 'id'>,
    Omit<PersonResponse, 'id'>,
    Omit<TvResponse, 'id'> {
  favoriteId: string;
  userId: string;
  entityId: number;
  typeId: number;
}
