import Cast from 'domains/Tv/api/Credits/types/Cast';
import Crew from 'domains/Tv/api/Credits/types/Crew';

export default interface Response {
  cast: Cast[];
  crew: Crew[];
}
