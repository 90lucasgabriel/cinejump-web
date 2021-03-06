import RawMovieDetails from 'domains/Movie/api/Details/types/RawResponse';

export default interface RawMovie extends RawMovieDetails {
  character: string;
  year?: string;
  originalDate: string;
  episode_count: number;

  first_air_date?: string;
  name?: string;
  media_type?: string;
}
