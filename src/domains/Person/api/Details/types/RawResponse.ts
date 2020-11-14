// import Recommendations from 'domains/Movie/api/Recommendations/RawResponse';
import RawMovie from 'domains/Person/api/Details/types/RawMovie';

export default interface RawResponse {
  id: number;
  name: string;

  biography: string;
  popularity: number;
  place_of_birth?: string;
  profile_path?: string;

  known_for_department: string;
  birthday?: string;
  deathday?: string;

  gender: number;
  also_known_as: string[];
  adult: boolean;
  imdb_id: string;
  homepage?: string;

  images?: {
    profiles: Array<{
      aspect_ratio: number;
      file_path: string;
      height: number;
      vote_average: number;
      vote_count: number;
      width: number;
    }>;
  };

  combined_credits?: { cast: RawMovie[] };
}
