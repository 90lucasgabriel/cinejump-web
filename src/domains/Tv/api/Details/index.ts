import tmdb from 'services/api/tmdb';

import { arrayToString, randomInteger } from 'shared/helpers';
import {
  getBackdrop,
  getFeaturedImage,
  getReleaseDate,
  getReleaseYear,
  getSubtitle,
  getTitle,
} from 'shared/helpers/Entity';

import { EntityType } from 'shared/enums';
import Params from 'domains/Tv/api/Details/types/Params';
import RawResponse from 'domains/Tv/api/Details/types/RawResponse';
import Response from 'domains/Tv/api/Details/types/Response';
import Recommendations from 'domains/Tv/api/Recommendations/types/Response';
import Credits from 'domains/Tv/api/Credits/types/Response';

import Crew from 'domains/Tv/api/Credits/types/Crew';
import Cast from 'domains/Tv/api/Credits/types/Cast';
import Image from 'shared/types/Image';

const Details = async (tvId: number, params?: Params): Promise<Response> => {
  const response = await rawPopular(tvId, params);

  return parseResponse(response);
};

export const rawPopular = async (
  tvId: number,
  params?: Params,
): Promise<RawResponse> => {
  const response = await tmdb.get(`/tv/${tvId}`, {
    params: {
      append_to_response: params?.appendToResponse,
      include_image_language: params?.includeImageLanguage || 'pt,en,null',
    },
  });

  return response.data;
};

const parseResponse = (tv: RawResponse): Response => {
  const recommendations = tv.recommendations?.results.map(recommendation => ({
    backdrop: getBackdrop(recommendation),
    id: recommendation.id,

    featuredImage: getFeaturedImage(recommendation),
    releaseYear: getReleaseYear(recommendation),
    subtitle: getSubtitle(recommendation),
    title: getTitle(recommendation),
    favorite: false,
    mediaType: EntityType.TV,
  })) as Recommendations[];

  const posters = tv.images?.posters.map(poster => ({
    aspectRatio: poster.aspect_ratio,
    height: poster.height,
    width: poster.width,
    voteAverage: poster.vote_average,
    voteCount: poster.vote_count,
    featuredImage: getFeaturedImage(poster),
  })) as Image[];

  const backdrops = tv.images?.backdrops.map(backdrop => ({
    aspectRatio: backdrop.aspect_ratio,
    height: backdrop.height,
    width: backdrop.width,
    voteAverage: backdrop.vote_average,
    voteCount: backdrop.vote_count,
    featuredImage: getFeaturedImage(backdrop),
  })) as Image[];

  const images = { posters, backdrops };

  const cast = tv.credits?.cast.slice(0, 15).map(person => ({
    order: person.order,
    id: person.id,
    name: person.name,
    character: person.character,
    castId: person.cast_id,
    creditId: person.credit_id,
    gender: person.gender,
    profile: getFeaturedImage(person),

    featuredImage: getFeaturedImage(person),
    subtitle: person.character,
    title: person.name,
    favorite: false,
    mediaType: EntityType.PERSON,
  })) as Cast[];

  const crew = tv.credits?.crew.map(person => ({
    id: person.id,
    name: person.name,
    job: person.job,
    department: person.department,
    creditId: person.credit_id,
    gender: person.gender,
    profile: getFeaturedImage(person),

    featuredImage: getFeaturedImage(person),
    subtitle: person.job,
    title: person.name,
    favorite: false,
    mediaType: EntityType.PERSON,
  })) as Crew[];

  const credits = { cast, crew } as Credits;

  let parsedMovie = {
    overview: tv.overview,
    genres: tv.genres,
    genresNames: arrayToString(tv.genres, 'name'),
    id: tv.id,
    originalTitle: tv.original_name,
    popularity: tv.popularity,
    voteCount: tv.vote_count,
    voteAverage: tv.vote_average,
    tagline: tv.tagline,
    runtime: `${tv.episode_run_time} min`,

    seasonsCount: tv.number_of_seasons,
    seasonsDescription:
      tv.number_of_seasons > 1
        ? `${tv.number_of_seasons} temporadas`
        : `${tv.number_of_seasons} temporada`,

    episodesCount: tv.number_of_episodes,
    episodesDescription:
      tv.number_of_episodes > 1
        ? `${tv.number_of_episodes} episódios`
        : `${tv.number_of_episodes} episódio`,

    creatorName: tv.created_by[0]?.name,

    releaseDate: getReleaseDate(tv),
    backdrop:
      backdrops[randomInteger(0, backdrops.length - 1)]?.featuredImage ||
      getBackdrop(tv),

    featuredImage: getFeaturedImage(tv),
    releaseYear: getReleaseYear(tv),
    subtitle: getReleaseDate(tv),
    title: getTitle(tv),
    favorite: false,
    mediaType: EntityType.TV,
  } as Response;

  parsedMovie = { ...parsedMovie, recommendations, credits, images };

  return parsedMovie;
};

export default Details;
