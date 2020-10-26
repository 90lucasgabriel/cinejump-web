import tmdb from 'services/api/tmdb';

import Params from 'domains/Movie/api/Details/Params';
import RawResponse from 'domains/Movie/api/Details/RawResponse';
import Response from 'domains/Movie/api/Details/Response';
import Recommendations from 'domains/Movie/api/Recommendations/Response';
import formatDate from 'shared/utils/formatDate';
import formatTmdbImage from 'shared/utils/formatTmdbImage';

const Details = async (movieId: number, params?: Params): Promise<Response> => {
  const response = await rawPopular(movieId, params);

  return parseResponse(response);
};

export const rawPopular = async (
  movieId: number,
  params?: Params,
): Promise<RawResponse> => {
  const response = await tmdb.get(`/movie/${movieId}`, {
    params: { append_to_response: params?.appendToResponse },
  });

  return response.data;
};

const parseResponse = (movie: RawResponse): Response => {
  let parsedMovie = {
    overview: movie.overview,
    budget: movie.budget,
    genres: movie.genres,
    genresNames: movie.genres.map(genre => genre.name),
    id: movie.id,
    originalTitle: movie.original_title,
    title: movie.title,
    popularity: movie.popularity,
    voteCount: movie.vote_count,
    voteAverage: movie.vote_average,
    runtime: `${movie.runtime} min`,
    tagline: movie.tagline,

    credits: movie.credits,
    directorName: movie.credits?.crew.find(
      person => person.job.toUpperCase() === 'DIRECTOR',
    )?.name,

    releaseDate: formatDate({ value: movie.release_date }),
    poster: formatTmdbImage({ value: movie.poster_path }),
    backdrop: formatTmdbImage({ value: movie.backdrop_path }),
    favorite: false,
  } as Response;

  const recommendations = movie.recommendations?.results.map(
    recommendation => ({
      poster: formatTmdbImage({ value: recommendation.poster_path }),
      backdrop: formatTmdbImage({ value: recommendation.poster_path }),
      id: recommendation.id,
      title: recommendation.title,
      favorite: false,
    }),
  ) as Recommendations[];

  parsedMovie = { ...parsedMovie, recommendations };

  return parsedMovie;
};

export default Details;
