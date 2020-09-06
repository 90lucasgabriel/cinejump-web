import { Dispatch, SetStateAction } from 'react';

export default interface ContextData {
  favoriteList: any[];
  setFavoriteList: Dispatch<SetStateAction<any[]>>;
  Favorites(): any;
}
