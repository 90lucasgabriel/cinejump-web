import tmdb from 'services/api/tmdb';

import { EntityType } from 'shared/enums';
import Params from 'domains/Search/api/Multi/Params';
import RawResponse from 'domains/Search/api/Multi/RawResponse';
import Response from 'domains/Search/api/Multi/Response';
import { formatDate, formatTmdbImage, getMediaTypeId } from 'shared/utils';

const Multi = async (params: Params): Promise<Response[]> => {
  const response = await rawPopular(params);

  return parseResponse(response);
};

export const rawPopular = async (params: Params): Promise<RawResponse[]> => {
  const response = await tmdb.get(`/search/multi`, {
    params: { query: params.query },
  });

  return response.data.results;
};

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
  let response = [] as Response[];

  rawResponse.forEach(result => {
    const parsedMovie = {
      overview: result.overview,
      genreIds: result.genre_ids,
      id: result.id,
      originalTitle: result.original_title || result.original_name,
      title: result.title || result.name,
      popularity: result.popularity,
      voteCount: result.vote_count,
      voteAverage: result.vote_average,

      releaseYear:
        result.release_date?.substring(0, 4) ||
        result.first_air_date?.substring(0, 4),
      releaseDate:
        formatDate({ value: result.release_date }) ||
        formatDate({ value: result.first_air_date }),
      poster: formatTmdbImage({ value: result.poster_path }),
      backdrop: formatTmdbImage({ value: result.backdrop_path }),
      favorite: false,

      mediaType: getMediaTypeId(result.media_type),
    } as Response;

    response = [...response, parsedMovie];
  });

  response = [...response]
    .filter(
      item =>
        item.mediaType === EntityType.MOVIE || item.mediaType === EntityType.TV,
    )
    .sort((a, b) => (a.popularity < b.popularity ? 1 : -1));

  return response;
};

export default Multi;
