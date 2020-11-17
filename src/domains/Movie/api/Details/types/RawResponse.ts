import Recommendations from 'domains/Movie/api/Recommendations/types/RawResponse';
import Credits from 'domains/Movie/api/Credits/types/RawResponse';
import RawImage from 'shared/types/Image/RawImage';

export default interface RawResponse {
  poster_path?: string;
  budget: number;
  overview: string;
  release_date: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  homepage?: string;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  runtime: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  tagline: string;

  recommendations?: {
    results: Recommendations[];
  };
  images?: {
    posters: RawImage[];
    backdrops: RawImage[];
  };
  credits?: Credits;
  mediaType: string;
}
