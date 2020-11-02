import React, { createContext, useCallback, useContext, useState } from 'react';

import ListResponse from 'domains/Favorites/api/List/Response';
import UpdateResponse from 'domains/Favorites/api/Update/Response';
import {
  Favorites as FavoritesApi,
  UpdateFavorite as UpdateFavoriteApi,
} from 'domains/Favorites/api';
import ContextData from '../dtos/ContextData';

const FavoriteContext = createContext<ContextData>({} as ContextData);

const FavoriteProvider: React.FC = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([] as any[]);

  const Favorites = useCallback(async (): Promise<ListResponse[]> => {
    const response = await FavoritesApi();
    const updatedResponse = response.map(movie => ({
      ...movie,
      favorite: true,
    }));

    setFavoriteList(updatedResponse);

    return updatedResponse;
  }, []);

  const UpdateFavorite = useCallback(
    async (
      entityId: number,
      typeId: number,
    ): Promise<UpdateResponse | null> => {
      const response = await UpdateFavoriteApi(entityId, typeId);

      // Remove favorite
      if (!response) {
        const updatedFavoriteList = favoriteList.filter(
          favorite =>
            !(favorite.entityId === entityId && favorite.typeId === typeId),
        );
        setFavoriteList(updatedFavoriteList);

        return null;
      }

      // Add favorite
      setFavoriteList([...favoriteList, response]);

      return response;
    },
    [favoriteList],
  );

  return (
    <FavoriteContext.Provider
      value={{
        favoriteList,
        setFavoriteList,
        Favorites,
        UpdateFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite(): ContextData {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite must be used within an FavoriteProvider.');
  }

  return context;
}

export { FavoriteProvider, useFavorite };
