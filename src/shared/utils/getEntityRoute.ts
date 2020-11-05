import Route from 'routes/enums';
import { EntityType } from 'shared/utils/enums';

const getEntityRoute = (mediaTypeId?: number): string | undefined => {
  if (mediaTypeId === EntityType.TV) {
    return Route.TV;
  }

  if (mediaTypeId === EntityType.MOVIE) {
    return Route.MOVIE;
  }

  if (mediaTypeId === EntityType.PERSON) {
    return Route.PERSON;
  }
};

export default getEntityRoute;
