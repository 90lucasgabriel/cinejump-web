import RawResponse from 'domains/Auth/api/PostAuth/RawResponse';
import Response from 'domains/Auth/api/PostAuth/Response';
import LoginCredentials from 'domains/Auth/dtos/LoginCredentials';
import api from 'services/api';

export const postRawAuth = async ({
  email,
  password,
}: LoginCredentials): Promise<RawResponse> => {
  const response = await api.post('/auth', {
    email,
    password,
  });

  return response.data;
};

export const postAuth = async ({
  email,
  password,
}: LoginCredentials): Promise<Response> => {
  const response = await postRawAuth({ email, password });

  return parseResponse(response);
};

const parseResponse = ({ token, user }: RawResponse): Response => {
  const parsedResponse = {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    },
  } as Response;

  return parsedResponse;
};
