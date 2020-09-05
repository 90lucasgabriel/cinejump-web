import api from 'services/api';

import RawResponse from 'domains/Favorites/api/List/RawResponse';
import Response from 'domains/Favorites/api/List/Response';
import { Details } from 'domains/Movie/api';

const Favorites = async (): Promise<Response[]> => {
  const response = await rawFavorites();

  return parseResponse(response);
};

export const rawFavorites = async (): Promise<RawResponse[]> => {
  const response = await api.get('/favorites');

  return response.data;
};

const parseResponse = async (
  rawResponse: RawResponse[],
): Promise<Response[]> => {
  let response = [] as any[];

  // Parse API user favorites
  rawResponse.forEach(favorite => {
    const parsedFavorite = {
      id: favorite.id,
      userId: favorite.user_id,
      movieId: favorite.movie_id,
    };

    response = [...response, parsedFavorite];
  });

  // Get favorites details from TMDB API and merge
  const parsedResponse = response.map(async (favorite: Response) => {
    const details = await Details(favorite.movieId);

    return { ...details, ...favorite, id: favorite.id };
  });

  const resolvedResponse = await Promise.all(parsedResponse);

  return resolvedResponse;
};

export default Favorites;
