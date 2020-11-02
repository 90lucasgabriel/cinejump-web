export default interface Response {
  poster?: string;
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
}
