import tmdb from 'services/api/tmdb';

import {
  getBackdrop,
  getFeaturedImage,
  getReleaseDate,
  getReleaseYear,
  getTitle,
} from 'shared/utils/Entity';

import { EntityType } from 'shared/enums';
import Params from 'domains/Tv/api/Popular/types/Params';
import RawResponse from 'domains/Tv/api/Popular/types/RawResponse';
import Response from 'domains/Tv/api/Popular/types/Response';

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

      releaseDate: getReleaseDate(tv),
      backdrop: getBackdrop(tv),

      featuredImage: getFeaturedImage(tv),
      releaseYear: getReleaseYear(tv),
      subtitle: getReleaseYear(tv),
      title: getTitle(tv),
      favorite: false,
      mediaType: EntityType.TV,
    } as Response;

    response = [...response, parsedMovie];
  });

  return response;
};

export default Popular;
