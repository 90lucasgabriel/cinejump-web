import tmdb from 'services/api/tmdb';

import { EntityType } from 'shared/enums';
import Params from 'domains/Search/api/Multi/Params';
import RawResponse from 'domains/Search/api/Multi/RawResponse';
import Response from 'domains/Search/api/Multi/Response';
import {
  arrayToString,
  formatDate,
  formatTmdbImage,
  getMediaTypeId,
} from 'shared/utils';

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
      popularity: result.popularity,
      voteCount: result.vote_count,
      voteAverage: result.vote_average,

      releaseDate:
        formatDate({ value: result.release_date }) ||
        formatDate({ value: result.first_air_date }),
      poster: formatTmdbImage({ value: result.poster_path }),
      backdrop: formatTmdbImage({ value: result.backdrop_path }),

      featuredImage: formatTmdbImage({
        value: result.poster_path || result.profile_path,
      }),
      releaseYear:
        (result.release_date && result.release_date.substring(0, 4)) ||
        (result.first_air_date && result.first_air_date.substring(0, 4)) ||
        (result.birthday && result.birthday.substring(0, 4)),
      subtitle:
        (result.release_date && result.release_date.substring(0, 4)) ||
        (result.first_air_date && result.first_air_date.substring(0, 4)) ||
        (result.known_for && 'Conhecido(a) por: '),
      title: result.title || result.name,
      favorite: false,
      mediaType: getMediaTypeId(result.media_type),
      description:
        (result.overview && result.overview) ||
        (result.known_for &&
          arrayToString(
            result.known_for.map(item => ({ title: item.title || item.name })),
            'title',
          )),
    } as Response;

    response = [...response, parsedMovie];
  });

  response =
    response &&
    [...response]
      .filter(
        item =>
          item.mediaType === EntityType.MOVIE ||
          item.mediaType === EntityType.TV ||
          item.mediaType === EntityType.PERSON,
      )
      .sort((a, b) => (a.popularity < b.popularity ? 1 : -1));

  return response;
};

export default Multi;
