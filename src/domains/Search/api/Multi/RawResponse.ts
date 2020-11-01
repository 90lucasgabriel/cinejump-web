// import Recommendations from 'domains/Movie/api/Recommendations/RawResponse';
import RawMovie from 'domains/Person/api/Details/RawMovie';

export default interface RawResponse {
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

  media_type: string;
}
