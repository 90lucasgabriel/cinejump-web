import RawMovieDetails from 'domains/Movie/api/Details/RawResponse';

export default interface RawMovie extends RawMovieDetails {
  character: string;
  year?: string;
  originalDate: string;

  first_air_date?: string;
  name?: string;
  media_type?: string;
}
