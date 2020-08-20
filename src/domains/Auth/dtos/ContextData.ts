import LoginCredentials from './LoginCredentials';

export default interface ContextData {
  user: object;
  login(loginCredentials: LoginCredentials): Promise<void>;
  logout(): void;
}
