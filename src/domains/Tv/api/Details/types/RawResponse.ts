import Recommendations from 'domains/Tv/api/Recommendations/types/RawResponse';
import Credits from 'domains/Tv/api/Credits/types/RawResponse';
import RawImage from 'shared/types/Image/RawImage';

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
  tagline: string;
  episode_run_time: number;
  vote_count: number;
  vote_average: number;
  created_by: any[];

  credits?: Credits;
  recommendations?: {
    results: Recommendations[];
  };
  images?: {
    posters: RawImage[];
    backdrops: RawImage[];
  };
  mediaType: string;
}
