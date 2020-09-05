import tmdb from 'services/api/tmdb';

import RawResponse from 'domains/Movie/api/Details/RawResponse';
import Response from 'domains/Movie/api/Details/Response';
import formatDate from 'shared/utils/formatDate';
import formatTmdbImage from 'shared/utils/formatTmdbImage';

const Details = async (movieId: number): Promise<Response> => {
  const response = await rawPopular(movieId);

  return parseResponse(response);
};

export const rawPopular = async (movieId: number): Promise<RawResponse> => {
  const response = await tmdb.get(`/movie/${movieId}`);

  return response.data;
};

const parseResponse = (movie: RawResponse): Response => {
  const parsedMovie = {
    overview: movie.overview,
    budget: movie.budget,
    genres: movie.genres,
    id: movie.id,
    originalTitle: movie.original_title,
    title: movie.title,
    popularity: movie.popularity,
    voteCount: movie.vote_count,
    voteAverage: movie.vote_average,

    releaseDate: formatDate({ value: movie.release_date }),
    poster: formatTmdbImage({ value: movie.poster_path }),
    backdrop: formatTmdbImage({ value: movie.backdrop_path }),
  } as Response;

  return parsedMovie;
};

export default Details;
