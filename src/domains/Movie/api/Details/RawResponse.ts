export default interface RawResponse {
  poster_path?: string;
  budget: number;
  overview: string;
  release_date: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
