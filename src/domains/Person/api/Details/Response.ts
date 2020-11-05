// import Recommendations from 'domains/Movie/api/Recommendations/Response';
import Movie from 'domains/Person/api/Details/Movie';

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

  favorite: boolean;
  mediaType: number;
  featuredImage?: string;
  title: string;
  subtitle?: string;
  releaseYear?: string;
}
