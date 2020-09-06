import { Environment as EnvironmentEnum } from 'domains/Environment/enums/Environment';

export default interface Environment {
  key: EnvironmentEnum;
  name: string;
  apiUrl: string;
}
