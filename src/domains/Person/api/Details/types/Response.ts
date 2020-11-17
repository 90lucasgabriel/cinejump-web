// import Recommendations from 'domains/Movie/api/Recommendations/Response';
import Movie from 'domains/Person/api/Details/types/Movie';
import Images from 'shared/types/Images';

export default interface Response {
  id: number;
  name: string;

  placeOfBirth?: string;
  biography: string;
  birthday?: string;
  deathday?: string;
  popularity: number;

  knownForDepartment: string;
  gender: string;
  alsoKnownAs: string[];
  adult: boolean;
  imdbId: string;
  homepage?: string;

  knownFor?: Movie[];
  filmography?: Movie[];

  images?: Images;

  favorite: boolean;
  mediaType: number;
  featuredImage?: string;
  title: string;
  subtitle?: string;
  releaseYear?: string;
}
