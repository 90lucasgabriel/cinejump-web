import tmdb from 'services/api/tmdb';

import { formatDate, formatTmdbImage } from 'shared/utils';

import { Type } from 'domains/Favorites/enums';
import Params from 'domains/Tv/api/Popular/Params';
import RawResponse from 'domains/Tv/api/Popular/RawResponse';
import Response from 'domains/Tv/api/Popular/Response';

const Popular = async (params?: Params): Promise<Response[]> => {
  const response = await rawPopular(params);

  return parseResponse(response);
};

export const rawPopular = async (params?: Params): Promise<RawResponse[]> => {
  const response = await tmdb.get('/tv/popular', {
    params: { page: params?.page },
  });

  return response.data.results;
};

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
  let response = [] as Response[];

  rawResponse.forEach(tv => {
    const parsedMovie = {
      overview: tv.overview,
      genreIds: tv.genre_ids,
      id: tv.id,
      originalName: tv.original_name,
      name: tv.name,
      popularity: tv.popularity,
      voteCount: tv.vote_count,

      releaseDate: formatDate({ value: tv.first_air_date }),
      poster: formatTmdbImage({ value: tv.poster_path }),
      backdrop: formatTmdbImage({ value: tv.backdrop_path }),
      favorite: false,
      mediaType: Type.TV,
    } as Response;

    response = [...response, parsedMovie];
  });

  return response;
};

export default Popular;