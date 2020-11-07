import { Dispatch, SetStateAction } from 'react';

import ListResponse from 'domains/Favorites/api/List/types/Response';
import UpdateResponse from 'domains/Favorites/api/Update/types/Response';

export default interface ContextData {
  favoriteList: ListResponse[];
  setFavoriteList: Dispatch<SetStateAction<ListResponse[]>>;
  Favorites(): Promise<ListResponse[]>;
  UpdateFavorite(
    entityId: number,
    typeId: number,
  ): Promise<UpdateResponse | null>;
}
