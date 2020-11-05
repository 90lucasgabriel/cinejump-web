export default interface Response {
  backdrop?: string;
  id: number;

  favorite: boolean;
  mediaType: number;
  featuredImage?: string;
  title: string;
  subtitle?: string;
  releaseYear?: string;
  // overview: string;
  // releaseDate: string;
  // genresIds: number[];
  // originalTitle: string;
  // popularity: number;
  // voteCount: number;
  // voteAverage: number;
}
