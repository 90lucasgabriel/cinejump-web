import api from 'services/api';

import { getByType } from 'domains/Favorites/helpers';
import RawResponse from 'domains/Favorites/api/List/RawResponse';
import Response from 'domains/Favorites/api/List/Response';

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
  const response = rawResponse.map(async (favorite: RawResponse) => {
    // Get favorites details from TMDB API and merge
    const details = await getByType(favorite);

    // Merge API and TMDB results
    return {
      ...details,
      favoriteId: favorite.id,
      userId: favorite.user_id,
      entityId: favorite.entity_id,
      typeId: favorite.type_id,
    };
  });

  // Resolve async requests and promises
  const resolvedResponse = Promise.all(response);

  return resolvedResponse;
};

export default Favorites;
