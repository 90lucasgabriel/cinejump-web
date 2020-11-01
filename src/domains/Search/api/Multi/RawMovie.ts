import RawMovieDetails from 'domains/Movie/api/Details/RawResponse';

export default interface RawMovie extends RawMovieDetails {
  poster_path?: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;

  first_air_date?: string;
  name?: string;
  media_type?: string;
}
