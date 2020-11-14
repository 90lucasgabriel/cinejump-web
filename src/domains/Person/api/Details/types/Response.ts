// import Recommendations from 'domains/Movie/api/Recommendations/Response';
import Movie from 'domains/Person/api/Details/types/Movie';

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

  images?: Array<{
    aspectRatio: number;
    featuredImage?: string;
    height: number;
    voteAverage: number;
    voteCount: number;
    width: number;
  }>;

  favorite: boolean;
  mediaType: number;
  featuredImage?: string;
  title: string;
  subtitle?: string;
  releaseYear?: string;
}
