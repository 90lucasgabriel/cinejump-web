import MovieDetails from 'domains/Movie/api/Details/Response';

export default interface Movie extends MovieDetails {
  character: string;
  year?: string;
  originalDate: string;

  firstAirDate?: string;
  name?: string;
  mediaType?: string;
}
