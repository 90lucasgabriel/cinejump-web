// import Recommendations from 'domains/Movie/api/Recommendations/RawResponse';
import RawMovie from 'domains/Person/api/Details/RawMovie';

export default interface RawResponse {
  poster_path?: string;
  overview: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;

  media_type: string;
  release_date?: string;
  original_title?: string;
  title?: string;
  first_air_date?: string;
  original_name?: string;
  name?: string;
  birthday?: string;
  profile_path?: string;
  known_for?: any[];
}
