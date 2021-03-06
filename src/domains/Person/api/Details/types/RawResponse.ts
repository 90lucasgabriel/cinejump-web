// import Recommendations from 'domains/Movie/api/Recommendations/RawResponse';
import RawMovie from 'domains/Person/api/Details/types/RawMovie';
import RawImage from 'shared/types/Image/RawImage';

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
    profiles: RawImage[];
  };

  combined_credits?: { cast: RawMovie[] };
}
