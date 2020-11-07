export default interface Response {
  backdrop?: string;
  overview: string;
  releaseDate: string;
  genreIds: number[];
  id: number;
  originalName: string;
  name: string;
  popularity: number;
  voteCount: number;

  favorite: boolean;
  mediaType: number;
  featuredImage?: string;
  title: string;
  subtitle?: string;
  releaseYear?: string;
}
