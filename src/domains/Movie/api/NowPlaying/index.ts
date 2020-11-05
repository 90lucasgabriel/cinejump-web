import tmdb from 'services/api/tmdb';

import { formatDate, formatTmdbImage } from 'shared/utils';

import { EntityType } from 'shared/utils/enums';
import Params from 'domains/Movie/api/NowPlaying/Params';
import RawResponse from 'domains/Movie/api/NowPlaying/RawResponse';
import Response from 'domains/Movie/api/NowPlaying/Response';

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

export default NowPlaying;
