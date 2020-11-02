import tmdb from 'services/api/tmdb';

import Params from 'domains/Person/api/Details/Params';
import RawResponse from 'domains/Person/api/Details/RawResponse';
import Response from 'domains/Person/api/Details/Response';
import Movie from 'domains/Person/api/Details/Movie';
// import Credits from 'domains/Person/api/Credits/Response';
import { formatDate, formatTmdbImage, getMediaTypeId } from 'shared/utils';
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

    profile: formatTmdbImage({ value: person.profile_path }),
    birthday: formatDate({ value: person.birthday }),
    deathday: formatDate({ value: person.deathday }),
  } as Response;

  const movies = person.combined_credits?.cast
    .map(movie => ({
      poster: formatTmdbImage({ value: movie.poster_path }),
      backdrop: formatTmdbImage({ value: movie.poster_path }),
      id: movie.id,
      title: movie.title,
      favorite: false,
      character: movie.character.toUpperCase().includes('SELF')
        ? ''
        : movie.character,
      releaseDate: formatDate({
        value: movie.release_date || movie.first_air_date,
      }),
      originalDate: movie.release_date || movie.first_air_date,
      year:
        (movie.release_date && movie.release_date.substring(0, 4)) ||
        (movie.first_air_date && movie.first_air_date.substring(0, 4)),
      popularity: movie.popularity,
      name: movie.name,
      mediaType: getMediaTypeId(movie.media_type),
    }))
    .filter(item => item.originalDate && item.character.length > 0) as Movie[];

  const knownFor = [...movies]
    .sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
    .slice(0, 30);
  const filmography = [...movies].sort((a, b) =>
    Date.parse(a.originalDate) < Date.parse(b.originalDate) ? 1 : -1,
  );

  parsedPerson = { ...parsedPerson, knownFor, filmography };

  return parsedPerson;
};

export default Details;
