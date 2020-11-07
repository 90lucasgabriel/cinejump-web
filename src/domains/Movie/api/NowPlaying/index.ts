import tmdb from 'services/api/tmdb';

import {
  getBackdrop,
  getFeaturedImage,
  getReleaseDate,
  getReleaseYear,
  getTitle,
} from 'shared/utils/Entity';

import { EntityType } from 'shared/enums';
import Params from 'domains/Movie/api/NowPlaying/types/Params';
import RawResponse from 'domains/Movie/api/NowPlaying/types/RawResponse';
import Response from 'domains/Movie/api/NowPlaying/types/Response';

const NowPlaying = async (params?: Params): Promise<Response[]> => {
  const response = await rawNowPlaying(params);

  return parseResponse(response);
};

export const rawNowPlaying = async (
  params?: Params,
): Promise<RawResponse[]> => {
  const response = await tmdb.get('/movie/now_playing', {
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

export default NowPlaying;
