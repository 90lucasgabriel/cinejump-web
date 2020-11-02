import api from 'services/api';

import { getByType } from 'domains/Favorites/helpers';
import RawResponse from 'domains/Favorites/api/Update/RawResponse';
import Response from 'domains/Favorites/api/Update/Response';

const Update = async (
  entityId: number,
  typeId: number,
): Promise<Response | null> => {
  const response = await rawFavorites(entityId, typeId);

  if (!response) {
    return null;
  }

  return parseResponse(response);
};

export const rawFavorites = async (
  entityId: number,
  typeId: number,
): Promise<RawResponse | null> => {
  const response = await api.post('/favorites', {
    entity_id: entityId.toString(),
    type_id: typeId.toString(),
  });

  if (!response.data.entity_id) {
    return null;
  }

  return response.data;
};

const parseResponse = async (rawResponse: RawResponse): Promise<Response> => {
  const details = await getByType(rawResponse);
  const response = {
    ...details,
    favoriteId: rawResponse.id,
    userId: rawResponse.user_id,
    entityId: rawResponse.entity_id,
    typeId: rawResponse.type_id,
  };

  return response;
};

export default Update;
