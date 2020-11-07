import tmdb from 'services/api/tmdb';

import { formatDate, getMediaTypeId } from 'shared/utils';
import { EntityType } from 'shared/enums';
import {
  getCharacter,
  getFeaturedImage,
  getGender,
  getOriginalDate,
  getReleaseDate,
  getReleaseYear,
  getSubtitle,
  getTitle,
} from 'shared/utils/Entity';

import Params from 'domains/Person/api/Details/types/Params';
import RawResponse from 'domains/Person/api/Details/types/RawResponse';
import Response from 'domains/Person/api/Details/types/Response';
import Movie from 'domains/Person/api/Details/types/Movie';

const Details = async (
  personId: number,
  params?: Params,
): Promise<Response> => {
  const response = await rawPopular(personId, params);

  return parseResponse(response);
};

export const rawPopular = async (
  personId: number,
  params?: Params,
): Promise<RawResponse> => {
  const response = await tmdb.get(`/person/${personId}`, {
    params: { append_to_response: params?.appendToResponse },
  });

  return response.data;
};

const parseResponse = (person: RawResponse): Response => {
  let parsedPerson = {
    id: person.id,
    name: person.name,
    placeOfBirth: person.place_of_birth,
    biography: person.biography,
    popularity: person.popularity,

    knownForDepartment: person.known_for_department,
    gender: getGender(person),
    alsoKnownAs: person.also_known_as,
    adult: person.adult,
    imdbId: person.imdb_id,
    homepage: person.homepage,

    birthday: getReleaseDate(person),
    deathday: formatDate({ value: person.deathday }),

    featuredImage: getFeaturedImage(person),
    releaseYear: person.birthday?.substring(0, 4),
    subtitle: getReleaseDate(person),
    title: person.name,
    favorite: false,
    mediaType: EntityType.PERSON,
  } as Response;

  const combinedProductions = person.combined_credits?.cast
    .map(production => ({
      poster: getFeaturedImage(production),
      backdrop: getFeaturedImage(production),
      id: production.id,
      character: getCharacter(production),
      releaseDate: getReleaseDate(production),
      originalDate: getOriginalDate(production),
      year: getReleaseYear(production),
      popularity: production.popularity,
      name: production.name,

      featuredImage: getFeaturedImage(production),
      releaseYear: getReleaseYear(production),
      subtitle: getSubtitle(production),
      title: getTitle(production),
      favorite: false,
      mediaType: getMediaTypeId(production.media_type),
    }))
    .filter(item => item.originalDate && item.character.length > 0) as Movie[];

  const knownFor =
    combinedProductions &&
    [...combinedProductions]
      ?.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
      .slice(0, 30);
  const filmography =
    combinedProductions &&
    [...combinedProductions]?.sort((a, b) =>
      Date.parse(a.originalDate) < Date.parse(b.originalDate) ? 1 : -1,
    );

  parsedPerson = { ...parsedPerson, knownFor, filmography };

  return parsedPerson;
};

export default Details;
