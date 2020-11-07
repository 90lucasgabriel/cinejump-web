import tmdb from 'services/api/tmdb';

import { EntityType } from 'shared/enums';
import { getMediaTypeId } from 'shared/utils';
import {
  getBackdrop,
  getDescription,
  getFeaturedImage,
  getOriginalTitle,
  getReleaseDate,
  getReleaseYear,
  getSubtitle,
  getTitle,
} from 'shared/utils/Entity';

import Params from 'domains/Search/api/Multi/Params';
import RawResponse from 'domains/Search/api/Multi/RawResponse';
import Response from 'domains/Search/api/Multi/Response';

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
      originalTitle: getOriginalTitle(result),
      popularity: result.popularity,
      voteCount: result.vote_count,
      voteAverage: result.vote_average,

      releaseDate: getReleaseDate(result),
      poster: getFeaturedImage(result),
      backdrop: getBackdrop(result),

      featuredImage: getFeaturedImage(result),
      releaseYear: getReleaseYear(result),
      subtitle: getSubtitle(result),
      title: getTitle(result),
      favorite: false,
      mediaType: getMediaTypeId(result.media_type),
      description: getDescription(result),
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
