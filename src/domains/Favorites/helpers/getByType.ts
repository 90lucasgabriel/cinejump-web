import { EntityType } from 'shared/utils/enums';
import { Details as MovieDetails } from 'domains/Movie/api';
import { Details as TvDetails } from 'domains/Tv/api';
import { Details as PersonDetails } from 'domains/Person/api';

const getByType = async (favorite: any): Promise<any> => {
  if (favorite.type_id === EntityType.TV) {
    return TvDetails(favorite.entity_id);
  }

  if (favorite.type_id === EntityType.MOVIE) {
    return MovieDetails(favorite.entity_id);
  }

  if (favorite.type_id === EntityType.PERSON) {
    return PersonDetails(favorite.entity_id);
  }
};

export default getByType;
