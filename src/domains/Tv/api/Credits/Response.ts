import Cast from 'domains/Tv/api/Credits/dtos/Cast';
import Crew from 'domains/Tv/api/Credits/dtos/Crew';

export default interface Response {
  cast: Cast[];
  crew: Crew[];
}
