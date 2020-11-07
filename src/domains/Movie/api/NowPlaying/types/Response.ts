export default interface Response {
  backdrop?: string;
  overview: string;
  releaseDate: string;
  genreIds: number[];
  id: number;
  originalTitle: string;
  popularity: number;
  voteCount: number;
  voteAverage: number;

  favorite: boolean;
  mediaType: number;
  featuredImage?: string;
  title: string;
  subtitle?: string;
  releaseYear?: string;
}
