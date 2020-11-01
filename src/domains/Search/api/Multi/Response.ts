// import Recommendations from 'domains/Movie/api/Recommendations/Response';
import Movie from 'domains/Person/api/Details/Movie';

export default interface Response {
  poster?: string;
  backdrop?: string;
  overview: string;
  releaseDate: string;
  releaseYear: string;
  genreIds: number[];
  id: number;
  originalTitle: string;
  title: string;
  popularity: number;
  voteCount: number;
  voteAverage: number;
  favorite: boolean;

  mediaType: string;
}
