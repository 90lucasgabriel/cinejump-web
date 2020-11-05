import tmdb from 'services/api/tmdb';

import { formatDate, formatTmdbImage } from 'shared/utils';

import { EntityType } from 'shared/utils/enums';
import RawResponse from 'domains/Movie/api/Recommendations/RawResponse';
import Response from 'domains/Movie/api/Recommendations/Response';

const Recommendations = async (movieId: number): Promise<Response[]> => {
  const response = await rawPopular(movieId);

  return parseResponse(response);
};

export const rawPopular = async (movieId: number): Promise<RawResponse[]> => {
  const response = await tmdb.get(`/movie/${movieId}/recommendations/`);

  return response.data.results;
};

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
  let response = [] as Response[];

  rawResponse.forEach(movie => {
    const parsedMovie = {
      overview: movie.overview,
      genresIds: movie.genres_ids,
      id: movie.id,
      originalTitle: movie.original_title,
      title: movie.title,
      popularity: movie.popularity,
      voteCount: movie.vote_count,
      voteAverage: movie.vote_average,

      releaseDate: formatDate({ value: movie.release_date }),
      poster: formatTmdbImage({ value: movie.poster_path }),
      backdrop: formatTmdbImage({ value: movie.backdrop_path }),
      favorite: false,
      mediaType: EntityType.MOVIE,
    } as Response;

    response = [...response, parsedMovie];
  });

  return response;
};

export default Recommendations;
