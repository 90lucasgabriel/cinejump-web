import React, { createContext, useCallback, useContext, useState } from 'react';

import { Favorites as FavoritesApi } from 'domains/Favorites/api';
import ContextData from '../dtos/ContextData';

const FavoriteContext = createContext<ContextData>({} as ContextData);

const FavoriteProvider: React.FC = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([] as any[]);

  const Favorites = useCallback(async () => {
    const response = await FavoritesApi();
    const updatedResponse = response.map(movie => ({
      ...movie,
      favorite: true,
    }));

    setFavoriteList(updatedResponse);

    return updatedResponse;
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteList,
        setFavoriteList,
        Favorites,
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
