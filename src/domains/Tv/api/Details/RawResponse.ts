import Recommendations from 'domains/Movie/api/Recommendations/RawResponse';
import Credits from 'domains/Movie/api/Credits/RawResponse';

export default interface RawResponse {
  poster_path?: string;
  overview: string;
  first_air_date: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  homepage?: string;
  id: number;
  original_language: string;
  original_name: string;
  name: string;
  backdrop_path?: string;
  popularity: number;
  episode_run_time: number;
  vote_count: number;
  vote_average: number;
  recommendations?: {
    results: Recommendations[];
  };
  credits?: Credits;
  mediaType: string;
}
