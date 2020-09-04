import React, { createContext, useCallback, useContext, useState } from 'react';
import api from 'services/api';

// import { postRawFavorites } from 'domains/Favorites/api/PostFavorites';
import ContextData from '../dtos/ContextData';
import FavoritesState from '../dtos/FavoritesState';

const FavoritesContext = createContext<ContextData>({} as ContextData);

const FavoritesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<FavoritesState>(() => {
    return {} as FavoritesState;
  });

  // const update = useCallback(async ({ movieId }): Promise<void> => {
  //   const response = await updateFavorites({ movieId });

  //   if (response) {
  //     setData({ ...data, response });
  //     return;
  //   }

  //   const newData = data.filter(favorite => favorite)

  // }, []);

  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
};

function useFavorites(): ContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider.');
  }

  return context;
}

export { FavoritesProvider, useFavorites };
