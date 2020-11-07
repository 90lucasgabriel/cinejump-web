import Recommendations from 'domains/Tv/api/Recommendations/types/RawResponse';
import Credits from 'domains/Tv/api/Credits/types/RawResponse';

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
