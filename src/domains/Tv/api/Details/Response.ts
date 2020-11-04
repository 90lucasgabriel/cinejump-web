import Recommendations from 'domains/Movie/api/Recommendations/Response';
import Credits from 'domains/Movie/api/Credits/Response';

export default interface Response {
  poster?: string;
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
  title: string;
  originalTitle: string;
  popularity: number;
  runtime: string;
  voteCount: number;
  voteAverage: number;
  favorite: boolean;

  recommendations?: Recommendations[];
  credits?: Credits;
  directorName?: string;

  mediaType: number;
}