import LoginCredentials from './LoginCredentials';

export default interface ContextData {
  user: object;
  login(loginCredentials: LoginCredentials): void;
  logout(): void;
}
