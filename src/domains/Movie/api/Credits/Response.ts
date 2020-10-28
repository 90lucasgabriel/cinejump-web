import Cast from 'domains/Movie/api/Credits/dtos/Cast';
import Crew from 'domains/Movie/api/Credits/dtos/Crew';

export default interface Response {
  cast: Cast[];
  crew: Crew[];
}
