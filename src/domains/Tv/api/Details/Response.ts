import Recommendations from 'domains/Movie/api/Recommendations/Response';
import Credits from 'domains/Movie/api/Credits/Response';

export default interface Response {
  backdrop?: string;
  budget: number;
  overview: string;
  releaseDate: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  genresNames: string;
  homepage?: string;
  id: number;
  originalTitle: string;
  popularity: number;
  runtime: string;
  voteCount: number;
  voteAverage: number;

  recommendations?: Recommendations[];
  credits?: Credits;
  directorName?: string;

  favorite: boolean;
  mediaType: number;
  featuredImage?: string;
  title: string;
  subtitle?: string;
  releaseYear?: string;
}
