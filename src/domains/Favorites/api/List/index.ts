import api from 'services/api';

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

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
  let response = [] as Response[];

  rawResponse.forEach(favorite => {
    const parsedFavorite = {
      id: favorite.id,
      userId: favorite.user_id,
      movieId: favorite.movie_id,
    } as Response;

    response = [...response, parsedFavorite];
  });

  return response;
};

export default Favorites;
