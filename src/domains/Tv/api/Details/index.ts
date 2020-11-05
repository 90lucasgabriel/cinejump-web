import tmdb from 'services/api/tmdb';

import { arrayToString, formatTmdbImage, formatDate } from 'shared/utils';

import { EntityType } from 'shared/utils/enums';
import Params from 'domains/Tv/api/Details/Params';
import RawResponse from 'domains/Tv/api/Details/RawResponse';
import Response from 'domains/Tv/api/Details/Response';
import Recommendations from 'domains/Tv/api/Recommendations/Response';
import Credits from 'domains/Tv/api/Credits/Response';

import Crew from 'domains/Tv/api/Credits/dtos/Crew';
import Cast from 'domains/Tv/api/Credits/dtos/Cast';

const Details = async (tvId: number, params?: Params): Promise<Response> => {
  const response = await rawPopular(tvId, params);

  return parseResponse(response);
};

export const rawPopular = async (
  tvId: number,
  params?: Params,
): Promise<RawResponse> => {
  const response = await tmdb.get(`/tv/${tvId}`, {
    params: { append_to_response: params?.appendToResponse },
  });

  return response.data;
};

const parseResponse = (tv: RawResponse): Response => {
  let parsedMovie = {
    overview: tv.overview,
    genres: tv.genres,
    genresNames: arrayToString(tv.genres, 'name'),
    id: tv.id,
    originalTitle: tv.original_name,
    title: tv.name,
    popularity: tv.popularity,
    voteCount: tv.vote_count,
    voteAverage: tv.vote_average,
    runtime: `${tv.episode_run_time} min`,

    directorName: tv.credits?.crew.find(
      person => person.job.toUpperCase() === 'DIRECTOR',
    )?.name,

    releaseDate: formatDate({ value: tv.first_air_date }),
    poster: formatTmdbImage({ value: tv.poster_path }),
    backdrop: formatTmdbImage({ value: tv.backdrop_path }),
    favorite: false,
    mediaType: EntityType.TV,
  } as Response;

  const recommendations = tv.recommendations?.results.map(recommendation => ({
    poster: formatTmdbImage({ value: recommendation.poster_path }),
    backdrop: formatTmdbImage({ value: recommendation.poster_path }),
    id: recommendation.id,
    title: recommendation.title,
    favorite: false,
    mediaType: EntityType.TV,
  })) as Recommendations[];

  const cast = tv.credits?.cast.slice(0, 15).map(person => ({
    order: person.order,
    id: person.id,
    name: person.name,
    character: person.character,
    castId: person.cast_id,
    creditId: person.credit_id,
    gender: person.gender,
    profile: formatTmdbImage({ value: person.profile_path }),
  })) as Cast[];

  const crew = tv.credits?.crew.map(person => ({
    id: person.id,
    name: person.name,
    job: person.job,
    department: person.department,
    creditId: person.credit_id,
    gender: person.gender,
    profile: formatTmdbImage({ value: person.profile_path }),
  })) as Crew[];

  const credits = { cast, crew } as Credits;

  parsedMovie = { ...parsedMovie, recommendations, credits };

  return parsedMovie;
};

export default Details;
