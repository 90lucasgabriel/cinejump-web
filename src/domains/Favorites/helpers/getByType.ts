import { Type } from 'domains/Favorites/enums';
import { Details } from 'domains/Movie/api';

const getByType = async (favorite: any): Promise<any> => {
  if (favorite.type_id === Type.TV) {
    return Details(favorite.entity_id);
  }

  if (favorite.type_id === Type.PERSON) {
    return Details(favorite.entity_id);
  }

  return Details(favorite.entity_id);
};

export default getByType;
