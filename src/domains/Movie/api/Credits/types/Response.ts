import Cast from 'domains/Movie/api/Credits/types/Cast';
import Crew from 'domains/Movie/api/Credits/types/Crew';

export default interface Response {
  cast: Cast[];
  crew: Crew[];
}
