import Recommendations from 'domains/Movie/api/Recommendations/Response';

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
  id: number;
  originalTitle: string;
  title: string;
  popularity: number;
  voteCount: number;
  voteAverage: number;
  favorite: boolean;

  recommendations?: Recommendations[];
}
