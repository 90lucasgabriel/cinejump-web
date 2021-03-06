import tmdb from 'services/api/tmdb';

import {
  getBackdrop,
  getFeaturedImage,
  getReleaseDate,
  getReleaseYear,
  getTitle,
} from 'shared/helpers/Entity';

import { EntityType } from 'shared/enums';
import Params from 'domains/Movie/api/Popular/types/Params';
import RawResponse from 'domains/Movie/api/Popular/types/RawResponse';
import Response from 'domains/Movie/api/Popular/types/Response';

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
      popularity: movie.popularity,
      voteCount: movie.vote_count,
      voteAverage: movie.vote_average,

      releaseDate: getReleaseDate(movie),
      backdrop: getBackdrop(movie),

      featuredImage: getFeaturedImage(movie),
      releaseYear: getReleaseYear(movie),
      subtitle: getReleaseDate(movie),
      title: getTitle(movie),
      favorite: false,
      mediaType: EntityType.MOVIE,
    } as Response;

    response = [...response, parsedMovie];
  });

  return response;
};

export default Popular;
