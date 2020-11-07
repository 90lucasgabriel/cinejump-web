import MovieDetails from 'domains/Movie/api/Details/types/Response';

export default interface Movie extends MovieDetails {
  character: string;
  year?: string;
  originalDate: string;

  firstAirDate?: string;
  name?: string;
}
