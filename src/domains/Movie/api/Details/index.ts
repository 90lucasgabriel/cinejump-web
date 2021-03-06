import tmdb from 'services/api/tmdb';

import { arrayToString } from 'shared/helpers';
import {
  getBackdrop,
  getFeaturedImage,
  getRandomBackdrop,
  getReleaseDate,
  getReleaseYear,
  getSubtitle,
  getTitle,
} from 'shared/helpers/Entity';

import { EntityType } from 'shared/enums';
import Params from 'domains/Movie/api/Details/types/Params';
import RawResponse from 'domains/Movie/api/Details/types/RawResponse';
import Response from 'domains/Movie/api/Details/types/Response';
import Recommendations from 'domains/Movie/api/Recommendations/types/Response';
import Credits from 'domains/Movie/api/Credits/types/Response';

import Crew from 'domains/Movie/api/Credits/types/Crew';
import Cast from 'domains/Movie/api/Credits/types/Cast';
import Image from 'shared/types/Image';

const Details = async (movieId: number, params?: Params): Promise<Response> => {
  const response = await rawPopular(movieId, params);

  return parseResponse(response);
};

export const rawPopular = async (
  movieId: number,
  params?: Params,
): Promise<RawResponse> => {
  const response = await tmdb.get(`/movie/${movieId}`, {
    params: {
      append_to_response: params?.appendToResponse,
      include_image_language: params?.includeImageLanguage || 'pt,en,null',
    },
  });

  return response.data;
};

const parseResponse = (movie: RawResponse): Response => {
  const posters = movie.images?.posters.map(poster => ({
    aspectRatio: poster.aspect_ratio,
    height: poster.height,
    width: poster.width,
    voteAverage: poster.vote_average,
    voteCount: poster.vote_count,
    featuredImage: getFeaturedImage(poster),
  })) as Image[];

  const backdrops = movie.images?.backdrops.map(backdrop => ({
    aspectRatio: backdrop.aspect_ratio,
    height: backdrop.height,
    width: backdrop.width,
    voteAverage: backdrop.vote_average,
    voteCount: backdrop.vote_count,
    featuredImage: getFeaturedImage(backdrop),
  })) as Image[];

  const images = { posters, backdrops };

  const recommendations = movie.recommendations?.results.map(
    recommendation => ({
      backdrop: getBackdrop(recommendation),
      id: recommendation.id,

      featuredImage: getFeaturedImage(recommendation),
      releaseYear: getReleaseYear(recommendation),
      subtitle: getSubtitle(recommendation),
      title: getTitle(recommendation),
      favorite: false,
      mediaType: EntityType.MOVIE,
    }),
  ) as Recommendations[];

  const cast = movie.credits?.cast.slice(0, 15).map(person => ({
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
    title: getTitle(person),
    favorite: false,
    mediaType: EntityType.PERSON,
  })) as Cast[];

  const crew = movie.credits?.crew.map(person => ({
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
    overview: movie.overview,
    budget: movie.budget,
    genres: movie.genres,
    genresNames: arrayToString(movie.genres, 'name'),
    id: movie.id,
    originalTitle: movie.original_title,
    popularity: movie.popularity,
    voteCount: movie.vote_count,
    voteAverage: movie.vote_average,
    runtime: `${movie.runtime} min`,
    tagline: movie.tagline,

    directorName: movie.credits?.crew.find(
      person => person.job.toUpperCase() === 'DIRECTOR',
    )?.name,

    releaseDate: getReleaseDate(movie),
    backdrop: getRandomBackdrop(backdrops) || getBackdrop(movie),

    featuredImage: getFeaturedImage(movie),
    releaseYear: getReleaseYear(movie),
    subtitle: getReleaseDate(movie),
    title: getTitle(movie),
    favorite: false,
    mediaType: EntityType.MOVIE,
  } as Response;

  parsedMovie = { ...parsedMovie, recommendations, credits, images };

  return parsedMovie;
};

export default Details;
