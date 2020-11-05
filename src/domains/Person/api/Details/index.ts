import tmdb from 'services/api/tmdb';

import Params from 'domains/Person/api/Details/Params';
import RawResponse from 'domains/Person/api/Details/RawResponse';
import Response from 'domains/Person/api/Details/Response';
import Movie from 'domains/Person/api/Details/Movie';
// import Credits from 'domains/Person/api/Credits/Response';
import { formatDate, formatTmdbImage, getMediaTypeId } from 'shared/utils';
import { EntityType } from 'shared/enums';
// import Crew from 'domains/Person/api/Credits/dtos/Crew';
// import Cast from 'domains/Person/api/Credits/dtos/Cast';
// import { arrayToString } from 'shared/utils';

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
    gender: person.gender === 2 ? 'Masculino' : 'Feminino',
    alsoKnownAs: person.also_known_as,
    adult: person.adult,
    imdbId: person.imdb_id,
    homepage: person.homepage,

    birthday: formatDate({ value: person.birthday }),
    deathday: formatDate({ value: person.deathday }),

    featuredImage: formatTmdbImage({ value: person.profile_path }),
    releaseYear: person.birthday?.substring(0, 4),
    subtitle: formatDate({ value: person.birthday }),
    title: person.name,
    favorite: false,
    mediaType: EntityType.PERSON,
  } as Response;

  const combinedProductions = person.combined_credits?.cast
    .map(production => ({
      poster: formatTmdbImage({ value: production.poster_path }),
      backdrop: formatTmdbImage({ value: production.poster_path }),
      id: production.id,
      character: production.character.toUpperCase().includes('SELF')
        ? ''
        : production.character,
      releaseDate: formatDate({
        value: production.release_date || production.first_air_date,
      }),
      originalDate: production.release_date || production.first_air_date,
      year:
        (production.release_date && production.release_date.substring(0, 4)) ||
        (production.first_air_date &&
          production.first_air_date.substring(0, 4)),
      popularity: production.popularity,
      name: production.name,

      featuredImage: formatTmdbImage({
        value: production.poster_path || production.first_air_date,
      }),
      releaseYear:
        (production.release_date && production.release_date.substring(0, 4)) ||
        (production.first_air_date &&
          production.first_air_date.substring(0, 4)),
      subtitle:
        (production.release_date && production.release_date.substring(0, 4)) ||
        (production.first_air_date &&
          production.first_air_date.substring(0, 4)),
      title: production.title || production.name,
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
