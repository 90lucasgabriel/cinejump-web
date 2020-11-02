import { Type } from 'domains/Favorites/enums';
import { Details as MovieDetails } from 'domains/Movie/api';
import { Details as TvDetails } from 'domains/Tv/api';
import { Details as PersonDetails } from 'domains/Person/api';

const getByType = async (favorite: any): Promise<any> => {
  if (favorite.type_id === Type.MOVIE) {
    return MovieDetails(favorite.entity_id);
  }

  if (favorite.type_id === Type.TV) {
    return TvDetails(favorite.entity_id);
  }

  if (favorite.type_id === Type.PERSON) {
    return PersonDetails(favorite.entity_id);
  }
};

export default getByType;
