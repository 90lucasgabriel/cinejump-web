export default interface Response {
  poster?: string;
  backdrop?: string;
  overview: string;
  releaseDate: string;
  genreIds: number[];
  id: number;
  originalTitle: string;
  title: string;
  popularity: number;
  voteCount: number;
  voteAverage: number;
  favorite: boolean;
}
