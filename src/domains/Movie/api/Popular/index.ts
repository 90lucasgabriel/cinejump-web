import tmdb from 'services/api/tmdb';

import { formatDate, formatTmdbImage } from 'shared/utils';

import { Type } from 'domains/Favorites/enums';
import Params from 'domains/Movie/api/NowPlaying/Params';
import RawResponse from 'domains/Movie/api/Popular/RawResponse';
import Response from 'domains/Movie/api/Popular/Response';

const Popular = async (params?: Params): Promise<Response[]> => {
  const response = await rawPopular(params);

  return parseResponse(response);
};

export const rawPopular = async (params?: Params): Promise<RawResponse[]> => {
  const response = await tmdb.get('/movie/popular', {
    params: { page: params?.page },
  });

  return response.data.results;
};

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
  let response = [] as Response[];

  rawResponse.forEach(movie => {
    const parsedMovie = {
      overview: movie.overview,
      genreIds: movie.genre_ids,
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
      mediaType: Type.MOVIE,
    } as Response;

    response = [...response, parsedMovie];
  });

  return response;
};

export default Popular;
