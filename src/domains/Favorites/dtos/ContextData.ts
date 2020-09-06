import { Dispatch, SetStateAction } from 'react';

import ListResponse from 'domains/Favorites/api/List/Response';
import UpdateResponse from 'domains/Favorites/api/Update/Response';

export default interface ContextData {
  favoriteList: ListResponse[];
  setFavoriteList: Dispatch<SetStateAction<ListResponse[]>>;
  Favorites(): Promise<ListResponse[]>;
  UpdateFavorite(movieId: number): Promise<UpdateResponse | null>;
}