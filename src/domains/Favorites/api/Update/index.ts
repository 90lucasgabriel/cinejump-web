import api from 'services/api';

import RawResponse from 'domains/Favorites/api/Update/RawResponse';
import Response from 'domains/Favorites/api/Update/Response';
import { Details } from 'domains/Movie/api';

const Update = async (movieId: number): Promise<Response | null> => {
  const response = await rawFavorites(movieId);

  if (!response) {
    return null;
  }

  return parseResponse(response);
};

export const rawFavorites = async (
  movieId: number,
): Promise<RawResponse | null> => {
  const response = await api.post('/favorites', {
    movie_id: movieId.toString(),
  });

  if (!response.data.movie_id) {
    return null;
  }

  return response.data;
};

const parseResponse = async (rawResponse: RawResponse): Promise<Response> => {
  const details = await Details(rawResponse.movie_id);
  const response = {
    ...details,
    favoriteId: rawResponse.id,
    userId: rawResponse.user_id,
    movieId: rawResponse.movie_id,
  };

  return response;
};

export default Update;
